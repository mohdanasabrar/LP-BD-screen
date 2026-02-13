export type IncomeType = 'salaried' | 'business' | null;
export type CohortType = 'fresh' | 'prefilled_all' | 'prefilled_pan_email';

export interface TrustMarker {
  id: number;
  text: string;
}

export interface UserDetails {
  pan: string;
  email: string;
}