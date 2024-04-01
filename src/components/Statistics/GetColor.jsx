export const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 12345678).toString(16)}`;
}