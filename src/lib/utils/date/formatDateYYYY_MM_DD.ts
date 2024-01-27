import type { FormatDateString } from '@uvarov.frontend/vanilla-calendar/src/types';

// Function to format a date as 'YYYY-MM-DD'
export function formatDateYYYY_MM_DD(date: Date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}` as FormatDateString;
}