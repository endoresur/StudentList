
export function ageWordDeterminant(age: number): string {
    if (age >= 10 && age <= 20) return 'лет';
    if (age % 10 == 1) return 'год';
    if (age % 10 >= 2 && age % 10 <=4) return 'года';
    return 'лет';
}