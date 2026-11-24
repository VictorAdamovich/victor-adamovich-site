import { formatMonth } from "@/shared/lib/month";
import type { Role } from "../model/types";

/** Stable id for a role, used to link list items with matrix dots. */
export const roleId = (role: Role) => role.company.toLowerCase();

/** "06.2024 — 09.2025", or "10.2025 — now" for an ongoing role. */
export const formatPeriod = (role: Role) =>
  `${formatMonth(role.from)} — ${role.to ? formatMonth(role.to) : "now"}`;
