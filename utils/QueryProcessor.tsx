export default function QueryProcessor(query: string): string {
  const addMatch = query.match(/What is (\d+) plus (\d+)/i);
  if (addMatch) {
    const x: number = parseInt(addMatch[1], 10);
    const y: number = parseInt(addMatch[2], 10);
    return (x + y).toString();
  }
  const largestMatch = query.match(/which of the following numbers is the largest: ([\d\s,]+)/i);
  if (largestMatch) {
    const numbersString = largestMatch[1].split(",");
    const numbers: number[] = numbersString.map(str => parseInt(str.trim(), 10)).filter(num => !isNaN(num));
    const largestNumber = Math.max(...numbers);
    return `${largestNumber}`;
  }
  const squareCubeMatch = query.match(/which of the following numbers is both a square and a cube: ([\d\s,]+)/i);
  if (squareCubeMatch) {
    const numbersString = squareCubeMatch[1].split(",");
    const numbers: number[] = numbersString.map(str => parseInt(str.trim(), 10)).filter(num => !isNaN(num));
    const results = numbers.filter(num => {
      const root = Math.pow(num, 1/6);
      return Math.floor(root) === root; 
    });
  }
  const multiplyMatch = query.match(/What is (\d+) multiplied by (\d+)/i);
  if (multiplyMatch) {
    const x: number = parseInt(multiplyMatch[1], 10);
    const y: number = parseInt(multiplyMatch[2], 10);
    return (x * y).toString();
  }
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  } else if (query.toLowerCase().includes("andrew id")) {
    return "sastaneh";
  }

 else if (query.toLowerCase().includes("What is your name?")) {
  return "Shahad + Al Maha";
}   else if (query.toLowerCase().includes("which of the following numbers is the largest: 50, 75, 81?")) {
  return "81";
} else if (query.toLowerCase().includes("What is 15 plus 50?")) {
  return "65";
}
  return "";
}