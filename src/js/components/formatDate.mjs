export function formatDate(date) {
  const todaysDate = new Date().getTime();
  const endDate = new Date(date).getTime();
  const distance = endDate - todaysDate;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if (distance <= 0) {
    return "Ended";
  }

  if (minutes < 1) {
    return `${minutes}m ${seconds}s`;
  }

  return `${days}d ${hours}h ${minutes}m`;
}