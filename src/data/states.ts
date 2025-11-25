import type { State } from '../types';

export const EXCLUDED_STATES = ["CA", "HI", "RI", "IA", "ND", "NY"] as const;

export const STATES: State[] = [
  { code: "AL", name: "Alabama", slug: "alabama" },
  { code: "AK", name: "Alaska", slug: "alaska" },
  { code: "AZ", name: "Arizona", slug: "arizona" },
  { code: "AR", name: "Arkansas", slug: "arkansas" },
  { code: "CO", name: "Colorado", slug: "colorado" },
  { code: "CT", name: "Connecticut", slug: "connecticut" },
  { code: "DE", name: "Delaware", slug: "delaware" },
  { code: "FL", name: "Florida", slug: "florida" },
  { code: "GA", name: "Georgia", slug: "georgia" },
  { code: "ID", name: "Idaho", slug: "idaho" },
  { code: "IL", name: "Illinois", slug: "illinois" },
  { code: "IN", name: "Indiana", slug: "indiana" },
  { code: "KS", name: "Kansas", slug: "kansas" },
  { code: "KY", name: "Kentucky", slug: "kentucky" },
  { code: "LA", name: "Louisiana", slug: "louisiana" },
  { code: "MA", name: "Massachusetts", slug: "massachusetts" },
  { code: "MD", name: "Maryland", slug: "maryland" },
  { code: "ME", name: "Maine", slug: "maine" },
  { code: "MI", name: "Michigan", slug: "michigan" },
  { code: "MN", name: "Minnesota", slug: "minnesota" },
  { code: "MO", name: "Missouri", slug: "missouri" },
  { code: "MS", name: "Mississippi", slug: "mississippi" },
  { code: "MT", name: "Montana", slug: "montana" },
  { code: "NC", name: "North Carolina", slug: "north-carolina" },
  { code: "NE", name: "Nebraska", slug: "nebraska" },
  { code: "NH", name: "New Hampshire", slug: "new-hampshire" },
  { code: "NJ", name: "New Jersey", slug: "new-jersey" },
  { code: "NM", name: "New Mexico", slug: "new-mexico" },
  { code: "NV", name: "Nevada", slug: "nevada" },
  { code: "OH", name: "Ohio", slug: "ohio" },
  { code: "OK", name: "Oklahoma", slug: "oklahoma" },
  { code: "OR", name: "Oregon", slug: "oregon" },
  { code: "PA", name: "Pennsylvania", slug: "pennsylvania" },
  { code: "SC", name: "South Carolina", slug: "south-carolina" },
  { code: "SD", name: "South Dakota", slug: "south-dakota" },
  { code: "TN", name: "Tennessee", slug: "tennessee" },
  { code: "TX", name: "Texas", slug: "texas" },
  { code: "UT", name: "Utah", slug: "utah" },
  { code: "VA", name: "Virginia", slug: "virginia" },
  { code: "VT", name: "Vermont", slug: "vermont" },
  { code: "WA", name: "Washington", slug: "washington" },
  { code: "WI", name: "Wisconsin", slug: "wisconsin" },
  { code: "WV", name: "West Virginia", slug: "west-virginia" },
  { code: "WY", name: "Wyoming", slug: "wyoming" },
];

export const getStateBySlug = (slug: string) => STATES.find((s) => s.slug === slug);
export const getStateByCode = (code: string) => STATES.find((s) => s.code === code);
export const isExcludedState = (code: string) => EXCLUDED_STATES.includes(code as any);