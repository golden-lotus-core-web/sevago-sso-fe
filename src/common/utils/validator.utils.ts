export const isEmpty = (value: any): boolean => {
  if (value === null || value === undefined) return true;
  if (typeof value === "string") {
    const trimmed = value.trim();
    // kiểm tra chuỗi rỗng hoặc là chuỗi "Invalid Date"
    return (
      trimmed === "" ||
      trimmed.toLowerCase() === "invalid date" ||
      trimmed === "-"
    );
  }
  if (Array.isArray(value) && value.length === 0) return true;
  if (value instanceof Date) {
    return isNaN(value.getTime()); // xử lý Invalid Date
  }
  if (
    typeof value === "object" &&
    !(value instanceof Date) &&
    !(value instanceof Map) &&
    !(value instanceof Set) &&
    Object.keys(value).length === 0
  )
    return true;
  if (value instanceof Map || value instanceof Set) return value.size === 0;
  return false;
};

export const checkEmptyText = (value: any): string => {
  return isEmpty(value) ? "---" : value;
};
