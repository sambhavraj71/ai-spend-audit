import { AuditFormData } from "../types/audit";

export interface AuditResult {
  totalMonthlySpend: number;
  totalYearlySpend: number;
  potentialSavings: number;
  recommendations: string[];
}

export function generateAudit(
  data: AuditFormData
): AuditResult {

  // Here we calculate total monthly expend
  const totalMonthlySpend =
    data.tools.reduce(
      (sum, tool) =>
        sum + tool.monthlySpend,
      0
    );

  // Here we calculate total Yearly Spend
  const totalYearlySpend =
    totalMonthlySpend * 12;

  // Here is savings Estimate
  const potentialSavings =
    Math.round(totalMonthlySpend * 0.23);

  // Recommendations
  const recommendations: string[] = [];

  
  if (data.tools.length > 3) {
    recommendations.push(
      "You may be paying for overlapping AI tools."
    );
  }

  
  if (totalMonthlySpend > 500) {
    recommendations.push(
      "Your AI spending is high. Consider consolidating subscriptions."
    );
  }

  
  if (
    data.tools.some(
      (tool) => tool.seats > data.teamSize
    )
  ) {
    recommendations.push(
      "Some tools have more seats than your team size."
    );
  }

  
  if (
    data.tools.some(
      (tool) => tool.monthlySpend > 200
    )
  ) {
    recommendations.push(
      "Some premium plans may be underutilized."
    );
  }

  // Default Recommendation
  if (recommendations.length === 0) {
    recommendations.push(
      "Your AI stack looks efficiently optimized."
    );
  }

  return {
    totalMonthlySpend,
    totalYearlySpend,
    potentialSavings,
    recommendations,
  };
}