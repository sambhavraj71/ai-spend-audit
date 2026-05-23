"use client";

import { AuditResult } from "../../lib/audit-engine";

interface Props {
  result: AuditResult;
}

export default function AuditResults({
  result,
}: Props) {

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 mt-10">

      {/* Heading */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900">
          Audit Results
        </h2>

        <p className="text-gray-600 mt-2">
          AI spending analysis and optimization insights.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-3 gap-6">

        {/* Monthly Spend */}
        <div className="bg-indigo-50 rounded-2xl p-6 border border-indigo-100">
          <p className="text-sm text-gray-500 mb-2">
            Monthly Spend
          </p>

          <h3 className="text-3xl font-bold text-indigo-700">
            ${result.totalMonthlySpend}
          </h3>
        </div>

        {/* Yearly Spend */}
        <div className="bg-purple-50 rounded-2xl p-6 border border-purple-100">
          <p className="text-sm text-gray-500 mb-2">
            Yearly Spend
          </p>

          <h3 className="text-3xl font-bold text-purple-700">
            ${result.totalYearlySpend}
          </h3>
        </div>

        {/* Potential Savings */}
        <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
          <p className="text-sm text-gray-500 mb-2">
            Potential Savings
          </p>

          <h3 className="text-3xl font-bold text-green-700">
            ${result.potentialSavings}
          </h3>
        </div>
      </div>

      {/* Recommendations */}
      <div className="mt-10">

        <h3 className="text-2xl font-bold text-gray-900 mb-5">
          Recommendations
        </h3>

        <div className="space-y-4">

          {result.recommendations.map(
            (recommendation, index) => (

              <div
                key={index}
                className="bg-gray-50 border border-gray-200 rounded-xl p-4 flex items-start gap-3"
              >

                <div className="w-7 h-7 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-sm font-bold">
                  ✓
                </div>

                <p className="text-gray-700 leading-relaxed">
                  {recommendation}
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}