import { PROFILE } from "@/shared/config";
import { monthAt } from "@/shared/lib/month";
import { ROLES } from "./roles";
import { buildTimeline } from "./timeline";

/** The site's timeline as of a given moment, in the profile's time zone. */
export const timelineAt = (date: Date) => buildTimeline(ROLES, monthAt(date, PROFILE.timeZone));
