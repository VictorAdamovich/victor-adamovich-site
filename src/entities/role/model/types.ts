import type { Tone } from "@/shared/config";
import type { MonthKey } from "@/shared/lib/month";

export type Role = {
  company: string;
  description: string;
  tone: Tone;
  /** inclusive month range; no `to` means the role is ongoing */
  from: MonthKey;
  to?: MonthKey;
};
