export const cashSpacer = (cash: number, separator: string): string => {
  const str = cash ? cash.toString() : '';
  const indexDot = str.indexOf('.');
  let len;

  let beforeDot = '';
  let afterDot = '';
  if (indexDot !== -1) {
    beforeDot = str.slice(0, indexDot);
    afterDot = str.slice(indexDot);
    len = beforeDot.length;
  } else len = str.length;
  let result = '';
  let counter = 1;
  for (let i = len - 1; i >= 0; --i) {
    result += counter % 3 === 0 ? str[i] + ' ' : str[i];
    ++counter;
  }
  return [...result].reverse().join('') + afterDot;
};
