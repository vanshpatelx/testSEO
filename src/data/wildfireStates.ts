import type { State } from '../types';

export const WILDFIRE_STATES: State[] = [
  { code: "AZ", name: "Arizona", slug: "arizona" },
  { code: "NV", name: "Nevada", slug: "nevada" },
  { code: "NM", name: "New Mexico", slug: "new-mexico" },
  { code: "CO", name: "Colorado", slug: "colorado" },
  { code: "OR", name: "Oregon", slug: "oregon" },
  { code: "ID", name: "Idaho", slug: "idaho" },
  { code: "WA", name: "Washington", slug: "washington" },
  { code: "UT", name: "Utah", slug: "utah" }
];

export const getWildfireStateBySlug = (slug: string) => 
  WILDFIRE_STATES.find(s => s.slug === slug);