export const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
};

// interface DateTimeFormatOptions {
//     localMatcher?: "lookup" | "best fit";
//     weekday?: "long" | "narrow" | "short";
//     era?: "long" | "narrow" | "short";
//     year?: "numeric" | "2-digit";
//     month?: "numeric" | "2-digit" | "long" | "short" | "narrow";
//     day?: "numeric" | "2-digit";
//     hour?: "numeric" | "2-digit";
//     minute?: "numeric" | "2-digit";
//     second?: "numeric" | "2-digit";
//     timeZoneName?: "long" | "short";
//     formatMatcher?: "basic" | "best fit";
//     hour12?: boolean;
//     timeZone?: string;
// }
