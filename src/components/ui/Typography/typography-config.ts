import type {TypographyConfig, TypographyVariant} from "../../../shared/types";

export const TYPOGRAPHY_VARIANTS: Record<TypographyVariant, TypographyConfig> = Object.freeze({
    H1: { tag: 'h1', className: 'h1' },
    H2: { tag: 'h2', className: 'h2' },
    H3: { tag: 'h3', className: 'h3' },
    P1: { tag: 'p', className: 'p1' },
    P2: { tag: 'p', className: 'p2' },
    DESCRIPTION: { tag: 'span', className: 'description' },
});

export const TYPOGRAPHY_VARIANTS_ENUM = {
    H1: 'H1',
    H2: 'H2',
    H3: 'H3',
    P1: 'P1',
    P2: 'P2',
    DESCRIPTION: 'DESCRIPTION',
} as const;