export default function getCache(key, maxAgeInMinutes) {
  const cached = localStorage.getItem(key);
  if (!cached) return null;

  const { data, timestamp } = JSON.parse(cached);

  const isExpired = Date.now() - timestamp > maxAgeInMinutes * 60 * 1000;

  if (isExpired) {
    localStorage.removeItem(key);
    return null;
  }

  return data;
}
