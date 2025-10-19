import type { JSX, ReactNode } from "react";
import { TYPOGRAPHY_VARIANTS_ENUM } from "../../components/ui/Typography/typography-config.ts";

export interface CatCardEntity {
    id: number;
    flavor: string;
    title: string;
    ingredient: string;
    weight: string;
    portionCount: number;
    description: string;
    isEmptying: boolean;
    isDone: boolean;
}

export type CatCardProps = {
    selectedCards: number[];
    cardHandler: (id: number) => void;
} & CatCardEntity;

export type TypographyProps<T extends keyof JSX.IntrinsicElements = 'p'> = {
    variant?: keyof typeof TYPOGRAPHY_VARIANTS_ENUM;
    color?: string;
    as?: T;
    className?: string;
    children: ReactNode;
} & JSX.IntrinsicElements[T];

export type TypographyVariant =
    | 'H1'
    | 'H2'
    | 'H3'
    | 'P1'
    | 'P2'
    | 'DESCRIPTION';

export interface TypographyConfig {
    tag: keyof JSX.IntrinsicElements;
    className: string;
}

export type PluralWord = {
    singular: string;
    few: string;
    many: string;
};