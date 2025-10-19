export const declineProductName = (word: string): string => {
    const lower = word.toLowerCase();

    const noDecline = ['фуа-гра'];

    if (noDecline.includes(lower)) {
        return `с ${lower}`;
    }

    if (lower.endsWith('ка')) return `с ${lower.slice(0, -1)}кой`;
    if (lower.endsWith('а')) return `с ${lower.slice(0, -1)}ой`;
    if (lower.endsWith('я')) return `с ${lower.slice(0, -1)}ей`;
    if (lower.endsWith('ь')) return `с ${lower.slice(0, -1)}ью`;

    return `с ${lower}`;
}
