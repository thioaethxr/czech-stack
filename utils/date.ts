/**
 * Formats a date string into a custom date format.
 *
 * @param {string} dateString - The input date string to be formatted.
 * @returns {string} The formatted date string (e.g., 'DD. MM. YYYY').
 */
export const formatDateString = (dateString: string): string => {
  const date = new Date(dateString);
  return `${date.getDate()}. ${date.getMonth() + 1}. ${date.getFullYear()}`;
};
