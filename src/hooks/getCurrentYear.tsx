export function getCurrentYear(): number {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return currentYear;
}
