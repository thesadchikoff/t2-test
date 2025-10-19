import type {PluralWord} from "../types";

export const pluralize = (count: number, word: PluralWord): string => {
    const n = Math.abs(count) % 100;
    const n1 = n % 10;

    if (n > 10 && n < 20) return `${count} ${word.many}`;
    if (n1 > 1 && n1 < 5) return `${count} ${word.few}`;
    if (n1 === 1) return `${count} ${word.singular}`;
    return `${count} ${word.many}`;
}
