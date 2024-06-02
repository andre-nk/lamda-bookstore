export const cleanArr = (input: string) => {
  // Remove the surrounding brackets and single quotes
  const cleanStr = input.replace(/[\[\]']+/g, "");

  // Split the string by ', ' to create an array
  return cleanStr.split(", ");
};
