"use client";

import { useEffect, useState } from "react";
import ToolCard from "./tool-card";
import { AuditFormData, ToolInput } from "../../types/audit";

const initialTool: ToolInput = {
  id: 1,
  tool: "",
  plan: "",
  monthlySpend: 0,
  seats: 1,
};

const initialData: AuditFormData = {
  teamSize: 1,
  useCase: "",
  tools: [initialTool],
};

export default function AuditForm() {

  const [formData, setFormData] =
    useState<AuditFormData>(() => {

      if (typeof window !== "undefined") {
        const saved =
          localStorage.getItem("audit-form");

        if (saved) {
          return JSON.parse(saved);
        }
      }

      return initialData;
    });

  // Save localStorage
  useEffect(() => {
    localStorage.setItem(
      "audit-form",
      JSON.stringify(formData)
    );
  }, [formData]);

  // Add Tool
  const addTool = () => {
    const newTool: ToolInput = {
      id: Date.now(),
      tool: "",
      plan: "",
      monthlySpend: 0,
      seats: 1,
    };

    setFormData({
      ...formData,
      tools: [...formData.tools, newTool],
    });
  };

  // Remove Tool
  const removeTool = (id: number) => {
    setFormData({
      ...formData,
      tools: formData.tools.filter(
        (tool) => tool.id !== id
      ),
    });
  };

  // Update Tool
  const updateTool = (updatedTool: ToolInput) => {
    setFormData({
      ...formData,
      tools: formData.tools.map((tool) =>
        tool.id === updatedTool.id
          ? updatedTool
          : tool
      ),
    });
  };

  return (
    <div className="space-y-8">

      {/* Global Inputs */}
      <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6 border border-gray-100">

        <h2 className="text-3xl font-bold text-gray-900">
          Team Audit Details
        </h2>

        {/* Team Size */}
        <div>
          <label className="block mb-2 text-sm font-medium">
            Team Size
          </label>

          <input
            type="number"
            value={formData.teamSize}
            onChange={(e) =>
              setFormData({
                ...formData,
                teamSize: Number(e.target.value),
              })
            }
            className="w-full border border-gray-300 rounded-lg p-3"
          />
        </div>

        {/* Use Case */}
        <div>
          <label className="block mb-2 text-sm font-medium">
            Primary Use Case
          </label>

          <select
            value={formData.useCase}
            onChange={(e) =>
              setFormData({
                ...formData,
                useCase: e.target.value,
              })
            }
            className="w-full border border-gray-300 rounded-lg p-3"
          >
            <option value="">
              Select Use Case
            </option>

            <option value="coding">
              Coding
            </option>

            <option value="writing">
              Writing
            </option>

            <option value="research">
              Research
            </option>

            <option value="design">
              Design
            </option>

            <option value="mixed">
              Mixed
            </option>
          </select>
        </div>
      </div>

      {/* Tool Cards */}
      <div className="space-y-6">

        {formData.tools.map((tool) => (
          <ToolCard
            key={tool.id}
            toolData={tool}
            onChange={updateTool}
            onRemove={removeTool}
          />
        ))}
      </div>

      {/* Add Tool Button */}
      <button
        onClick={addTool}
        className="w-full border-2 border-dashed border-indigo-300 rounded-2xl p-5 text-indigo-600 font-semibold hover:bg-indigo-50 transition"
      >
        + Add Another Tool
      </button>

      {/* Generate Audit */}
      <button className="w-full bg-indigo-600 text-white rounded-2xl p-4 text-lg font-semibold hover:bg-indigo-700 transition shadow-lg">
        Generate Audit
      </button>
    </div>
  );
}