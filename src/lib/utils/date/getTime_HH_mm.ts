import { closestQuarterHour } from "./closestQuarterHour";

export const getTime_HH_mm = () => {
    const currentHour: number = new Date().getHours();
    const currentMinute: number = new Date().getMinutes();

    const formattedHour: string = currentHour < 10 ? `0${currentHour}` : `${currentHour}`;
    const formattedMinute: string = currentMinute < 10 ? `0${currentMinute}` : `${currentMinute}`;

    return `${formattedHour}:${closestQuarterHour(+formattedMinute)}`;

}

