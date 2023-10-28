function hexToRgb(hex: string, alpha: number = 1): string | null {
  const sanitizedHex = hex.replace('#', '');

  const hexLength = sanitizedHex.length;
  if (!/^(?:[0-9A-Fa-f]{3}){1,2}$|^(?:[0-9A-Fa-f]{4}){1,2}$/.test(sanitizedHex)) {
    return null;
  }

  const toRGB = (value: number) => parseInt(value, 16) * (hexLength <= 4 ? 17 : 1);
  const [r, g, b] = [0, 2, 4].map((start) => toRGB(sanitizedHex.slice(start, start + (hexLength <= 4 ? 1 : 2))));

  return alpha === 1 ? `rgb(${r}, ${g}, ${b})` : `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

// Example usage:
const hexColor = "#FF5733";
const rgbaColor = hexToRgb(hexColor, 0.7);
console.log(rgbaColor); // Output: "rgba(255, 87, 51, 0.7)"
