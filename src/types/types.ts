export const enum filterType {
    name = 'name',
    age = 'age',
    rating = 'rating',
    defaultType = 'id',
}

export const enum filterDirection {
    moreToLess = 'from more to less',
    lessToMore = 'from less to more',
    default = "default",
}

export interface IFilterOption {
    id: number,
    type: filterType,
    text: string,
    direction: filterDirection,
    checked: boolean
}

export const filterOptions: IFilterOption[] = [
    {id: 1, type: filterType.name, text: 'Имя А-Я', direction: filterDirection.moreToLess, checked: false},
    {id: 2, type: filterType.name, text: 'Имя Я-А', direction: filterDirection.lessToMore, checked: false},
    {id: 3, type: filterType.age, text: 'Сначала моложе', direction: filterDirection.lessToMore, checked: false},
    {id: 4, type: filterType.age, text: 'Сначала старше', direction: filterDirection.moreToLess, checked: false},
    {id: 5, type: filterType.rating, text: 'Высокий рейтинг', direction: filterDirection.moreToLess, checked: false},
    {id: 6, type: filterType.rating, text: 'Низкий рейтинг', direction: filterDirection.lessToMore, checked: false},
    {id: 7, type: filterType.defaultType, text: 'По добавлению', direction: filterDirection.default, checked: true},
];