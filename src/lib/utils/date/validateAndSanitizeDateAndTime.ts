import { formatDateYYYY_MM_DD } from "$lib/utils/date/formatDateYYYY_MM_DD";
import { getTime_HH_mm } from "$lib/utils/date/getTime_HH_mm";
import { fixMinutes } from "./fixMinutes";





export const validateAndSanitizeDateAndTime = (
    ad: string,
    at: string,
    rd: string,
    rt: string
): { ad: string; at: string; rd: string; rt: string } => {
    // Validate and sanitize ad (start date)
    const startDate = new Date(ad);
    const isValidStartDate = !isNaN(startDate.getTime());
    const sanitizedStartDate = isValidStartDate
        ? ad
        : formatDateYYYY_MM_DD(new Date());

    // Validate and sanitize at (start time)
    const startTime = new Date(`2000-01-01T${at}`);
    const isValidStartTime = !isNaN(startTime.getTime());
    const sanitizedStartTime = isValidStartTime ? fixMinutes(at) : getTime_HH_mm();

    // Validate and sanitize rd (end date)
    const endDate = new Date(rd);
    const isValidEndDate = !isNaN(endDate.getTime());
    const sanitizedEndDate = isValidEndDate ? rd : formatDateYYYY_MM_DD(new Date());

    // Validate and sanitize rt (end time)
    const endTime = new Date(`2000-01-01T${rt}`);
    const isValidEndTime = !isNaN(endTime.getTime());
    const sanitizedEndTime = isValidEndTime ? fixMinutes(rt) : getTime_HH_mm();

    return {
        ad: sanitizedStartDate,
        at: sanitizedStartTime,
        rd: sanitizedEndDate,
        rt: sanitizedEndTime
    };
}