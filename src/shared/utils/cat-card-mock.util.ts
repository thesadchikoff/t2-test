import type {CatCardEntity} from "../types";

export const catCardsMock: CatCardEntity[] = [
    {
        id: 1,
        flavor: 'Сказочное заморское яство',
        title: 'Нямушка',
        ingredient: 'Фуа-гра',
        weight: '0,5',
        portionCount: 10,
        description: "Печень утки разварная с артишоками.",
        isEmptying: false,
        isDone: false
    },
    {
        id: 2,
        flavor: 'Сказочное заморское яство',
        title: 'Нямушка',
        ingredient: 'Рыба',
        weight: '2',
        portionCount: 40,
        description: "Головы щучьи с чесноком да свежайшая сёмгушка.",
        isEmptying: true,
        isDone: false
    },
    {
        id: 3,
        flavor: 'Сказочное заморское яство',
        title: 'Нямушка',
        ingredient: 'Кура',
        weight: '5',
        portionCount: 100,
        description: "Филе из цыплят с трюфелями в бульоне.",
        isEmptying: false,
        isDone: true
    }
];
