"use client";

import { useEffect, useState } from "react";

import ToolCard from "./tool-card";

import {
  AuditFormData,
  ToolInput,
} from "../../types/audit";

import AuditResults from "../result/audit-results";

import {
  generateAudit,
  AuditResult,
} from "../../lib/audit-engine";

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

 // Here i update form state
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

  
  const [result, setResult] =
    useState<AuditResult | null>(null);

  
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
  const updateTool = (
    updatedTool: ToolInput
  ) => {

    setFormData({
      ...formData,
      tools: formData.tools.map((tool) =>
        tool.id === updatedTool.id
          ? updatedTool
          : tool
      ),
    });
  };

  // Generate Audit
  const handleGenerateAudit = () => {

    const auditResult =
      generateAudit(formData);

    setResult(auditResult);
  };

  return (
    <div className="space-y-8">

      {/* Team Details */}
      <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6 border border-gray-100">

        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Team Audit Details
          </h2>

          <p className="text-gray-600 mt-2">
            Enter your AI stack information
            to discover savings opportunities.
          </p>
        </div>

        {/* Team Size */}
        <div>

          <label className="block mb-2 text-sm font-medium text-gray-700">
            Team Size
          </label>

          <input
            type="number"
            min="1"
            value={formData.teamSize}
            onChange={(e) =>
              setFormData({
                ...formData,
                teamSize: Number(e.target.value),
              })
            }
            className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Use Case */}
        <div>

          <label className="block mb-2 text-sm font-medium text-gray-700">
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
            className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
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

      {/* Generate Audit Button */}
      <button
        onClick={handleGenerateAudit}
        className="w-full bg-indigo-600 text-white rounded-2xl p-4 text-lg font-semibold hover:bg-indigo-700 transition shadow-lg hover:shadow-xl"
      >
        Generate Audit
      </button>

      {/* Results */}
      {result && (
        <AuditResults result={result} />
      )}
    </div>
  );
}