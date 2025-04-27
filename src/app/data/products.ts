// Type definitions
export type Product = {
  id: string;
  name: string;
  casNumber: string;
  category: string;
  description: string;
  purity: string;
  molecularFormula?: string;
  molecularWeight?: string;
  appearance?: string;
  applications: string[];
  packaging?: string[];
  storage?: string;
  shelfLife?: string;
  regulatoryStatus?: string;
  technicalDetails?: string;
  keyFeatures?: string[];
  image: string;
  isNew?: boolean;
  tags?: string[];
};

export type Category = {
  name: string;
  count: number;
  icon: string;
};

// Default product image
export const defaultProductImage = "/images/chemical-placeholder.png";

// Featured products data for home page
export const featuredProducts: Product[] = [
  {
    id: "1072-98-6",
    name: "2-Amino-5-chloropyridine",
    casNumber: "1072-98-6",
    category: "Heterocyclic Compounds",
    description:
      "High-purity pharmaceutical intermediate valued in organic synthesis and drug discovery",
    purity: "≥98%",
    molecularFormula: "C5H5ClN2",
    molecularWeight: "128.56 g/mol",
    appearance: "Off-white crystalline solid",
    applications: [
      "Synthesizing cyclopyrrolone sedatives",
      "CNS drug candidate development",
      "Pharma-grade API production",
    ],
    image: "/images/products/2-amino-5-chloropyridine.png",
    isNew: true,
    tags: ["API Intermediate", "Heterocyclic"],
  },
  {
    id: "459-57-4",
    name: "4-Fluorobenzaldehyde",
    casNumber: "459-57-4",
    category: "Fluorine Compounds",
    description:
      "Versatile fluorinated building block for pharmaceutical and agrochemical synthesis",
    purity: "≥98%",
    molecularFormula: "C7H5FO",
    molecularWeight: "124.11 g/mol",
    appearance: "Colorless to pale yellow liquid",
    applications: [
      "Pharmaceutical synthesis",
      "Agrochemical production",
      "Organic chemistry research",
    ],
    image: "/images/products/4-fluorobenzaldehyde.png",
    tags: ["Building Block", "Fluorinated"],
  },
  {
    id: "586-79-0",
    name: "3-Bromophenylacetic acid",
    casNumber: "586-79-0",
    category: "Carboxylic Acids",
    description:
      "Versatile brominated building block for organic synthesis applications",
    purity: "≥98%",
    molecularFormula: "C8H7BrO2",
    molecularWeight: "215.05 g/mol",
    appearance: "White to off-white crystalline solid",
    applications: [
      "Pharmaceutical intermediate",
      "Agrochemical synthesis",
      "Research applications",
    ],
    image: "/images/products/3-bromophenylacetic-acid.png",
    tags: ["Carboxylic Acid", "Halogenated"],
  },
];

// All products data
export const PRODUCTS: Product[] = [
  // Pharmaceutical Intermediates
  {
    id: "1072-98-6",
    name: "2-Amino-5-Chloro Pyridine",
    casNumber: "1072-98-6",
    category: "Pharmaceutical Intermediates",
    description:
      "2-Amino-5-Chloro Pyridine is a high-purity pharmaceutical intermediate valued in organic synthesis. This off-white crystalline compound is a versatile building block in drug discovery. It is widely used as a key intermediate to produce sedative APIs such as zopiclone, and it is offered with ultra-low impurities for consistency.",
    purity: "≥98%",
    molecularFormula: "C5H5ClN2",
    molecularWeight: "128.56 g/mol",
    appearance: "Off-white crystalline solid",
    applications: [
      "Synthesizing cyclopyrrolone sedatives",
      "CNS drug candidate development",
      "Pharma-grade API production",
    ],
    packaging: ["25kg fiber drums", "5kg aluminum foil bags", "1kg bottles"],
    storage:
      "Store in a cool, dry place. Non-hygroscopic and stable during storage.",
    shelfLife: "24 months when properly stored",
    regulatoryStatus: "For pharmaceutical manufacturing use",
    technicalDetails:
      "Melting Point: 135-138°C\nBoiling Point: 127-128°C/11 mmHg\nSolubility: Soluble in common organic solvents\nStability: Non-hygroscopic crystalline solid",
    keyFeatures: [
      "Pharma-grade purity (typically ≥98%) for reliable API development",
      "Versatile intermediate: used in synthesizing cyclopyrrolone sedatives and other CNS drug candidates",
      "Stable form: non-hygroscopic crystalline solid, easy to handle and store",
      "Bulk supply: available through trusted chemical suppliers, ensuring uninterrupted production",
    ],
    image: "/images/products/2-amino-5-chloropyridine.png",
    isNew: true,
    tags: ["Intermediate", "High Purity"],
  },
  {
    id: "53-02-1",
    name: "5-Methyl Nicotinic Acid",
    casNumber: "53-02-1",
    category: "Pharmaceutical Intermediates",
    description:
      "5-Methyl Nicotinic Acid is an important raw material and intermediate in pharmaceutical synthesis. Offered at high purity, this fine chemical serves the organic synthesis needs of drug manufacturers. It finds applications in antihistamine production (e.g., as a precursor to rupatadine) and other APIs.",
    purity: "≥97%",
    molecularFormula: "C7H7NO2",
    molecularWeight: "137.14 g/mol",
    appearance: "White to off-white crystalline powder",
    applications: [
      "Antihistamine production",
      "Precursor to rupatadine",
      "Organic synthesis for pharmaceuticals and agrochemicals",
    ],
    packaging: ["25kg fiber drums", "5kg aluminum foil bags"],
    storage: "Store in a cool, dry place away from direct sunlight",
    shelfLife: "36 months when properly stored",
    regulatoryStatus: "For pharmaceutical and chemical synthesis",
    technicalDetails:
      "Melting Point: 210-215°C\nSolubility: Slightly soluble in water, soluble in alcohols",
    keyFeatures: [
      "High purity (≥97%) to ensure consistent chemical performance",
      "Versatile intermediate: widely used in organic synthesis for pharmaceuticals and agrochemicals",
      "Applications: building block for allergy medications and other active pharmaceutical ingredients",
      "Benefits: Stable, crystalline form; stocked by reputable suppliers for bulk orders",
    ],
    image: "",
    isNew: false,
    tags: ["Intermediate", "Versatile"],
  },
  {
    id: "1076-38-6",
    name: "4 Hydroxy Coumarin",
    casNumber: "1076-38-6",
    category: "Pharmaceutical Intermediates",
    description:
      "4-Hydroxycoumarin is an essential pharmaceutical intermediate and the immediate precursor to many anticoagulant drugs. This colorless to pale-yellow solid is used to synthesize warfarin and related coumarin anticoagulants. We offer it at high purity to ensure efficient drug manufacture.",
    purity: "≥98%",
    molecularFormula: "C9H6O3",
    molecularWeight: "162.14 g/mol",
    appearance: "Colorless to pale-yellow crystalline solid",
    applications: [
      "Synthesis of warfarin and related anticoagulants",
      "Production of blood-thinner medications",
      "Base for other coumarin derivatives",
    ],
    packaging: ["25kg fiber drums", "5kg aluminum foil bags", "1kg bottles"],
    storage: "Store in a cool, dry place away from direct sunlight",
    shelfLife: "24 months when properly stored",
    regulatoryStatus: "For pharmaceutical manufacturing use",
    technicalDetails:
      "Melting Point: 206-208°C\nSolubility: Slightly soluble in water, soluble in alcohols and alkaline solutions",
    keyFeatures: [
      "Immediate precursor: forms the core structure of blood-thinner medications (e.g., warfarin)",
      "High purity: fine chemical-grade quality for precise, reproducible reactions",
      "Versatile scaffold: serves as a base for other coumarin derivatives and vitamin K analogs",
      "Benefits: Consistent performance in pharma applications; supplied in bulk to support large-scale production",
    ],
    image: "",
    isNew: false,
    tags: ["Intermediate", "Anticoagulants"],
  },
  {
    id: "34552-83-5",
    name: "Loperamide HCl",
    casNumber: "34552-83-5",
    category: "Pharmaceutical Intermediates",
    description:
      "Loperamide Hydrochloride is a trusted API used in antidiarrheal medications. This opioid-receptor agonist is formulated in OTC and prescription drugs (e.g., Imodium) to treat diarrhea symptoms. We supply Loperamide HCl as a white crystalline powder meeting stringent USP/BP quality and regulatory requirements.",
    purity: "≥98%",
    molecularFormula: "C29H33ClN2O2 · HCl",
    molecularWeight: "513.5 g/mol",
    appearance: "White crystalline powder",
    applications: [
      "Primary active ingredient in antidiarrheal products",
      "OTC and prescription medications",
    ],
    packaging: [
      "25kg fiber drums with double polyethylene liner",
      "5kg aluminum foil bags",
    ],
    storage: "Store in a cool, dry place away from direct sunlight",
    shelfLife: "36 months when properly stored",
    regulatoryStatus: "USP/BP grade, GMP certified",
    technicalDetails:
      "Melting Point: 225-230°C\nSolubility: Slightly soluble in water, soluble in methanol and chloroform",
    keyFeatures: [
      "API-grade purity (≥98%) ensuring safety and efficacy in formulations",
      "Antidiarrheal application: primary active ingredient in well-known antidiarrheal products",
      "Controlled quality: meets GMP standards for pharmaceutical manufacturing",
      "Reliable supply: bulk quantities available from established chemical suppliers for consistent production",
    ],
    image: "",
    isNew: false,
    tags: ["API", "Antidiarrheal"],
  },
  // Add more products as needed
];

// Categories with icons
export const CATEGORIES: Category[] = [
  { name: "All Products", count: 4, icon: "🧪" },
  { name: "Pharmaceutical Intermediates", count: 4, icon: "🧪" },
  { name: "Specialty Chemicals", count: 0, icon: "⚗️" },
  { name: "APIs", count: 0, icon: "💊" },
];

// Helper function to make CAS numbers URL-safe
export const makeUrlSafe = (casNumber: string): string => {
  // Replace special characters with URL-safe versions
  return encodeURIComponent(casNumber);
};

// Helper function to decode URL-safe CAS numbers back to original form
export const fromUrlSafe = (encodedCasNumber: string): string => {
  try {
    return decodeURIComponent(encodedCasNumber);
  } catch (e) {
    console.error("Error decoding CAS number:", e);
    return encodedCasNumber; // Return as-is if decoding fails
  }
};

// Helper function to get product by CAS number
export const getProductByCasNumber = (casNumber: string): Product | null => {
  // First decode the CAS number if it's URL-encoded
  const decodedCasNumber = fromUrlSafe(casNumber);
  console.log("Looking up product with decodedCasNumber:", decodedCasNumber);

  // First try direct match
  let product = PRODUCTS.find(
    (product) => product.casNumber === decodedCasNumber
  );

  // If not found and the casNumber is numeric, try to find by numeric ID
  if (!product && !isNaN(Number(decodedCasNumber))) {
    // Try searching by ID that starts with the number
    product = PRODUCTS.find(
      (product) =>
        product.id === decodedCasNumber ||
        product.id.startsWith(decodedCasNumber + "-") ||
        product.casNumber === decodedCasNumber ||
        product.casNumber.startsWith(decodedCasNumber + "-")
    );
  }

  // If still not found, try case-insensitive match
  if (!product) {
    const lowerCasNumber = decodedCasNumber.toLowerCase();
    product = PRODUCTS.find(
      (product) =>
        product.casNumber.toLowerCase() === lowerCasNumber ||
        product.id.toLowerCase() === lowerCasNumber
    );
  }

  return product || null;
};
