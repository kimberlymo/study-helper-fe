export const formatDate = (date: Date) =>
    date.toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit", year: "numeric" });

export const isSameDay = (date1: Date, date2: Date) =>
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate();

export const getDatesInRange = (start: Date, range: number): Date[] => {
    const dates: Date[] = [];
    const current = new Date(start);
    const daysToMonday = (current.getDay() || 7) - 1;
    current.setDate(current.getDate() - daysToMonday);
    for (let i = 0; i < range; i++) {
        dates.push(new Date(current));
        current.setDate(current.getDate() + 1);
    }
    return dates;
};

export const formatTime = (date: Date) =>
    date.toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" });

export const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];