function formatStringNumberWithSeparator(
  numberStr: string,
  separator: string
): string {
  // Check if the input is a valid number string
  if (!/^-?\d*\.?\d+$/.test(numberStr)) {
    return "Invalid number";
  }

  // Split the string into integer and decimal parts
  const [integerPart, decimalPart] = numberStr.split(".");

  // Format the integer part with the custom separator
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, separator);

  // Combine the formatted integer and decimal parts
  const formattedNumber = decimalPart ? `${formattedInteger}.${decimalPart}` : formattedInteger;

  return formattedNumber;
}

const numberStr = "17000000.25"; // Example input as a string
const separator = ","; // Example separator (e.g., a comma)

const formattedNumber = formatStringNumberWithSeparator(numberStr, separator);
console.log(formattedNumber); // Output: "17,000,000.25"
