"use client";

import { ToolInput } from "../../types/audit";
import { tools } from "../../lib/tools";
import { Trash2 } from "lucide-react";

interface ToolCardProps {
  toolData: ToolInput;
  onChange: (updatedTool: ToolInput) => void;
  onRemove: (id: number) => void;
}

export default function ToolCard({
  toolData,
  onChange,
  onRemove,
}: ToolCardProps) {

  const selectedTool = tools.find(
    (tool) => tool.name === toolData.tool
  );

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 space-y-5 border border-gray-200">

      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">
          Tool Configuration
        </h2>

        <button
          onClick={() => onRemove(toolData.id)}
          className="text-red-500 hover:text-red-700 transition"
        >
          <Trash2 size={20} />
        </button>
      </div>

      {/* Tool */}
      <div>
        <label className="block mb-2 text-sm font-medium">
          Tool
        </label>

        <select
          value={toolData.tool}
          onChange={(e) =>
            onChange({
              ...toolData,
              tool: e.target.value,
              plan: "",
            })
          }
          className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-black"
        >
          <option value="">Select Tool</option>

          {tools.map((tool) => (
            <option key={tool.name} value={tool.name}>
              {tool.name}
            </option>
          ))}
        </select>
      </div>

      {/* Plan */}
      <div>
        <label className="block mb-2 text-sm font-medium">
          Plan
        </label>

        <select
          value={toolData.plan}
          onChange={(e) =>
            onChange({
              ...toolData,
              plan: e.target.value,
            })
          }
          className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-black"
        >
          <option value="">Select Plan</option>

          {selectedTool?.plans.map((plan) => (
            <option key={plan} value={plan}>
              {plan}
            </option>
          ))}
        </select>
      </div>

      {/* Monthly Spend */}
      <div>
        <label className="block mb-2 text-sm font-medium">
          Monthly Spend ($)
        </label>

        <input
          type="number"
          value={toolData.monthlySpend}
          onChange={(e) =>
            onChange({
              ...toolData,
              monthlySpend: Number(e.target.value),
            })
          }
          placeholder="Enter monthly spend"
          className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      {/* Seats */}
      <div>
        <label className="block mb-2 text-sm font-medium">
          Number of Seats
        </label>

        <input
          type="number"
          value={toolData.seats}
          onChange={(e) =>
            onChange({
              ...toolData,
              seats: Number(e.target.value),
            })
          }
          placeholder="Enter number of seats"
          className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-black"
        />
      </div>
    </div>
  );
}