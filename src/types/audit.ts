export interface ToolInput {
  id: number;
  tool: string;
  plan: string;
  monthlySpend: number;
  seats: number;
}

export interface AuditFormData {
  teamSize: number;
  useCase: string;
  tools: ToolInput[];
}