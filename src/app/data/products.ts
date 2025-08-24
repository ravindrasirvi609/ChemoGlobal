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
    id: "1076-38-6",
    name: "4-Hydroxy Coumarin Pure",
    casNumber: "1076-38-6",
    category: "Pharmaceutical Intermediates",
    description: "Essential intermediate for anticoagulant drugs like warfarin",
    purity: "≥98%",
    molecularFormula: "C9H6O3",
    molecularWeight: "162.14 g/mol",
    appearance: "Colorless to pale-yellow crystalline solid",
    applications: [
      "Synthesis of warfarin and related anticoagulants",
      "Production of blood-thinner medications",
      "Base for other coumarin derivatives",
    ],
    image: "/images/products/4-hydroxy-coumarin-powder-500x500.webp",
    tags: ["Intermediate", "Anticoagulants"],
  },
  {
    id: "1072-98-6",
    name: "2-Amino-5-Chloro Pyridine",
    casNumber: "1072-98-6",
    category: "Pharmaceutical Intermediates",
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
    image: "/images/products/2-amino-5-chloropyridine-500x500.webp",
    isNew: true,
    tags: ["API Intermediate", "Heterocyclic"],
  },
  {
    id: "23063-43-6",
    name: "3,5-Bis(Cyanomethyl) Toluene",
    casNumber: "23063-43-6",
    category: "Pharmaceutical Intermediates",
    description:
      "3,5-Bis(cyanomethyl)toluene is a dinitrile compound used in organic synthesis.",
    purity: "≥98%",
    molecularFormula: "C11H10N2",
    molecularWeight: "170.21 g/mol",
    appearance: "To be specified",
    applications: ["Organic synthesis"],
    image: "/images/products/3-5-bis-cyanomethyl-toluene.png",
    tags: ["Intermediate", "Dinitrile"],
  },
  {
    id: "33626-98-1",
    name: "Methyl-6-Bromo-2-Naphtholate",
    casNumber: "33626-98-1",
    category: "Pharmaceutical Intermediates",
    description:
      "Methyl 6-bromo-2-naphthalenecarboxylate is an intermediate used in the synthesis of various organic compounds.",
    purity: "≥98%",
    molecularFormula: "C12H9BrO2",
    molecularWeight: "265.10 g/mol",
    appearance: "Solid",
    applications: ["Organic synthesis", "Building block"],
    image: "/images/products/methyl-6-bromo-2-napthoate.png",
    tags: ["Intermediate", "Naphthalene Derivative", "Ester"],
  },
  {
    id: "100-10-7",
    name: "Para Amino Phenol",
    casNumber: "100-10-7",
    category: "Specialty Chemicals",
    description:
      "p-Dimethylaminobenzaldehyde (DMAB) is an organic compound used as a reagent, for example in Ehrlich's reagent to detect indoles.",
    purity: "≥99%",
    molecularFormula: "C9H11NO",
    molecularWeight: "149.19 g/mol",
    appearance: "White to yellowish crystalline powder",
    applications: [
      "Analytical reagent (Ehrlich's reagent)",
      "Organic synthesis",
    ],
    image: "/images/products/para-dimethyl-amino-benzaldehyde.png",
    tags: ["Reagent", "Aldehyde", "Analytical Chemistry"],
  },
  {
    id: "144-62-7",
    name: "Banzilic Acid",
    casNumber: "144-62-7",
    category: "Specialty Chemicals",
    description:
      "Oxalic acid is an organic compound, a dicarboxylic acid. It is used as a cleaning agent, in dyeing, and as a chemical intermediate.",
    purity: "≥98%",
    molecularFormula: "C2H2O4",
    molecularWeight: "90.03 g/mol",
    appearance: "White crystalline solid",
    applications: [
      "Cleaning agent",
      "Bleaching agent",
      "Mordant in dyeing",
      "Rust removal",
    ],
    image: "/images/products/oxalic-acid.png",
    tags: ["Dicarboxylic Acid", "Industrial Chemical", "Cleaning Agent"],
  },
  {
    id: "87-41-2",
    name: "Methyl Banzilate",
    casNumber: "87-41-2",
    category: "Pharmaceutical Intermediates",
    description:
      "Phthalide is an organic compound, the simplest benzo lactone, used as an intermediate in the synthesis of various chemicals, including dyes and pharmaceuticals.",
    purity: "≥98%",
    molecularFormula: "C8H6O2",
    molecularWeight: "134.13 g/mol",
    appearance: "White solid",
    applications: [
      "Organic synthesis",
      "Intermediate for dyes",
      "Intermediate for pharmaceuticals",
    ],
    image: "/images/products/phthalide.png",
    tags: ["Intermediate", "Lactone", "Building Block"],
  },
  {
    id: "placeholder-1",
    name: "2-(1-Adamantyl)4-Bromoanisol",
    casNumber: "N/A",
    category: "Pharmaceutical Intermediates",
    description:
      "2-(1-Adamantyl)4-Bromoanisol is a specialized intermediate used in organic synthesis.",
    purity: "≥98%",
    molecularFormula: "C17H21BrO",
    molecularWeight: "321.26 g/mol",
    appearance: "To be specified",
    applications: ["Organic synthesis", "Pharmaceutical intermediate"],
    image: "/images/chemical-placeholder.png",
    tags: ["Intermediate", "Adamantyl Derivative"],
  },
  {
    id: "glimepiride-sulphonamide",
    name: "Glimepiride Sulphonamide",
    casNumber: "N/A",
    category: "Pharmaceutical Intermediates",
    description:
      "Sulphonamide derivative of glimepiride for pharmaceutical research and development.",
    purity: "≥98%",
    molecularFormula: "C24H34N4O5S",
    molecularWeight: "490.62 g/mol",
    appearance: "White crystalline powder",
    applications: [
      "Pharmaceutical research",
      "Drug development",
      "Chemical synthesis",
    ],
    image: "/images/products/15-0-Glimepiride-Sulphonamide-Powder.jpg",
    tags: ["Intermediate", "Sulphonamide", "Glimepiride"],
  },
];

// Commented out products - keeping for reference
/*
  {
    id: "34552-83-5",
    name: "Loperamide HCl",
    casNumber: "34552-83-5",
    category: "APIs",
    description:
      "Trusted API used in antidiarrheal medications with USP/BP grade quality",
    purity: "≥98%",
    molecularFormula: "C29H33ClN2O2 · HCl",
    molecularWeight: "513.5 g/mol",
    appearance: "White crystalline powder",
    applications: [
      "Primary active ingredient in antidiarrheal products",
      "OTC and prescription medications",
    ],
    image: "/images/products/loperamide-hcl.png",
    tags: ["API", "Antidiarrheal"],
  },
  {
    id: "58-46-8",
    name: "Tetrabenazine",
    casNumber: "58-46-8",
    category: "APIs",
    description:
      "Active pharmaceutical ingredient for treating hyperkinetic movement disorders",
    purity: "≥98% (API grade)",
    molecularFormula: "C19H27NO3",
    molecularWeight: "317.42 g/mol",
    appearance: "To be specified",
    applications: [
      "Treatment of Huntington's disease",
      "Treatment of tardive dyskinesia",
    ],
    image: "/images/products/tetrabenazine.png",
    tags: ["API", "Neurological Drug"],
  },
  {
    id: "459-57-4",
    name: "4-Fluorobenzaldehyde",
    casNumber: "459-57-4",
    category: "Specialty Chemicals",
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
    id: "96-48-0",
    name: "γ-Butyrolactone",
    casNumber: "96-48-0",
    category: "Specialty Chemicals",
    description:
      "Common solvent and reagent in chemistry, used as an intermediate for various syntheses",
    purity: "≥99%",
    molecularFormula: "C4H6O2",
    molecularWeight: "86.09 g/mol",
    appearance: "Colorless liquid",
    applications: ["Solvent", "Chemical intermediate", "Reagent"],
    image: "/images/products/gamma-butyrolactone.png",
    tags: ["Solvent", "Intermediate", "Lactone"],
  },
*/

// All products data - Only showing specified products
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
    image: "/images/products/2-amino-5-chloropyridine-500x500.webp",
    isNew: true,
    tags: ["Intermediate", "High Purity"],
  },
  {
    id: "1076-38-6",
    name: "4-Hydroxy Coumarin Pure",
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
    image: "/images/products/4-hydroxy-coumarin-powder-500x500.webp",
    isNew: false,
    tags: ["Intermediate", "Anticoagulants"],
  },
  {
    id: "23063-43-6",
    name: "3,5-Bis(Cyanomethyl) Toluene",
    casNumber: "23063-43-6",
    category: "Pharmaceutical Intermediates",
    description:
      "3,5-Bis(cyanomethyl)toluene is a dinitrile compound used in organic synthesis.",
    purity: "≥98%",
    molecularFormula: "C11H10N2",
    molecularWeight: "170.21 g/mol",
    appearance: "To be specified",
    applications: ["Organic synthesis"],
    image: "/images/products/3-5-bis-cyanomethyl-toluene.png",
    tags: ["Intermediate", "Dinitrile"],
  },
  {
    id: "33626-98-1",
    name: "Methyl-6-Bromo-2-Naphtholate",
    casNumber: "33626-98-1",
    category: "Pharmaceutical Intermediates",
    description:
      "Methyl 6-bromo-2-naphthalenecarboxylate is an intermediate used in the synthesis of various organic compounds.",
    purity: "≥98%",
    molecularFormula: "C12H9BrO2",
    molecularWeight: "265.10 g/mol",
    appearance: "Solid",
    applications: ["Organic synthesis", "Building block"],
    image: "/images/products/methyl-6-bromo-2-napthoate.png",
    tags: ["Intermediate", "Naphthalene Derivative", "Ester"],
  },
  {
    id: "placeholder-1",
    name: "2-(1-Adamantyl)4-Bromoanisol",
    casNumber: "N/A",
    category: "Pharmaceutical Intermediates",
    description:
      "2-(1-Adamantyl)4-Bromoanisol is a specialized intermediate used in organic synthesis.",
    purity: "≥98%",
    molecularFormula: "C17H21BrO",
    molecularWeight: "321.26 g/mol",
    appearance: "To be specified",
    applications: ["Organic synthesis", "Pharmaceutical intermediate"],
    image: "/images/chemical-placeholder.png",
    tags: ["Intermediate", "Adamantyl Derivative"],
  },
  {
    id: "100-10-7",
    name: "Para Amino Phenol",
    casNumber: "100-10-7",
    category: "Specialty Chemicals",
    description:
      "p-Dimethylaminobenzaldehyde (DMAB) is an organic compound used as a reagent, for example in Ehrlich's reagent to detect indoles.",
    purity: "≥99%",
    molecularFormula: "C9H11NO",
    molecularWeight: "149.19 g/mol",
    appearance: "White to yellowish crystalline powder",
    applications: [
      "Analytical reagent (Ehrlich's reagent)",
      "Organic synthesis",
    ],
    image: "/images/products/para-dimethyl-amino-benzaldehyde.png",
    tags: ["Reagent", "Aldehyde", "Analytical Chemistry"],
  },
  {
    id: "144-62-7",
    name: "Banzilic Acid",
    casNumber: "144-62-7",
    category: "Specialty Chemicals",
    description:
      "Oxalic acid is an organic compound, a dicarboxylic acid. It is used as a cleaning agent, in dyeing, and as a chemical intermediate.",
    purity: "≥98%",
    molecularFormula: "C2H2O4",
    molecularWeight: "90.03 g/mol",
    appearance: "White crystalline solid",
    applications: [
      "Cleaning agent",
      "Bleaching agent",
      "Mordant in dyeing",
      "Rust removal",
    ],
    image: "/images/products/oxalic-acid.png",
    tags: ["Dicarboxylic Acid", "Industrial Chemical", "Cleaning Agent"],
  },
  {
    id: "87-41-2",
    name: "Methyl Banzilate",
    casNumber: "87-41-2",
    category: "Pharmaceutical Intermediates",
    description:
      "Phthalide is an organic compound, the simplest benzo lactone, used as an intermediate in the synthesis of various chemicals, including dyes and pharmaceuticals.",
    purity: "≥98%",
    molecularFormula: "C8H6O2",
    molecularWeight: "134.13 g/mol",
    appearance: "White solid",
    applications: [
      "Organic synthesis",
      "Intermediate for dyes",
      "Intermediate for pharmaceuticals",
    ],
    image: "/images/products/phthalide.png",
    tags: ["Intermediate", "Lactone", "Building Block"],
  },
  {
    id: "glimepiride-sulphonamide",
    name: "Glimepiride Sulphonamide",
    casNumber: "N/A",
    category: "Pharmaceutical Intermediates",
    description:
      "Sulphonamide derivative of glimepiride for pharmaceutical research and development.",
    purity: "≥98%",
    molecularFormula: "C24H34N4O5S",
    molecularWeight: "490.62 g/mol",
    appearance: "White crystalline powder",
    applications: [
      "Pharmaceutical research",
      "Drug development",
      "Chemical synthesis",
    ],
    image: "/images/products/15-0-Glimepiride-Sulphonamide-Powder.jpg",
    tags: ["Intermediate", "Sulphonamide", "Glimepiride"],
  },
];

// Commented out all other products - keeping for reference
/*
  {
    id: "34552-83-5",
    name: "Loperamide HCl",
    casNumber: "34552-83-5",
    category: "Pharmaceutical Intermediates", // Or APIs
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
    image: "/images/products/loperamide-hcl.png",
    isNew: false,
    tags: ["API", "Antidiarrheal"],
  },
  // Newly Added Products Start Here
  {
    id: "22007-91-6",
    name: "Ethyl Acetimidate Hydrochloride",
    casNumber: "22007-91-6",
    category: "Pharmaceutical Intermediates",
    description:
      "Ethyl Acetimidate Hydrochloride is an intermediate used in various chemical syntheses, particularly in pharmaceuticals.",
    purity: "≥98%",
    molecularFormula: "C4H10ClNO",
    molecularWeight: "123.58 g/mol",
    appearance: "To be specified",
    applications: ["Organic synthesis", "Pharmaceutical intermediate"],
    image: "/images/products/ethyl-acetimidate-hydrochloride.png",
    isNew: true,
    tags: ["Intermediate", "Chemical Compound"],
  },
  {
    id: "14719-83-6",
    name: "4-Chloro-3-Nitro Benzoic Acid Methyl Ester",
    casNumber: "14719-83-6",
    category: "Pharmaceutical Intermediates",
    description:
      "Methyl 4-chloro-3-nitrobenzoate is a chemical intermediate used in the synthesis of more complex molecules. [7, 13, 27, 29, 34]",
    purity: "≥98%",
    molecularFormula: "C8H6ClNO4",
    molecularWeight: "215.59 g/mol",
    appearance: "To be specified",
    applications: [
      "Organic synthesis",
      "Intermediate for pharmaceuticals and agrochemicals",
    ],
    image: "/images/products/4-chloro-3-nitro-benzoic-acid-methyl-ester.png",
    isNew: true,
    tags: ["Intermediate", "Benzoate Derivative"],
  },
  {
    id: "56615-71-3",
    name: "Ethyl-N-(4-Nitro Phenoxy) Acetimidate",
    casNumber: "56615-71-3",
    category: "Specialty Chemicals",
    description:
      "Ethyl-N-(4-Nitro Phenoxy) Acetimidate is a specialty chemical used in specific synthetic applications.",
    purity: "≥98%",
    molecularFormula: "C10H12N2O4",
    molecularWeight: "224.21 g/mol",
    appearance: "To be specified",
    applications: ["Organic synthesis"],
    image: "/images/products/ethyl-n-4-nitro-phenoxy-acetimidate.png",
    isNew: true,
    tags: ["Specialty Chemical", "Acetimidate Derivative"],
  },
  {
    id: "1674-22-2",
    name: "2-(Phenoxymethyl) Benzoic Acid",
    casNumber: "1674-22-2",
    category: "Pharmaceutical Intermediates",
    description:
      "2-(Phenoxymethyl) Benzoic Acid is an organic compound used as a building block in chemical synthesis.",
    purity: "≥98%",
    molecularFormula: "C14H12O3",
    molecularWeight: "228.24 g/mol",
    appearance: "To be specified",
    applications: ["Organic synthesis", "Pharmaceutical research"],
    image: "/images/products/2-phenoxymethyl-benzoic-acid.png",
    isNew: true,
    tags: ["Intermediate", "Carboxylic Acid"],
  },
  {
    id: "4504-87-4",
    name: "Dibenzo(b,e)oxepin-11(6H)-one",
    casNumber: "4504-87-4",
    category: "Pharmaceutical Intermediates",
    description:
      "Dibenzo(b,e)oxepin-11(6H)-one is a heterocyclic compound often used as an intermediate in pharmaceutical synthesis, including as a Doxepin impurity.",
    purity: "≥98%",
    molecularFormula: "C14H10O2",
    molecularWeight: "210.23 g/mol",
    appearance: "To be specified",
    applications: ["Pharmaceutical synthesis", "Impurity standard"],
    image: "/images/products/dibenzo-oxepin-one.png",
    isNew: true,
    tags: ["Intermediate", "Heterocyclic Compound", "Doxepin Related"],
  },
  {
    id: "96-48-0",
    name: "γ-Butyrolactone",
    casNumber: "96-48-0",
    category: "Specialty Chemicals",
    description:
      "γ-Butyrolactone (GBL) is a common solvent and reagent in chemistry, also used as an intermediate for various syntheses.",
    purity: "≥99%",
    molecularFormula: "C4H6O2",
    molecularWeight: "86.09 g/mol",
    appearance: "Colorless liquid",
    applications: ["Solvent", "Chemical intermediate", "Reagent"],
    image: "/images/products/gamma-butyrolactone.png",
    isNew: true,
    tags: ["Solvent", "Intermediate", "Lactone"],
  },
  {
    id: "3144-09-0",
    name: "Methane Sulphonamide",
    casNumber: "3144-09-0",
    category: "Pharmaceutical Intermediates",
    description:
      "Methanesulfonamide is an organic compound used in various chemical syntheses, including pharmaceuticals. [6, 11, 20, 25, 26]",
    purity: "≥97%",
    molecularFormula: "CH5NO2S",
    molecularWeight: "95.12 g/mol",
    appearance: "Solid",
    applications: ["Organic synthesis", "Pharmaceutical intermediate"],
    image: "/images/products/methane-sulphonamide.png",
    isNew: true,
    tags: ["Intermediate", "Sulfonamide"],
  },
  {
    id: "875-23-0",
    name: "2-Bromo-4-Chloro-6-Nitrophenol",
    casNumber: "875-23-0",
    category: "Specialty Chemicals",
    description:
      "2-Bromo-4-Chloro-6-Nitrophenol is a substituted phenol used in chemical synthesis.",
    purity: "≥98%",
    molecularFormula: "C6H3BrClNO3",
    molecularWeight: "252.45 g/mol",
    appearance: "To be specified",
    applications: ["Organic synthesis", "Chemical intermediate"],
    image: "/images/products/2-bromo-4-chloro-6-nitrophenol.png",
    isNew: true,
    tags: ["Intermediate", "Phenol Derivative", "Halogenated"],
  },
  {
    id: "128074-89-5",
    name: "2-(Benzyloxy)-1-bromo-5-chloro-3-nitrobenzene",
    casNumber: "128074-89-5",
    category: "Pharmaceutical Intermediates",
    description:
      "2-(Benzyloxy)-1-bromo-5-chloro-3-nitrobenzene is a complex organic intermediate used in multi-step syntheses.",
    purity: "≥98%",
    molecularFormula: "C13H9BrClNO3",
    molecularWeight: "342.58 g/mol",
    appearance: "To be specified",
    applications: ["Organic synthesis", "Advanced intermediate"],
    image: "/images/products/2-benzyloxy-1-bromo-5-chloro-3-nitrobenzene.png",
    isNew: true,
    tags: ["Intermediate", "Halogenated Nitrobenzene"],
  },
  {
    id: "108-73-6",
    name: "Phloroglucinol Anhydrous",
    casNumber: "108-73-6",
    category: "Specialty Chemicals",
    description:
      "Phloroglucinol Anhydrous is a trihydroxyphenol compound used as a building block in organic synthesis and as a reagent.",
    purity: "≥99%",
    molecularFormula: "C6H6O3",
    molecularWeight: "126.11 g/mol",
    appearance: "White to off-white crystalline powder",
    applications: [
      "Organic synthesis",
      "Coupling agent",
      "Pharmaceutical intermediate",
    ],
    image: "/images/products/phloroglucinol-anhydrous.png",
    isNew: true,
    tags: ["Building Block", "Reagent", "Phenol"],
  },
  {
    id: "58-46-8",
    name: "Tetrabenazine",
    casNumber: "58-46-8",
    category: "APIs",
    description:
      "Tetrabenazine (3-Isobutyl-9,10-Dimethoxy-1,3,4,6,7,11B-Hexahydro-2H-Benzo(a)Quinolinzine-2-One) is an active pharmaceutical ingredient used for treating hyperkinetic movement disorders.",
    purity: "≥98% (API grade)",
    molecularFormula: "C19H27NO3",
    molecularWeight: "317.42 g/mol",
    appearance: "To be specified",
    applications: [
      "Treatment of Huntington's disease",
      "Treatment of tardive dyskinesia",
    ],
    image: "/images/products/tetrabenazine.png",
    isNew: true,
    tags: ["API", "Neurological Drug"],
  },
  {
    id: "14192-26-8",
    name: "Methyl-2-Oxoindoline-6-Carboxylate",
    casNumber: "14192-26-8",
    category: "Pharmaceutical Intermediates",
    description:
      "Methyl-2-Oxoindoline-6-Carboxylate is an intermediate used in the synthesis of various biologically active compounds.",
    purity: "≥98%",
    molecularFormula: "C10H9NO3",
    molecularWeight: "191.18 g/mol",
    appearance: "To be specified",
    applications: ["Organic synthesis", "Pharmaceutical research"],
    image: "/images/products/methyl-2-oxoindoline-6-carboxylate.png",
    isNew: true,
    tags: ["Intermediate", "Indoline Derivative"],
  },
  {
    id: "2086-26-2",
    name: "O-(4-Nitrophenyl) Hydroxylamine",
    casNumber: "2086-26-2",
    category: "Specialty Chemicals",
    description:
      "O-(4-Nitrophenyl) Hydroxylamine is a hydroxylamine derivative used in organic synthesis.",
    purity: "≥97%",
    molecularFormula: "C6H6N2O3",
    molecularWeight: "154.12 g/mol",
    appearance: "To be specified",
    applications: ["Organic synthesis", "Reagent"],
    image: "/images/products/o-4-nitrophenyl-hydroxylamine.png",
    isNew: true,
    tags: ["Reagent", "Hydroxylamine Derivative"],
  },
  {
    id: "39186-58-8",
    name: "4-Bromo-2,2-Diphenylbutyronitrile",
    casNumber: "39186-58-8",
    category: "Pharmaceutical Intermediates",
    description:
      "4-Bromo-2,2-Diphenylbutyronitrile (also known as Glenfin) is an important intermediate in the synthesis of Loperamide and other pharmaceuticals.",
    purity: "≥98%",
    molecularFormula: "C16H14BrN",
    molecularWeight: "300.19 g/mol",
    appearance: "To be specified",
    applications: [
      "Intermediate for Loperamide synthesis",
      "Organic synthesis",
    ],
    image: "/images/products/4-bromo-2-2-diphenylbutyronitrile.png",
    isNew: true,
    tags: ["Intermediate", "Nitrile", "Loperamide Intermediate"],
  },
  {
    id: "56917-31-6",
    name: "4-Bromo-2,2-Diphenylbutyric Chloride",
    casNumber: "56917-31-6",
    category: "Pharmaceutical Intermediates",
    description:
      "4-Bromo-2,2-Diphenylbutyric Chloride is a reactive acyl chloride intermediate, related to the synthesis of Loperamide.",
    purity: "≥97%",
    molecularFormula: "C16H14BrClO",
    molecularWeight: "337.64 g/mol",
    appearance: "To be specified",
    applications: ["Organic synthesis", "Intermediate for pharmaceuticals"],
    image: "/images/products/4-bromo-2-2-diphenylbutyric-chloride.png",
    isNew: true,
    tags: ["Intermediate", "Acyl Chloride", "Loperamide Intermediate"],
  },
  // Add more products as needed
*/

// Categories with icons
// Calculate counts dynamically
const pharmaceuticalIntermediatesCount = PRODUCTS.filter(
  (p) => p.category === "Pharmaceutical Intermediates"
).length;
const specialtyChemicalsCount = PRODUCTS.filter(
  (p) => p.category === "Specialty Chemicals"
).length;
const apisCount = PRODUCTS.filter((p) => p.category === "APIs").length;

export const CATEGORIES: Category[] = [
  { name: "All Products", count: PRODUCTS.length, icon: "🧪" },
  {
    name: "Pharmaceutical Intermediates",
    count: pharmaceuticalIntermediatesCount,
    icon: "🧪",
  },
  { name: "Specialty Chemicals", count: specialtyChemicalsCount, icon: "⚗️" },
  { name: "APIs", count: apisCount, icon: "💊" },
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
