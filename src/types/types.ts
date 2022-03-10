
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
    mobileM: '375px',
    mobileL: '830px',
    tablet: '1028px',
    laptop: '1440px',
    laptopL: '1880px',
    desktop: '2560px'
}

export const device = {
    mobileM: `(max-width: ${size.mobileM})`,
    mobileL: `(max-width: ${size.mobileL})`,
    tablet: `(max-width: ${size.tablet})`,
    laptop: `(max-width: ${size.laptop})`,
    laptopL: `(max-width: ${size.laptopL})`,
    desktop: `(max-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`
};