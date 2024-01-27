export const closestQuarterHour = (inputMinutes: number): string => {
    const quarters = [0, 15, 30, 45];

    // Find the closest quarter hour
    const closestQuarter = quarters.reduce((closest, current) => {
        return Math.abs(current - inputMinutes) < Math.abs(closest - inputMinutes) ? current : closest;
    });

    if (closestQuarter === 0) return '00'

    return `${closestQuarter}`;
}
