// Utility functions
export const normalizeText = (text: string) => {
  const vietnameseChars = [
    {
      base: "a",
      accents: [
        "á",
        "à",
        "ả",
        "ã",
        "ạ",
        "ă",
        "ắ",
        "ằ",
        "ẳ",
        "ẵ",
        "ặ",
        "â",
        "ấ",
        "ầ",
        "ẩ",
        "ẫ",
        "ậ",
      ],
    },
    {
      base: "e",
      accents: ["é", "è", "ẻ", "ẽ", "ẹ", "ê", "ế", "ề", "ể", "ễ", "ệ"],
    },
    { base: "i", accents: ["í", "ì", "ỉ", "ĩ", "ị"] },
    {
      base: "o",
      accents: [
        "ó",
        "ò",
        "ỏ",
        "õ",
        "ọ",
        "ô",
        "ố",
        "ồ",
        "ổ",
        "ỗ",
        "ộ",
        "ơ",
        "ớ",
        "ờ",
        "ở",
        "ỡ",
        "ợ",
      ],
    },
    {
      base: "u",
      accents: ["ú", "ù", "ủ", "ũ", "ụ", "ư", "ứ", "ừ", "ử", "ữ", "ự"],
    },
    { base: "y", accents: ["ý", "ỳ", "ỷ", "ỹ", "ỵ"] },
    { base: "d", accents: ["đ"] },
  ];
  return vietnameseChars
    .reduce(
      (text, { base, accents }) =>
        text.replace(new RegExp(`[${accents.join("")}]`, "g"), base),
      text
    )
    .toLowerCase();
};
