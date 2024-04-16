export function formatDate(inputDate:Date) {
  const inputDateObj = new Date(inputDate);
  if (isNaN(inputDateObj.getTime())) {
    // Invalid date
    return 'Invalid Date';
  }
  const year = inputDateObj.getFullYear();
  const month = String(inputDateObj.getMonth() + 1).padStart(2, '0');
  const day = String(inputDateObj.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}
