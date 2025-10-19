import classNames from 'classnames';
import './styles.css';
import type {TypographyProps} from "../../../shared/types";
import {TYPOGRAPHY_VARIANTS, TYPOGRAPHY_VARIANTS_ENUM} from "./typography-config.ts";
import type {ElementType, FC} from "react";

export const Typography: FC<TypographyProps> = ({
                                                          variant = TYPOGRAPHY_VARIANTS_ENUM.P1,
                                                          color,
                                                          className,
                                                          as,
                                                          children,
                                                          ...props
                                                      }) => {
    const config = TYPOGRAPHY_VARIANTS[variant] || TYPOGRAPHY_VARIANTS.P1;
    const Tag = (as || config.tag) as ElementType;

    return (
        <Tag
            className={classNames(config.className, className)}
            style={{ color }}
            {...props}
        >
            {children}
        </Tag>
    );
};
