import { Deliverable, Gender, PayoutType } from "../models";

export const CampaignFilters = [
    'applied',
    'hired',
    'completed',
    'invited',
    'notSelected'
];

export interface FollowerRange {
    label?: string;
    lower: number;
    upper?: number;
}

export interface DeliverableWithCount {
    deliverable: Deliverable;
    count: number;
}

interface Money {
    amount: number;
    currency: string;
}

interface BarterPayout {
    type: PayoutType.BARTER;
    productMRP: Money;
    productUrl: string;
}

interface FixedPayout {
    type: PayoutType.FIXED;
    cash: Money;
}

interface VariablePayout {
    type: PayoutType.VARIABLE,
    maxCash: Money;
}
export type Payout = BarterPayout | FixedPayout | VariablePayout;

export interface InfluencerRequirements {
    gender: Gender;
    age: {
        from: number;
        to: number;
    };
    country: string;
    city: string;
    language: string;
}
