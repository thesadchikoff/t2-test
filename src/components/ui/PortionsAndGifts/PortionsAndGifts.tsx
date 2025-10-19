import {pluralize} from "../../../shared/utils/pluralize.util.ts";
import type {FC} from "react";
import {Typography} from "../Typography/Typography.tsx";
import {TYPOGRAPHY_VARIANTS_ENUM} from "../Typography/typography-config.ts";
import styles from './PortionsAndGifts.module.css'

interface PortionsAndGiftsProps {
    portions: number;
    mice: number;
    isDone: boolean;
}

export const PortionsAndGifts: FC<PortionsAndGiftsProps> = ({ portions, mice, isDone }) => {
    const portionText = pluralize(portions, { singular: 'порция', few: 'порции', many: 'порций' });
    const mouseText =
        mice === 1
            ? 'мышь в подарок'
            : `${pluralize(mice, { singular: 'мышь', few: 'мыши', many: 'мышей' })} в подарок`;

    const renderWithBoldNumber = (text: string) => {
        const match = text.match(/^(\d+)\s(.+)$/);
        if (!match) return text;
        return (
            <>
                <strong>{match[1]}</strong> {match[2]}
            </>
        );
    };

    return (
        <div className={styles.portionsAndGiftsBlock}>
            <Typography variant={TYPOGRAPHY_VARIANTS_ENUM.P2}>{renderWithBoldNumber(portionText)}</Typography>
            <Typography variant={TYPOGRAPHY_VARIANTS_ENUM.P2}>{renderWithBoldNumber(mouseText)}</Typography>
        {/*
            TODO: Не совсем понял концепцию с надписью "заказчик доволен", поэтому добавляем ее через флаг isDone
        */}
            { isDone && <Typography variant={TYPOGRAPHY_VARIANTS_ENUM.P2}>заказчик доволен</Typography> }
        </div>
    );
};