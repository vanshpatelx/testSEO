import { STATES } from '../data/states';
import type { State } from '../types';

// Group states by region for related states suggestions
const STATE_REGIONS: Record<string, string[]> = {
  'Northeast': ['ME', 'NH', 'VT', 'MA', 'CT', 'NJ', 'PA', 'DE', 'MD'],
  'Southeast': ['VA', 'WV', 'NC', 'SC', 'GA', 'FL', 'AL', 'MS', 'LA', 'TN', 'KY'],
  'Midwest': ['OH', 'IN', 'IL', 'MI', 'WI', 'MN', 'MO', 'KS', 'NE', 'SD'],
  'Southwest': ['TX', 'OK', 'NM', 'AZ'],
  'West': ['CO', 'UT', 'NV', 'ID', 'MT', 'WY', 'WA', 'OR'],
  'Alaska': ['AK']
};

export const getRelatedStates = (stateCode: string, limit: number = 3): State[] => {
  // Find which region this state belongs to
  let region = '';
  for (const [regionName, codes] of Object.entries(STATE_REGIONS)) {
    if (codes.includes(stateCode)) {
      region = regionName;
      break;
    }
  }
  
  if (!region) return [];
  
  // Get other states in the same region
  const regionStates = STATE_REGIONS[region]
    .filter(code => code !== stateCode)
    .map(code => STATES.find(s => s.code === code))
    .filter((s): s is State => s !== undefined)
    .slice(0, limit);
  
  return regionStates;
};
