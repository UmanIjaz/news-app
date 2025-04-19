const trimText = (text, maxLength) => {
  if (!text) return "";
  if (text.length <= maxLength) return text;

  const trimmed = text.slice(0, maxLength);
  const lastSpaceIndex = trimmed.lastIndexOf(" ");

  // Avoid cutting in the middle of a word
  return trimmed.slice(0, lastSpaceIndex) + "...";
};

export default trimText;
