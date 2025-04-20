const formatDate = (dateString) => {
  if (!dateString) return "Unknown date";

  const options = { year: "numeric", month: "long", day: "numeric" };
  const date = new Date(dateString);

  if (isNaN(date)) return "Invalid date";

  return date.toLocaleDateString(undefined, options);
};

export default formatDate;
