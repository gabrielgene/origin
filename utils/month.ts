export const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const handleNextMonth = () => {
  const date = new Date();
  date.setMonth(date.getMonth() + 1);
  return date;
};
