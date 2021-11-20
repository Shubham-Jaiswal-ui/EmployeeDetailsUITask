export const isBlankData = (data, dataType) => {
  if (data == null || data === undefined) return true;
  if (dataType === Object) return Object.keys(data).length === 0;
  if (dataType === Array) return data.length === 0;
};
