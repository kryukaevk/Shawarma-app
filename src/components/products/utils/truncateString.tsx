export const truncateString = (str: string, maxLength = 32) => {
    return str.length > maxLength
        ? str.substring(0, maxLength - 3) + '...'
        : str;
};
