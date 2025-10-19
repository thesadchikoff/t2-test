import {useMemo} from 'react';
import classNames from 'classnames';

import styles from './CatCard.module.css';
import cat from '../../assets/cat.webp';
import {declineProductName} from '../../shared/utils/decline-product-name.util';
import type {CatCardProps} from '../../shared/types';
import {Typography} from '../ui/Typography/Typography';
import {TYPOGRAPHY_VARIANTS_ENUM} from '../ui/Typography/typography-config';
import {Button} from '../ui/Button/Button';
import {PortionsAndGifts} from '../ui/PortionsAndGifts/PortionsAndGifts';
import {useHoverAfterSelect} from '../../hooks/useHoverAfterSelect';

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
    const isSelected = useMemo(() => selectedCards.includes(id), [selectedCards, id]);

    const { isHoverActive, hasLeftAfterSelect, onMouseEnter, onMouseLeave } =
        useHoverAfterSelect(isSelected);

    const flavorLabel = useMemo(
        () => (isHoverActive ? "Котэ не одобряет?" : flavor),
        [isHoverActive, flavor]
    );

  const defaultProductDescription = useMemo(() => (
      <>
        Чего сидишь? Порадуй котэ,
        <Button className={styles.cardButton} onClick={() => cardHandler(id)}>
          купи
        </Button>.
      </>
  ), [cardHandler, id]);

    const cardClass = classNames(styles.card, {
        [styles.selectCardBackground]: isSelected,
        [styles.isEmptyBackground]: isEmptying,
    });

  const productDescription = isSelected ? description : defaultProductDescription;

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (!isEmptying) cardHandler(id);
  };

  return (
      <div className={styles.cardSpace}>
        <div
            className={cardClass}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={handleClick}
        >
            <div
                className={classNames(styles.inner, {
                    [styles.isEmptyOverlay]: isEmptying,
                })}
            >
                <div className={styles.content}>
                    <div className={styles.head}>
                        <Typography
                            variant={TYPOGRAPHY_VARIANTS_ENUM.P1}
                            className={classNames(styles.flavor, {
                                [styles.selectCardColor]: isHoverActive && hasLeftAfterSelect,
                            })}
                        >
                            {flavorLabel}
                        </Typography>

                        <Typography
                            variant={TYPOGRAPHY_VARIANTS_ENUM.H1}
                            className={styles.title}
                        >
                            {title}
                        </Typography>

                        <Typography
                            variant={TYPOGRAPHY_VARIANTS_ENUM.H3}
                            className={styles.subtitle}
                        >
                            {declineProductName(ingredient)}
                        </Typography>

                        <PortionsAndGifts
                            portions={portionCount}
                            mice={2}
                            isDone={isDone}
                        />
                    </div>

                    <img src={cat} alt="Кот" className={styles.cat} />
                </div>

                <div
                    className={classNames(styles.weight, {
                        [styles.selectCardBackground]: isSelected,
                            [styles.isEmptyBackground]: isEmptying,
                        })}
                    >
                    <span>{weight}</span>
                    <small>кг</small>
                </div>
            </div>
        </div>

        <Typography
            variant={TYPOGRAPHY_VARIANTS_ENUM.DESCRIPTION}
            className={classNames({
                [styles.isEmptyColor]: isEmptying,
            })}
        >
            {!isEmptying
                ? productDescription
                : `Печалька, ${declineProductName(ingredient)} закончился.`}
        </Typography>
    </div>
    );
};
