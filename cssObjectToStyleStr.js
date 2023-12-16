// Example CSS object
const styles = {
  color: 'red',
  backgroundColor: 'yellow',
  fontSize: '16px',
  // Add more styles as needed
};

// Convert CSS object keys to kebab-case and create a string
const styleString = Object.entries(styles)
  .map(([key, value]) => `${key.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()}:${value}`)
  .join(';');

// Resulting inline style string
console.log(styleString);
