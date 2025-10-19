import { useState, useMemo } from "react";
import classNames from "classnames";

import styles from './CatCard.module.css';
import cat from '../../assets/cat.png';
import { declineProductName } from "../../shared/utils/decline-product-name.util";
import type { CatCardProps } from "../../shared/types";
import { Typography } from "../ui/Typography/Typography";
import { TYPOGRAPHY_VARIANTS_ENUM } from "../ui/Typography/typography-config";
import { Button } from "../ui/Button/Button";
import React from "react";
import {PortionsAndGifts} from "../ui/PortionsAndGifts/PortionsAndGifts.tsx";

export const CatCard = ({
                          flavor,
                          title,
                          id,
                          weight,
                          ingredient,
                          portionCount,
                          selectedCards,
                          cardHandler,
                          description,
                          isDone,
                          isEmptying
                        }: CatCardProps) => {
  const [hovered, setHovered] = useState(false);
  const isSelected = useMemo(() => selectedCards.includes(id), [selectedCards, id]);

  const flavorLabel = useMemo(() => isSelected && hovered ? 'Котэ не одобряет?' : flavor, [isSelected, hovered, flavor]);

  const defaultProductDescription = useMemo(() => (
      <>
        Чего сидишь? Порадуй котэ,{" "}
        <Button className={styles.cardButton} onClick={() => cardHandler(id)}>
          купи
        </Button>.
      </>
  ), [cardHandler, id]);

  const productDescription = useMemo(() => (isSelected ? description : defaultProductDescription), [isSelected, description, defaultProductDescription]);

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    cardHandler(id);
  };

  return (
      <div className={styles.cardSpace}>
        <div
            className={classNames(styles.card, { [styles.selectCardBackground]: isSelected })}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        >
          <div className={styles.inner}>
            <div className={styles.content}>
              <div className={styles.head}>
                <Typography
                    variant={TYPOGRAPHY_VARIANTS_ENUM.P1}
                    className={classNames(styles.flavor, { [styles.selectCardColor]: isSelected && hovered })}
                >
                  {flavorLabel}
                </Typography>

                <Typography variant={TYPOGRAPHY_VARIANTS_ENUM.H1} className={styles.title}>
                  {title}
                </Typography>

                  <Typography variant={TYPOGRAPHY_VARIANTS_ENUM.H3} className={styles.subtitle}>
                    {declineProductName(ingredient)}
                  </Typography>
                  <PortionsAndGifts portions={portionCount} mice={2} isDone={isDone}/>
              </div>

              <img src={cat} alt="Кот" className={styles.cat} />
            </div>

            <div className={classNames(styles.weight, { [styles.selectCardBackground]: isSelected })}>
              <span>{weight}</span>
              <small>кг</small>
            </div>
          </div>
        </div>

        <Typography
            variant={TYPOGRAPHY_VARIANTS_ENUM.DESCRIPTION}
            className={classNames({[styles.isEmptyColor]: isEmptying})}
        >
          {!isEmptying
              ? productDescription
              : `Печалька, ${declineProductName(ingredient)} закончился.`}
        </Typography>
      </div>
  );
};