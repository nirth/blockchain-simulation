const toSum = (sum: number, char: string): number => {
  return sum + (parseInt(char, 10) as number);
};

const toSpecificLength = (value: number): number => {
  return value.toString(10).split("").reduce(toSum, 0);
};

export const createHash = (input: string): string => {
  const codes = input
    .split("")
    .map((character: string) => character.charCodeAt(0));

  const sumOfCharacters = codes.reduce((hash: number, code: number) => {
    return hash + code;
  }, 0);

  const numberToHash = sumOfCharacters * sumOfCharacters;

  const hashAsNumber = toSpecificLength(numberToHash);

  const hashAsString = hashAsNumber.toString(10);

  return hashAsString;
};
