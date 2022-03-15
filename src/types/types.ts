
export interface IStudent {
    id: number,
    email: string,
    name: string,
    sex: string,
    specialty: string,
    group: string,
    color: string,
    rating: number,
    birthday: string,
    avatar: string,
}

export interface StudentProps {
    student: IStudent,
}

export interface StudentComponentProps {
    students: IStudent[],
}

export const specialty = new Map([
    ['kb', 'Компьютерная безопасность'],
    ['mt', 'Машиностоительные технологии'],
    ['kn', 'Компьютерные науки'],
]);

export const alphabet = new Map([
    ['a', 'А'], ['b', 'Б'], ['v', 'В'], ['g', 'Г'],
    ['d', 'Д'], ['e', 'Е'], ['z', 'З'], ['i', 'И'],
    ['j', 'Й'], ['k', 'К'], ['l', 'Л'], ['m', 'М'],
    ['n', 'Н'], ['o', 'О'], ['p', 'П'], ['r', 'Р'],
    ['s', 'С'], ['t', 'Т'], ['u', 'У'], ['f', 'Ф'],
    ['h', 'Х']
]);

export const colors = new Map([
    ['green', '#83C872'],
    ['blue', '#49C2E8'],
    ['black', '#000000'],
    ['yellow', '#F7FB53'],
    ['red', '#E25B5B'],
    ['orange', '#EFA638'],
])

export const size = {
    mobileS: '320',
    mobileM: '375',
    mobileL: '425',
    tablet: '768',
    laptop: '1024',
    laptopL: '1440',
    desktop: '2560'
}

export const device = {
    mobileS: `(max-width: ${size.mobileS}px)`,
    mobileM: `(max-width: ${size.mobileM}px)`,
    mobileL: `(max-width: ${size.mobileL}px)`,
    tablet: `(max-width: ${size.tablet}px)`,
    laptop: `(max-width: ${size.laptop}px)`,
    laptopL: `(max-width: ${size.laptopL}px)`,
    desktop: `(max-width: ${size.desktop}px)`,
    desktopL: `(min-width: ${size.desktop}px)`
};

export const enum filterType {
    name = 'name',
    age = 'age',
    rating = 'rating',
    defaultType = 'default',
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

export const filterOption: IFilterOption[] = [
    {id: 1, type: filterType.name, text: 'Имя А-Я', direction: filterDirection.moreToLess, checked: false},
    {id: 2, type: filterType.name, text: 'Имя Я-А', direction: filterDirection.lessToMore, checked: true},
    {id: 3, type: filterType.age, text: 'Сначала моложе', direction: filterDirection.lessToMore, checked: false},
    {id: 4, type: filterType.age, text: 'Сначала старше', direction: filterDirection.moreToLess, checked: false},
    {id: 5, type: filterType.rating, text: 'Высокий рейтинг', direction: filterDirection.moreToLess, checked: false},
    {id: 6, type: filterType.rating, text: 'Низкий рейтинг', direction: filterDirection.lessToMore, checked: false},
    {id: 7, type: filterType.defaultType, text: 'По добавлению', direction: filterDirection.lessToMore, checked: false},
];