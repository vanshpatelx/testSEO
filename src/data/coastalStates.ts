import type { State } from '../types';

export const COASTAL_STATES: State[] = [
  { code: "TX", name: "Texas", slug: "texas" },
  { code: "LA", name: "Louisiana", slug: "louisiana" },
  { code: "MS", name: "Mississippi", slug: "mississippi" },
  { code: "AL", name: "Alabama", slug: "alabama" },
  { code: "GA", name: "Georgia", slug: "georgia" },
  { code: "SC", name: "South Carolina", slug: "south-carolina" },
  { code: "NC", name: "North Carolina", slug: "north-carolina" },
  { code: "VA", name: "Virginia", slug: "virginia" },
  { code: "NJ", name: "New Jersey", slug: "new-jersey" },
  { code: "CT", name: "Connecticut", slug: "connecticut" },
  { code: "ME", name: "Maine", slug: "maine" },
  { code: "NH", name: "New Hampshire", slug: "new-hampshire" }
];

export const getCoastalStateBySlug = (slug: string) => 
  COASTAL_STATES.find(s => s.slug === slug);