const firstName = "Victor";
const lastName = "Adamovich";

/** Who the site is about: every piece of copy that repeats lives here. */
export const PROFILE = {
  firstName,
  lastName,
  name: `${firstName} ${lastName}`,
  initials: `${firstName[0]}${lastName[0]}`,
  role: "Frontend developer",
  status: "Open to offers",
  location: "Poland / Belarus",
  headline: "React · Next.js · TypeScript · Web3",
  bio: "Frontend developer with 4.5 years in React and Next.js. I build DeFi swaps, wallet connections, checkouts and subscription flows that hold up in production.",
  /** months on the timeline are counted in this zone */
  timeZone: "Europe/Minsk",
} as const;
