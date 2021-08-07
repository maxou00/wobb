import { nanoid } from "nanoid";

export const Roles = [
    {
        title: 'Influencer',
        value: 'influencer'
    },
    {
        title: 'Talent Agency',
        value: 'talent_agency'
    },
    {
        title: 'Brand',
        value: 'brand'
    },
    {
        title: 'Marketing Agency',
        value: 'marketing_agency'
    },
    {
        title: 'Freelance Marketer',
        value: 'freelance_marketer'
    }
]

export type Role = typeof Roles[0];

export interface OTPEntry {
    value: string;
    key: string;
}

export function randomID ( length = 21) {
    return nanoid(length);
}

export function randomOTPArray(length: number): OTPEntry[]{
    let items: OTPEntry[] = [];
    for(let i = 0; i < length; i++) {
        items.push({
            value: '',
            key: randomID()
        });
    }
    return items;
}