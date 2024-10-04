export function polishToEnglish(sentence: string): string {
  const translationDict: { [key: string]: string } = {
    ą: "a",
    ć: "c",
    ę: "e",
    ł: "l",
    ń: "n",
    ś: "s",
    ó: "o",
    ż: "z",
    ź: "z",
    // Add more translation mappings as needed
  };

  const sanitizedSentence = sentence
    ?.replace(
      /[ąćęłńśóżź]/gi,
      (matched) => translationDict[matched?.toLowerCase()] || ""
    )
    .replace(/\s/g, "-")
    .replace(/[^\w\s-]/g, "")
    .toLowerCase()
    .replace(/-+/g, "-");

  return sanitizedSentence;
}
