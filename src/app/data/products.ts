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
    image: defaultProductImage,
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
    image: "/images/products/4-hydroxycoumarin.png",
    isNew: false,
    tags: ["Intermediate", "Anticoagulants"],
  },
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
    image: defaultProductImage,
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
    image: defaultProductImage,
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
    image: defaultProductImage,
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
    image: defaultProductImage,
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
    image: defaultProductImage,
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
    image: defaultProductImage,
    isNew: true,
    tags: ["Solvent", "Intermediate", "Lactone"],
  },
  {
    id: "23063-43-6",
    name: "3,5-Bis(cyanomethyl)toluene",
    casNumber: "23063-43-6",
    category: "Pharmaceutical Intermediates",
    description:
      "3,5-Bis(cyanomethyl)toluene is a dinitrile compound used in organic synthesis.",
    purity: "≥98%",
    molecularFormula: "C11H10N2",
    molecularWeight: "170.21 g/mol",
    appearance: "To be specified",
    applications: ["Organic synthesis"],
    image: defaultProductImage,
    isNew: true,
    tags: ["Intermediate", "Dinitrile"],
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
    image: defaultProductImage,
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
    image: defaultProductImage,
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
    image: defaultProductImage,
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
    image: defaultProductImage,
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
    image: defaultProductImage,
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
    image: defaultProductImage,
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
    image: defaultProductImage,
    isNew: true,
    tags: ["Reagent", "Hydroxylamine Derivative"],
  },
  {
    id: "33626-98-1",
    name: "Methyl-6-Bromo-2-Napthoate",
    casNumber: "33626-98-1",
    category: "Pharmaceutical Intermediates",
    description:
      "Methyl 6-bromo-2-naphthalenecarboxylate is an intermediate used in the synthesis of various organic compounds. [2, 24, 35, 40, 44]",
    purity: "≥98%",
    molecularFormula: "C12H9BrO2",
    molecularWeight: "265.10 g/mol",
    appearance: "Solid",
    applications: ["Organic synthesis", "Building block"],
    image: defaultProductImage,
    isNew: true,
    tags: ["Intermediate", "Naphthalene Derivative", "Ester"],
  },
  {
    id: "87-41-2",
    name: "Phthalide",
    casNumber: "87-41-2",
    category: "Pharmaceutical Intermediates",
    description:
      "Phthalide is an organic compound, the simplest benzo lactone, used as an intermediate in the synthesis of various chemicals, including dyes and pharmaceuticals. [9, 12, 17, 23, 36]",
    purity: "≥98%",
    molecularFormula: "C8H6O2",
    molecularWeight: "134.13 g/mol",
    appearance: "White solid",
    applications: [
      "Organic synthesis",
      "Intermediate for dyes",
      "Intermediate for pharmaceuticals",
    ],
    image: defaultProductImage,
    isNew: true,
    tags: ["Intermediate", "Lactone", "Building Block"],
  },
  {
    id: "4602-83-9",
    name: "3,4-Dihydroisoquinoline-6,7-diol",
    casNumber: "4602-83-9",
    category: "Pharmaceutical Intermediates",
    description:
      "3,4-Dihydroisoquinoline-6,7-diol, also known as 6,7-Dihydroxy-3,4-dihydroisoquinoline, is an intermediate in isoquinoline alkaloid synthesis. [10, 33, 37, 42]",
    purity: "≥97%",
    molecularFormula: "C9H9NO2",
    molecularWeight: "163.17 g/mol",
    appearance: "Solid",
    applications: ["Organic synthesis", "Intermediate for alkaloids"],
    image: defaultProductImage,
    isNew: true,
    tags: ["Intermediate", "Isoquinoline Derivative", "Heterocyclic Compound"],
  },
  {
    id: "91342-74-4",
    name: "3-(Dimethylaminomethyl)-5-methylhexan-2-one",
    casNumber: "91342-74-4",
    category: "Pharmaceutical Intermediates",
    description:
      "3-(Dimethylaminomethyl)-5-methylhexan-2-one is an organic intermediate. [15, 18, 46]",
    purity: "≥98%",
    molecularFormula: "C10H21NO",
    molecularWeight: "171.28 g/mol",
    appearance: "To be specified",
    applications: ["Organic synthesis"],
    image: defaultProductImage,
    isNew: true,
    tags: ["Intermediate", "Amine", "Ketone"],
  },
  {
    id: "110751-16-5",
    name: "6,7-Dimethyl-3,4-Dihydroisoquinoline Hydrochloride",
    casNumber: "110751-16-5",
    category: "Pharmaceutical Intermediates",
    description:
      "6,7-Dimethyl-3,4-Dihydroisoquinoline Hydrochloride is a heterocyclic compound intermediate.",
    purity: "≥98%",
    molecularFormula: "C11H14ClN", // C11H13N.HCl
    molecularWeight: "197.69 g/mol",
    appearance: "To be specified",
    applications: ["Organic synthesis", "Pharmaceutical research"],
    image: defaultProductImage,
    isNew: true,
    tags: ["Intermediate", "Isoquinoline Derivative", "Hydrochloride"],
  },
  {
    id: "98873-55-3",
    name: "1-(Cyanomethyl)imidazole",
    casNumber: "98873-55-3",
    category: "Pharmaceutical Intermediates",
    description:
      "1-(Cyanomethyl)imidazole is a heterocyclic compound used as an intermediate in pharmaceutical synthesis. [1, 4, 16, 32, 47, 49]",
    purity: "≥98%",
    molecularFormula: "C5H5N3",
    molecularWeight: "107.11 g/mol",
    appearance: "Solid",
    applications: ["Organic synthesis", "Pharmaceutical intermediate"],
    image: defaultProductImage,
    isNew: true,
    tags: ["Intermediate", "Imidazole Derivative", "Nitrile"],
  },
  {
    id: "220476-15-3",
    name: "1-(Cyanomethyl)imidazole Hydrochloride",
    casNumber: "220476-15-3",
    category: "Pharmaceutical Intermediates",
    description:
      "1-(Cyanomethyl)imidazole Hydrochloride is the hydrochloride salt form of 1-(cyanomethyl)imidazole, used in similar synthetic applications. [30, 48]",
    purity: "≥98%",
    molecularFormula: "C5H6ClN3", // C5H5N3.HCl
    molecularWeight: "143.57 g/mol",
    appearance: "To be specified",
    applications: ["Organic synthesis", "Pharmaceutical intermediate"],
    image: defaultProductImage,
    isNew: true,
    tags: ["Intermediate", "Imidazole Derivative", "Nitrile", "Hydrochloride"],
  },
  {
    id: "100-10-7",
    name: "Para Dimethyl Amino Benzaldehyde",
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
    image: defaultProductImage,
    isNew: true,
    tags: ["Reagent", "Aldehyde", "Analytical Chemistry"],
  },
  {
    id: "144-62-7",
    name: "Oxalic Acid",
    casNumber: "144-62-7",
    category: "Specialty Chemicals",
    description:
      "Oxalic acid is an organic compound, a dicarboxylic acid. It is used as a cleaning agent, in dyeing, and as a chemical intermediate. [8, 14, 19, 21, 22]",
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
    image: defaultProductImage,
    isNew: true,
    tags: ["Dicarboxylic Acid", "Industrial Chemical", "Cleaning Agent"],
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
    image: defaultProductImage,
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
    image: defaultProductImage,
    isNew: true,
    tags: ["Intermediate", "Acyl Chloride", "Loperamide Intermediate"],
  },
  // Add more products as needed
];

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
