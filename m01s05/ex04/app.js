const calculateRectangleArea = (width, length) => {
  return width * length;
};

console.warn(`
  Calculeaza suprafata de tapet necesara pentru
  o camera de 6 pe 4 m cu tavan inalt de 2.5m,
  stiind ca exista o usa de 2.2 pe 1.5 si o
  suprafata de ferestre de 2 pe 1.5.
  “Suprafata de tapet necesara este: xxx metri patrati.”
`);
const longWallSurface = calculateRectangleArea(6, 2.5);
const shortWallSurface = calculateRectangleArea(4, 2.5);
const totalWallSurface = (longWallSurface + shortWallSurface) * 2;
const doorSurface = calculateRectangleArea(2.2, 1.5);
const windowSurface = calculateRectangleArea(2, 1.5);

// console.log((totalWallSurface - doorSurface - windowSurface).toString());
const wallpaperSurface = totalWallSurface - doorSurface - windowSurface;
console.log(`Suprafata de tapet este: ${wallpaperSurface} metri patrati.`);

console.warn(`
  Creaza o functie wrapper numita calculateSquareArea() pentru calculateRectangleArea()
  care sa primeasca ca parametru latura unui patrat si sa calculeze suprafata acestuia.
  O functie wrapper este o functie care “imbraca” o functie existenta
  pentru a-i aduce imbunatatiri, extra cod sau pentru a-i limita in mod intentionat capacitatile.
`);
const calculateSquareArea = (width) => {
  const squareArea = calculateRectangleArea(width, width);

  return squareArea;
};

console.warn(`Calculeaza suprafata de tapet necesara pentru o camera de 12 pe 9 m cu tavan inalt de 2.5m,
stiind ca exista o usa de 3 pe 2 si o suprafata de ferestre de 3 pe 2.
“Suprafata de tapet necesara este xxx metri patrati.”
`);
const bigWall = calculateRectangleArea(12, 2.5);
const smallWall = calculateRectangleArea(9, 2.5);
const doorS = calculateRectangleArea(3, 2);
const windowS = calculateRectangleArea(3, 2);

const wallpaper = (bigWall + smallWall) * 2 - doorS - windowS;
console.log(`Suprafata de tapet necesara este: ${wallpaper} metri patrati.`);

console.warn(`Creaza o functie wrapper pentru calculateRectangleArea() care sa primeasca 4 parametrii:
latimea si lungimea unui dreptunghi initial, apoi latimea si lungimea altui dreptunghi.
Functia se va numi aggregateSurfaceArea(). Folosind aceasta noua functie calculeaza suprafata
totala a doua dreptunghiuri de 48 pe 92 si 51 pe 102.
`);
const aggregateSurfaceArea = (width1, length1, width2, length2) => {
  const squareArea1 = calculateRectangleArea(width1, length1);
  const squareArea2 = calculateRectangleArea(width2, length2);
  const sumSquare = squareArea1 + squareArea2;
  return sumSquare;
};

console.log(aggregateSurfaceArea(48, 92, 51, 102));
