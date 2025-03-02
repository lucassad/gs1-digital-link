// GS1 Application Identifiers (AI) definitions
interface GS1AI {
  ai: string;
  description: string;
  format: string;
  type: string;
}

// GS1 Application Identifiers (AI) lookup table
const GS1_AI_TABLE: Record<string, GS1AI> = {
  '00': { ai: '00', description: 'Serial Shipping Container Code (SSCC)', format: 'N18', type: 'identifier' },
  '01': { ai: '01', description: 'Global Trade Item Number (GTIN)', format: 'N14', type: 'identifier' },
  '02': { ai: '02', description: 'GTIN of contained trade items', format: 'N14', type: 'identifier' },
  '10': { ai: '10', description: 'Batch or lot number', format: 'X..20', type: 'data' },
  '11': { ai: '11', description: 'Production date (YYMMDD)', format: 'N6', type: 'date' },
  '12': { ai: '12', description: 'Due date (YYMMDD)', format: 'N6', type: 'date' },
  '13': { ai: '13', description: 'Packaging date (YYMMDD)', format: 'N6', type: 'date' },
  '15': { ai: '15', description: 'Best before date (YYMMDD)', format: 'N6', type: 'date' },
  '17': { ai: '17', description: 'Expiration date (YYMMDD)', format: 'N6', type: 'date' },
  '20': { ai: '20', description: 'Internal product variant', format: 'N2', type: 'data' },
  '21': { ai: '21', description: 'Serial number', format: 'X..20', type: 'identifier' },
  '22': { ai: '22', description: 'Consumer product variant', format: 'X..20', type: 'data' },
  '240': { ai: '240', description: 'Additional product identification', format: 'X..30', type: 'identifier' },
  '241': { ai: '241', description: 'Customer part number', format: 'X..30', type: 'identifier' },
  '242': { ai: '242', description: 'Made-to-Order variation number', format: 'N..6', type: 'data' },
  '243': { ai: '243', description: 'Packaging component number', format: 'X..20', type: 'identifier' },
  '250': { ai: '250', description: 'Secondary serial number', format: 'X..30', type: 'identifier' },
  '251': { ai: '251', description: 'Reference to source entity', format: 'X..30', type: 'reference' },
  '253': { ai: '253', description: 'Global Document Type Identifier (GDTI)', format: 'N13+X..17', type: 'identifier' },
  '254': { ai: '254', description: 'GLN extension component', format: 'X..20', type: 'data' },
  '255': { ai: '255', description: 'Global Coupon Number (GCN)', format: 'N13+N..12', type: 'identifier' },
  '30': { ai: '30', description: 'Variable count of items', format: 'N..8', type: 'data' },
  '310n': { ai: '310n', description: 'Net weight, kilograms', format: 'N6', type: 'measure' },
  '311n': { ai: '311n', description: 'Length or first dimension, meters', format: 'N6', type: 'measure' },
  '312n': { ai: '312n', description: 'Width, diameter, or second dimension, meters', format: 'N6', type: 'measure' },
  '313n': { ai: '313n', description: 'Depth, thickness, height, or third dimension, meters', format: 'N6', type: 'measure' },
  '314n': { ai: '314n', description: 'Area, square meters', format: 'N6', type: 'measure' },
  '315n': { ai: '315n', description: 'Net volume, liters', format: 'N6', type: 'measure' },
  '316n': { ai: '316n', description: 'Net volume, cubic meters', format: 'N6', type: 'measure' },
  '320n': { ai: '320n', description: 'Net weight, pounds', format: 'N6', type: 'measure' },
  '321n': { ai: '321n', description: 'Length or first dimension, inches', format: 'N6', type: 'measure' },
  '322n': { ai: '322n', description: 'Length or first dimension, feet', format: 'N6', type: 'measure' },
  '323n': { ai: '323n', description: 'Length or first dimension, yards', format: 'N6', type: 'measure' },
  '324n': { ai: '324n', description: 'Width, diameter, or second dimension, inches', format: 'N6', type: 'measure' },
  '325n': { ai: '325n', description: 'Width, diameter, or second dimension, feet', format: 'N6', type: 'measure' },
  '326n': { ai: '326n', description: 'Width, diameter, or second dimension, yards', format: 'N6', type: 'measure' },
  '327n': { ai: '327n', description: 'Depth, thickness, height, or third dimension, inches', format: 'N6', type: 'measure' },
  '328n': { ai: '328n', description: 'Depth, thickness, height, or third dimension, feet', format: 'N6', type: 'measure' },
  '329n': { ai: '329n', description: 'Depth, thickness, height, or third dimension, yards', format: 'N6', type: 'measure' },
  '330n': { ai: '330n', description: 'Gross weight, kilograms', format: 'N6', type: 'measure' },
  '331n': { ai: '331n', description: 'Length or first dimension, meters, log', format: 'N6', type: 'measure' },
  '332n': { ai: '332n', description: 'Width, diameter, or second dimension, meters, log', format: 'N6', type: 'measure' },
  '333n': { ai: '333n', description: 'Depth, thickness, height, or third dimension, meters, log', format: 'N6', type: 'measure' },
  '334n': { ai: '334n', description: 'Area, square meters, log', format: 'N6', type: 'measure' },
  '335n': { ai: '335n', description: 'Logistic volume, liters', format: 'N6', type: 'measure' },
  '336n': { ai: '336n', description: 'Logistic volume, cubic meters', format: 'N6', type: 'measure' },
  '337n': { ai: '337n', description: 'Kilograms per square meter', format: 'N6', type: 'measure' },
  '340n': { ai: '340n', description: 'Gross weight, pounds', format: 'N6', type: 'measure' },
  '341n': { ai: '341n', description: 'Length or first dimension, inches, log', format: 'N6', type: 'measure' },
  '342n': { ai: '342n', description: 'Length or first dimension, feet, log', format: 'N6', type: 'measure' },
  '343n': { ai: '343n', description: 'Length or first dimension, yards, log', format: 'N6', type: 'measure' },
  '344n': { ai: '344n', description: 'Width, diameter, or second dimension, inches, log', format: 'N6', type: 'measure' },
  '345n': { ai: '345n', description: 'Width, diameter, or second dimension, feet, log', format: 'N6', type: 'measure' },
  '346n': { ai: '346n', description: 'Width, diameter, or second dimension, yards, log', format: 'N6', type: 'measure' },
  '347n': { ai: '347n', description: 'Depth, thickness, height, or third dimension, inches, log', format: 'N6', type: 'measure' },
  '348n': { ai: '348n', description: 'Depth, thickness, height, or third dimension, feet, log', format: 'N6', type: 'measure' },
  '349n': { ai: '349n', description: 'Depth, thickness, height, or third dimension, yards, log', format: 'N6', type: 'measure' },
  '350n': { ai: '350n', description: 'Area, square inches', format: 'N6', type: 'measure' },
  '351n': { ai: '351n', description: 'Area, square feet', format: 'N6', type: 'measure' },
  '352n': { ai: '352n', description: 'Area, square yards', format: 'N6', type: 'measure' },
  '353n': { ai: '353n', description: 'Area, square inches, log', format: 'N6', type: 'measure' },
  '354n': { ai: '354n', description: 'Area, square feet, log', format: 'N6', type: 'measure' },
  '355n': { ai: '355n', description: 'Area, square yards, log', format: 'N6', type: 'measure' },
  '356n': { ai: '356n', description: 'Net weight, troy ounces', format: 'N6', type: 'measure' },
  '357n': { ai: '357n', description: 'Net weight (or volume), ounces', format: 'N6', type: 'measure' },
  '360n': { ai: '360n', description: 'Net volume, quarts', format: 'N6', type: 'measure' },
  '361n': { ai: '361n', description: 'Net volume, gallons U.S.', format: 'N6', type: 'measure' },
  '362n': { ai: '362n', description: 'Logistic volume, quarts', format: 'N6', type: 'measure' },
  '363n': { ai: '363n', description: 'Logistic volume, gallons U.S.', format: 'N6', type: 'measure' },
  '364n': { ai: '364n', description: 'Net volume, cubic inches', format: 'N6', type: 'measure' },
  '365n': { ai: '365n', description: 'Net volume, cubic feet', format: 'N6', type: 'measure' },
  '366n': { ai: '366n', description: 'Net volume, cubic yards', format: 'N6', type: 'measure' },
  '367n': { ai: '367n', description: 'Logistic volume, cubic inches', format: 'N6', type: 'measure' },
  '368n': { ai: '368n', description: 'Logistic volume, cubic feet', format: 'N6', type: 'measure' },
  '369n': { ai: '369n', description: 'Logistic volume, cubic yards', format: 'N6', type: 'measure' },
  '37': { ai: '37', description: 'Count of trade items', format: 'N..8', type: 'count' },
  '390n': { ai: '390n', description: 'Applicable amount payable or Coupon value, local currency', format: 'N..15', type: 'amount' },
  '391n': { ai: '391n', description: 'Applicable amount payable with ISO currency code', format: 'N3+N..15', type: 'amount' },
  '392n': { ai: '392n', description: 'Applicable amount payable, single monetary area', format: 'N..15', type: 'amount' },
  '393n': { ai: '393n', description: 'Applicable amount payable with ISO currency code', format: 'N3+N..15', type: 'amount' },
  '394n': { ai: '394n', description: 'Percentage discount of a coupon', format: 'N4', type: 'percent' },
  '400': { ai: '400', description: 'Customer\'s purchase order number', format: 'X..30', type: 'reference' },
  '401': { ai: '401', description: 'Global Identification Number for Consignment (GINC)', format: 'X..30', type: 'reference' },
  '402': { ai: '402', description: 'Global Shipment Identification Number (GSIN)', format: 'N17', type: 'identifier' },
  '403': { ai: '403', description: 'Routing code', format: 'X..30', type: 'routing' },
  '410': { ai: '410', description: 'Ship to - Deliver to Global Location Number (GLN)', format: 'N13', type: 'identifier' },
  '411': { ai: '411', description: 'Bill to - Invoice to Global Location Number (GLN)', format: 'N13', type: 'identifier' },
  '412': { ai: '412', description: 'Purchased from Global Location Number (GLN)', format: 'N13', type: 'identifier' },
  '413': { ai: '413', description: 'Ship for - Deliver for - Forward to Global Location Number (GLN)', format: 'N13', type: 'identifier' },
  '414': { ai: '414', description: 'Identification of a physical location - Global Location Number (GLN)', format: 'N13', type: 'identifier' },
  '415': { ai: '415', description: 'Global Location Number (GLN) of the invoicing party', format: 'N13', type: 'identifier' },
  '416': { ai: '416', description: 'Global Location Number (GLN) of the production or service location', format: 'N13', type: 'identifier' },
  '417': { ai: '417', description: 'Party Global Location Number (GLN)', format: 'N13', type: 'identifier' },
  '420': { ai: '420', description: 'Ship to - Deliver to postal code within a single postal authority', format: 'X..20', type: 'location' },
  '421': { ai: '421', description: 'Ship to - Deliver to postal code with ISO country code', format: 'N3+X..9', type: 'location' },
  '422': { ai: '422', description: 'Country of origin of a trade item', format: 'N3', type: 'country' },
  '423': { ai: '423', description: 'Country of initial processing', format: 'N3+N..12', type: 'country' },
  '424': { ai: '424', description: 'Country of processing', format: 'N3', type: 'country' },
  '425': { ai: '425', description: 'Country of disassembly', format: 'N3+N..12', type: 'country' },
  '426': { ai: '426', description: 'Country covering full process chain', format: 'N3', type: 'country' },
  '427': { ai: '427', description: 'Country subdivision of origin', format: 'X..3', type: 'origin' },
  '7001': { ai: '7001', description: 'NATO Stock Number (NSN)', format: 'N13', type: 'reference' },
  '7002': { ai: '7002', description: 'UN/ECE meat carcasses and cuts classification', format: 'X..30', type: 'classification' },
  '7003': { ai: '7003', description: 'Expiration date and time', format: 'N10', type: 'date' },
  '7004': { ai: '7004', description: 'Active potency', format: 'N..4', type: 'dimension' },
  '7005': { ai: '7005', description: 'Catch area', format: 'X..12', type: 'location' },
  '7006': { ai: '7006', description: 'First freeze date', format: 'N6', type: 'date' },
  '7007': { ai: '7007', description: 'Harvest date', format: 'N6..12', type: 'date' },
  '7008': { ai: '7008', description: 'Species for fishery purposes', format: 'X..3', type: 'species' },
  '7009': { ai: '7009', description: 'Fishing gear type', format: 'X..10', type: 'fishing' },
  '7010': { ai: '7010', description: 'Production method', format: 'X..2', type: 'method' },
  '7020': { ai: '7020', description: 'Refurbishment lot ID', format: 'X..20', type: 'refurb' },
  '7021': { ai: '7021', description: 'Functional status', format: 'X..20', type: 'status' },
  '7022': { ai: '7022', description: 'Revision status', format: 'X..20', type: 'status' },
  '7023': { ai: '7023', description: 'Global Individual Asset Identifier (GIAI) of an assembly', format: 'X..30', type: 'identifier' },
  '703s': { ai: '703s', description: 'Number of processor with ISO country code', format: 'N3+X..27', type: 'processor' },
  '710': { ai: '710', description: 'National Healthcare Reimbursement Number (NHRN) – Germany PZN', format: 'X..20', type: 'nhrn' },
  '711': { ai: '711', description: 'National Healthcare Reimbursement Number (NHRN) – France CIP', format: 'X..20', type: 'nhrn' },
  '712': { ai: '712', description: 'National Healthcare Reimbursement Number (NHRN) – Spain CN', format: 'X..20', type: 'nhrn' },
  '713': { ai: '713', description: 'National Healthcare Reimbursement Number (NHRN) – Brasil DRN', format: 'X..20', type: 'nhrn' },
  '714': { ai: '714', description: 'National Healthcare Reimbursement Number (NHRN) – Portugal AIM', format: 'X..20', type: 'nhrn' },
  '723s': { ai: '723s', description: 'Certification reference', format: 'X2+X..28', type: 'cert' },
  '8001': { ai: '8001', description: 'Roll products (width, length, core diameter, direction, splices)', format: 'N14', type: 'dimensions' },
  '8002': { ai: '8002', description: 'Cellular mobile telephone identifier', format: 'X..20', type: 'identifier' },
  '8003': { ai: '8003', description: 'Global Returnable Asset Identifier (GRAI)', format: 'N14+X..16', type: 'identifier' },
  '8004': { ai: '8004', description: 'Global Individual Asset Identifier (GIAI)', format: 'X..30', type: 'identifier' },
  '8005': { ai: '8005', description: 'Price per unit of measure', format: 'N6', type: 'price' },
  '8006': { ai: '8006', description: 'Identification of an individual trade item piece', format: 'N14+N2+N2', type: 'identifier' },
  '8007': { ai: '8007', description: 'International Bank Account Number (IBAN)', format: 'X..34', type: 'reference' },
  '8008': { ai: '8008', description: 'Date and time of production', format: 'N8+N..4', type: 'date' },
  '8009': { ai: '8009', description: 'Optically readable sensor indicator', format: 'X..50', type: 'sensor' },
  '8010': { ai: '8010', description: 'Component/Part Identifier (CPID)', format: 'X..30', type: 'identifier' },
  '8011': { ai: '8011', description: 'Component/Part Identifier serial number (CPID SERIAL)', format: 'N..12', type: 'identifier' },
  '8012': { ai: '8012', description: 'Software version', format: 'X..20', type: 'version' },
  '8013': { ai: '8013', description: 'Global Model Number (GMN)', format: 'X..30', type: 'identifier' },
  '8017': { ai: '8017', description: 'Global Service Relation Number to identify the relationship between an organisation offering services and the provider of services', format: 'N18', type: 'identifier' },
  '8018': { ai: '8018', description: 'Global Service Relation Number to identify the relationship between an organisation offering services and the recipient of services', format: 'N18', type: 'identifier' },
  '8019': { ai: '8019', description: 'Service Relation Instance Number (SRIN)', format: 'N..10', type: 'identifier' },
  '8020': { ai: '8020', description: 'Payment slip reference number', format: 'X..25', type: 'reference' },
  '8026': { ai: '8026', description: 'Identification of pieces of a trade item (ITIP) contained in a logistic unit', format: 'N14+N2+N2', type: 'identifier' },
  '8110': { ai: '8110', description: 'Coupon code identification for use in North America', format: 'X..70', type: 'coupon' },
  '8111': { ai: '8111', description: 'Loyalty points of a coupon', format: 'N4', type: 'points' },
  '8112': { ai: '8112', description: 'Paperless coupon code identification for use in North America', format: 'X..70', type: 'coupon' },
  '8200': { ai: '8200', description: 'Extended Packaging URL', format: 'X..70', type: 'url' },
  '90': { ai: '90', description: 'Information mutually agreed between trading partners', format: 'X..30', type: 'internal' },
  '91': { ai: '91', description: 'Company internal information', format: 'X..90', type: 'internal' },
  '92': { ai: '92', description: 'Company internal information', format: 'X..90', type: 'internal' },
  '93': { ai: '93', description: 'Company internal information', format: 'X..90', type: 'internal' },
  '94': { ai: '94', description: 'Company internal information', format: 'X..90', type: 'internal' },
  '95': { ai: '95', description: 'Company internal information', format: 'X..90', type: 'internal' },
  '96': { ai: '96', description: 'Company internal information', format: 'X..90', type: 'internal' },
  '97': { ai: '97', description: 'Company internal information', format: 'X..90', type: 'internal' },
  '98': { ai: '98', description: 'Company internal information', format: 'X..90', type: 'internal' },
  '99': { ai: '99', description: 'Company internal information', format: 'X..90', type: 'internal' }
};

// Function to find the AI definition
function findAIDefinition(ai: string): GS1AI | undefined {
  // Direct lookup
  if (GS1_AI_TABLE[ai]) {
    return GS1_AI_TABLE[ai];
  }
  
  // Handle variable length AIs with 'n' in them (like 310n, 320n, etc.)
  if (ai.length === 4 && ai.charAt(3) >= '0' && ai.charAt(3) <= '9') {
    const baseAI = ai.substring(0, 3) + 'n';
    if (GS1_AI_TABLE[baseAI]) {
      const aiDef = { ...GS1_AI_TABLE[baseAI] };
      aiDef.ai = ai; // Replace the 'n' with the actual digit
      return aiDef;
    }
  }
  
  // Handle 703s and 723s (where s is a digit)
  if (ai.length === 4 && (ai.startsWith('703') || ai.startsWith('723'))) {
    const baseAI = ai.substring(0, 3) + 's';
    if (GS1_AI_TABLE[baseAI]) {
      const aiDef = { ...GS1_AI_TABLE[baseAI] };
      aiDef.ai = ai; // Replace the 's' with the actual digit
      return aiDef;
    }
  }
  
  return undefined;
}

// Interface for parsed GS1 element
interface GS1Element {
  ai: string;
  value: string;
  description: string;
}

// Interface for parsed GS1 Digital Link
interface ParsedGS1DigitalLink {
  primaryKey?: GS1Element;
  pathElements: GS1Element[];
  queryElements: GS1Element[];
}

// Function to parse GS1 Digital Link
export function parseGS1DigitalLink(path: string, queryParams: URLSearchParams): ParsedGS1DigitalLink {
  const result: ParsedGS1DigitalLink = {
    primaryKey: undefined,
    pathElements: [],
    queryElements: []
  };
  
  // Parse path components
  const pathSegments = path.split('/').filter(segment => segment.length > 0);
  
  // Process path segments in pairs (AI/value)
  for (let i = 0; i < pathSegments.length; i += 2) {
    if (i + 1 < pathSegments.length) {
      const ai = pathSegments[i];
      const value = pathSegments[i + 1];
      
      const aiDefinition = findAIDefinition(ai);
      
      if (aiDefinition) {
        const element: GS1Element = {
          ai,
          value,
          description: aiDefinition.description
        };
        
        // The first AI/value pair is considered the primary key
        if (i === 0) {
          result.primaryKey = element;
        } else {
          result.pathElements.push(element);
        }
      } else {
        // Unknown AI, still include it but with a generic description
        const element: GS1Element = {
          ai,
          value,
          description: 'Unknown Application Identifier'
        };
        
        if (i === 0) {
          result.primaryKey = element;
        } else {
          result.pathElements.push(element);
        }
      }
    }
  }
  
  // Parse query parameters
  queryParams.forEach((value, key) => {
    const aiDefinition = findAIDefinition(key);
    
    if (aiDefinition) {
      result.queryElements.push({
        ai: key,
        value,
        description: aiDefinition.description
      });
    } else {
      // Unknown AI in query parameters
      result.queryElements.push({
        ai: key,
        value,
        description: 'Unknown Application Identifier'
      });
    }
  });
  
  return result;
}