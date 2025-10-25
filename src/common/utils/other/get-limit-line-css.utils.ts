export const getLimitLineCss = (line: number): any => ({
  display: '-webkit-box',
  overflow: 'hidden',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: line,
  // textOverflow: 'ellipsis',
});

export const truncateText = (text: string, maxLength: number = 27): string => {
  if (!text || text.length <= maxLength) {
    return text;
  }
  return `${text.substring(0, maxLength)}...`;
};
