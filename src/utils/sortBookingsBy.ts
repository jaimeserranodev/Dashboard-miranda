    import { BookingType } from '../types/features';

    const parseDate = (dateString: string): Date => {
    const [month, day, year, time] = dateString.split(" ");
    const [hours, minutes] = time.split(":");
    const isPM = time.includes("PM");

    const parsedDate = new Date(
        parseInt(year),
        getMonthNumber(month),
        parseInt(day),
        parseInt(hours) + (isPM ? 12 : 0),
        parseInt(minutes)
    );
    return parsedDate;
    };

    const getMonthNumber = (month: string): number => {
    const monthsMap: { [key: string]: number } = {
        "Jan": 0, "Feb": 1, "Mar": 2, "Apr": 3, "May": 4, "Jun": 5,
        "Jul": 6, "Aug": 7, "Sep": 8, "Oct": 9, "Nov": 10, "Dec": 11
    };
    return monthsMap[month];
    };

    const sortBookingsBy = (orderBy: string, data: BookingType[]) => {
    if (orderBy === 'guest') {
        return data.sort((a, b) => {
        if (a.guest && b.guest) {
            if (a.guest < b.guest) return -1;
            if (a.guest > b.guest) return 1;
        }
        return 0;
        });
    } else if (orderBy === 'date') {
        return data.sort((a, b) => {
        const dateA = parseDate(a.date);
        const dateB = parseDate(b.date);

        if (dateA < dateB) return -1;
        if (dateA > dateB) return 1;
        return 0;
        });
    } else if (orderBy === 'checkIn') {
        return data.sort((a, b) => {
        const dateA = parseDate(a.checkIn);
        const dateB = parseDate(b.checkIn);

        if (dateA < dateB) return -1;
        if (dateA > dateB) return 1;
        return 0;
        });
    } else if (orderBy === 'checkut') {
        return data.sort((a, b) => {
        const dateA = parseDate(a.checkOut);
        const dateB = parseDate(b.checkOut);

        if (dateA < dateB) return -1;
        if (dateA > dateB) return 1;
        return 0;
        });
    } else if (orderBy === 'progress') {
        return data.filter(({ status }) => status === 'In Progress');
    } else {
        return data;
    }
    };

    export default sortBookingsBy;