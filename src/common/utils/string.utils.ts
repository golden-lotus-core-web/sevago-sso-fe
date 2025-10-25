export const stringToColor = (string: string) => {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
};

/**
 * Pha màu để làm nhạt màu gốc (blend với màu trắng)
 * @param color Màu HEX gốc (VD: '#008a77')
 * @param percentage Phần trăm nhạt đi (0-100)
 */
export const lightenColor = (color: string, percentage: number): string => {
  const amt = Math.round(2.55 * percentage);
  const R = parseInt(color.substring(1, 3), 16) + amt;
  const G = parseInt(color.substring(3, 5), 16) + amt;
  const B = parseInt(color.substring(5, 7), 16) + amt;

  return (
    '#' +
    (
      0x1000000 +
      (R < 255 ? (R < 0 ? 0 : R) : 255) * 0x10000 +
      (G < 255 ? (G < 0 ? 0 : G) : 255) * 0x100 +
      (B < 255 ? (B < 0 ? 0 : B) : 255)
    )
      .toString(16)
      .slice(1)
  );
};

export const extractNumberAtStartString = (string: string) => {
  const match = string.match(/^\d+(\.\d+)?/);
  return match ? parseFloat(match[0]) : 0;
};

export const stripHtml = (html: string): string => {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = html;
  return tempDiv.textContent || tempDiv.innerText || '';
};

export const getErrorMessage = (e: unknown) => (e as Error)?.message ?? 'Đã xảy ra lỗi không xác định!';
