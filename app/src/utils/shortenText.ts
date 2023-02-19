const shortenText = (text: string, lenght: number) => {
  if (text.length > lenght) return text.slice(0, lenght) + "...";
  return text;
};

export default shortenText;
