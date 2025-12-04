// Declares that any import ending with "?raw" will be treated as a string
declare module '*?raw' {
  const content: string;
  export default content;
}