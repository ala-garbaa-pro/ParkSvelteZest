import { closestQuarterHour } from "./closestQuarterHour";

export const fixMinutes = (time: string) => {
    const hours = time.split(":")[0];
    const minutes = time.split(":")[1];
    return `${hours}:${closestQuarterHour(+minutes)}`;
}