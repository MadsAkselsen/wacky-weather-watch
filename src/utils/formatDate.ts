export function formatDate(date: Date): string {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Create a new date for comparison
  const today = new Date();

  // Compare the date passed to the function to today's date
  const dayOfWeek = date.setHours(0, 0, 0, 0) === today.setHours(0, 0, 0, 0)
    ? 'Today'
    : days[date.getDay()];

  return dayOfWeek;
}