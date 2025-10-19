import {pluralize} from "./pluralize.util.ts";

export function formatPortionsAndGifts(portions: number, mice: number): string {
    const portionText = pluralize(portions, { singular: 'порция', few: 'порции', many: 'порций' });

    let mouseText: string;
    if (mice === 1) {
        mouseText = 'мышь в подарок';
    } else {
        mouseText = `${pluralize(mice, { singular: 'мышь', few: 'мыши', many: 'мышей' })} в подарок`;
    }

    return `${portionText} (${mouseText})`;
}