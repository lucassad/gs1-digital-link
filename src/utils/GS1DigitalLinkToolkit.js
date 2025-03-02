// GS1DigitalLinkToolkit.js
class GS1DigitalLinkToolkit {
  constructor() {
    this.aitable = [
      { ai: '00', title: 'SSCC (Serial Shipping Container Code)', format: 'N18' },
      { ai: '01', title: 'GTIN (Global Trade Item Number)', format: 'N14' },
      { ai: '02', title: 'CONTENT (GTIN of contained trade items)', format: 'N14' },
      { ai: '10', title: 'BATCH/LOT', format: 'X..20' },
      { ai: '11', title: 'PROD DATE (Production date)', format: 'N6' },
      { ai: '12', title: 'DUE DATE', format: 'N6' },
      { ai: '13', title: 'PACK DATE', format: 'N6' },
      { ai: '15', title: 'BEST BEFORE or BEST BY', format: 'N6' },
      { ai: '16', title: 'SELL BY', format: 'N6' },
      { ai: '17', title: 'USE BY OR EXPIRY', format: 'N6' },
      { ai: '20', title: 'VARIANT', format: 'N2' },
      { ai: '21', title: 'SERIAL', format: 'X..20' },
      { ai: '22', title: 'CPV (Consumer product variant)', format: 'X..20' },
      { ai: '235', title: 'TPX (Third Party Controlled, Serialised Extension of GTIN)', format: 'X..28' },
      { ai: '240', title: 'ADDITIONAL ID', format: 'X..30' },
      { ai: '241', title: 'CUST. PART NO.', format: 'X..30' },
      { ai: '242', title: 'MTO VARIANT', format: 'N..6' },
      { ai: '243', title: 'PCN', format: 'X..20' },
      { ai: '250', title: 'SECONDARY SERIAL', format: 'X..30' },
      { ai: '251', title: 'REF. TO SOURCE', format: 'X..30' },
      { ai: '253', title: 'GDTI (Global Document Type Identifier)', format: 'N13+X..17' },
      { ai: '254', title: 'GLN EXTENSION COMPONENT', format: 'X..20' },
      { ai: '255', title: 'GCN', format: 'N13+N..12' },
      { ai: '30', title: 'VAR. COUNT', format: 'N..8' },
      { ai: '310n', title: 'NET WEIGHT (kg)', format: 'N6' },
      { ai: '311n', title: 'LENGTH (m)', format: 'N6' },
      { ai: '312n', title: 'WIDTH (m)', format: 'N6' },
      { ai: '313n', title: 'HEIGHT (m)', format: 'N6' },
      { ai: '314n', title: 'AREA (m²)', format: 'N6' },
      { ai: '315n', title: 'NET VOLUME (l)', format: 'N6' },
      { ai: '316n', title: 'NET VOLUME (m³)', format: 'N6' },
      { ai: '320n', title: 'NET WEIGHT (lb)', format: 'N6' },
      { ai: '321n', title: 'LENGTH (i)', format: 'N6' },
      { ai: '322n', title: 'LENGTH (f)', format: 'N6' },
      { ai: '323n', title: 'LENGTH (y)', format: 'N6' },
      { ai: '324n', title: 'WIDTH (i)', format: 'N6' },
      { ai: '325n', title: 'WIDTH (f)', format: 'N6' },
      { ai: '326n', title: 'WIDTH (y)', format: 'N6' },
      { ai: '327n', title: 'HEIGHT (i)', format: 'N6' },
      { ai: '328n', title: 'HEIGHT (f)', format: 'N6' },
      { ai: '329n', title: 'HEIGHT (y)', format: 'N6' },
      { ai: '330n', title: 'GROSS WEIGHT (kg)', format: 'N6' },
      { ai: '331n', title: 'LENGTH (m), log', format: 'N6' },
      { ai: '332n', title: 'WIDTH (m), log', format: 'N6' },
      { ai: '333n', title: 'HEIGHT (m), log', format: 'N6' },
      { ai: '334n', title: 'AREA (m²), log', format: 'N6' },
      { ai: '335n', title: 'VOLUME (l), log', format: 'N6' },
      { ai: '336n', title: 'VOLUME (m³), log', format: 'N6' },
      { ai: '337n', title: 'KG PER m²', format: 'N6' },
      { ai: '340n', title: 'GROSS WEIGHT (lb)', format: 'N6' },
      { ai: '341n', title: 'LENGTH (i), log', format: 'N6' },
      { ai: '342n', title: 'LENGTH (f), log', format: 'N6' },
      { ai: '343n', title: 'LENGTH (y), log', format: 'N6' },
      { ai: '344n', title: 'WIDTH (i), log', format: 'N6' },
      { ai: '345n', title: 'WIDTH (f), log', format: 'N6' },
      { ai: '346n', title: 'WIDTH (y), log', format: 'N6' },
      { ai: '347n', title: 'HEIGHT (i), log', format: 'N6' },
      { ai: '348n', title: 'HEIGHT (f), log', format: 'N6' },
      { ai: '349n', title: 'HEIGHT (y), log', format: 'N6' },
      { ai: '350n', title: 'AREA (i²)', format: 'N6' },
      { ai: '351n', title: 'AREA (f²)', format: 'N6' },
      { ai: '352n', title: 'AREA (y²)', format: 'N6' },
      { ai: '353n', title: 'AREA (i²), log', format: 'N6' },
      { ai: '354n', title: 'AREA (f²), log', format: 'N6' },
      { ai: '355n', title: 'AREA (y²), log', format: 'N6' },
      { ai: '356n', title: 'NET WEIGHT (t)', format: 'N6' },
      { ai: '357n', title: 'NET VOLUME (oz)', format: 'N6' },
      { ai: '360n', title: 'NET VOLUME (q)', format: 'N6' },
      { ai: '361n', title: 'NET VOLUME (g)', format: 'N6' },
      { ai: '362n', title: 'VOLUME (q), log', format: 'N6' },
      { ai: '363n', title: 'VOLUME (g), log', format: 'N6' },
      { ai: '364n', title: 'VOLUME (i³)', format: 'N6' },
      { ai: '365n', title: 'VOLUME (f³)', format: 'N6' },
      { ai: '366n', title: 'VOLUME (y³)', format: 'N6' },
      { ai: '367n', title: 'VOLUME (i³), log', format: 'N6' },
      { ai: '368n', title: 'VOLUME (f³), log', format: 'N6' },
      { ai: '369n', title: 'VOLUME (y³), log', format: 'N6' },
      { ai: '37', title: 'COUNT', format: 'N..8' },
      { ai: '390n', title: 'AMOUNT', format: 'N..15' },
      { ai: '391n', title: 'AMOUNT', format: 'N3+N..15' },
      { ai: '392n', title: 'PRICE', format: 'N..15' },
      { ai: '393n', title: 'PRICE', format: 'N3+N..15' },
      { ai: '394n', title: 'PRCNT OFF', format: 'N4' },
      { ai: '400', title: 'ORDER NUMBER', format: 'X..30' },
      { ai: '401', title: 'GINC', format: 'X..30' },
      { ai: '402', title: 'GSIN', format: 'N17' },
      { ai: '403', title: 'ROUTE', format: 'X..30' },
      { ai: '410', title: 'SHIP TO LOC', format: 'N13' },
      { ai: '411', title: 'BILL TO', format: 'N13' },
      { ai: '412', title: 'PURCHASE FROM', format: 'N13' },
      { ai: '413', title: 'SHIP FOR LOC', format: 'N13' },
      { ai: '414', title: 'LOC No.', format: 'N13' },
      { ai: '415', title: 'PAY TO', format: 'N13' },
      { ai: '416', title: 'PROD/SERV LOC', format: 'N13' },
      { ai: '417', title: 'PARTY', format: 'N13' },
      { ai: '420', title: 'SHIP TO POST', format: 'X..20' },
      { ai: '421', title: 'SHIP TO POST', format: 'N3+X..9' },
      { ai: '422', title: 'ORIGIN', format: 'N3' },
      { ai: '423', title: 'COUNTRY - INITIAL PROCESS', format: 'N3+N..12' },
      { ai: '424', title: 'COUNTRY - PROCESS', format: 'N3' },
      { ai: '425', title: 'COUNTRY - DISASSEMBLY', format: 'N3+N..12' },
      { ai: '426', title: 'COUNTRY - FULL PROCESS', format: 'N3' },
      { ai: '427', title: 'ORIGIN SUBDIVISION', format: 'X..3' },
      { ai: '4300', title: 'SHIP TO COMP', format: 'X..35' },
      { ai: '4301', title: 'SHIP TO NAME', format: 'X..35' },
      { ai: '4302', title: 'SHIP TO ADD1', format: 'X..70' },
      { ai: '4303', title: 'SHIP TO ADD2', format: 'X..70' },
      { ai: '4304', title: 'SHIP TO SUB', format: 'X..70' },
      { ai: '4305', title: 'SHIP TO LOC', format: 'X..70' },
      { ai: '4306', title: 'SHIP TO REG', format: 'X..70' },
      { ai: '4307', title: 'SHIP TO COUNTRY', format: 'X2' },
      { ai: '4308', title: 'SHIP TO PHONE', format: 'X..30' },
      { ai: '4310', title: 'RTN TO COMP', format: 'X..35' },
      { ai: '4311', title: 'RTN TO NAME', format: 'X..35' },
      { ai: '4312', title: 'RTN TO ADD1', format: 'X..70' },
      { ai: '4313', title: 'RTN TO ADD2', format: 'X..70' },
      { ai: '4314', title: 'RTN TO SUB', format: 'X..70' },
      { ai: '4315', title: 'RTN TO LOC', format: 'X..70' },
      { ai: '4316', title: 'RTN TO REG', format: 'X..70' },
      { ai: '4317', title: 'RTN TO COUNTRY', format: 'X2' },
      { ai: '4318', title: 'RTN TO POST', format: 'X..20' },
      { ai: '4319', title: 'RTN TO PHONE', format: 'X..30' },
      { ai: '4320', title: 'SRV DESCRIPTION', format: 'X..35' },
      { ai: '4321', title: 'DANGEROUS GOODS', format: 'N1' },
      { ai: '4322', title: 'AUTH LEAVE', format: 'N1' },
      { ai: '4323', title: 'SIG REQUIRED', format: 'N1' },
      { ai: '4324', title: 'NBEF DEL DATE', format: 'N6' },
      { ai: '4325', title: 'NAFT DEL DATE', format: 'N6' },
      { ai: '4326', title: 'REL DATE', format: 'N6' },
      { ai: '7001', title: 'NSN', format: 'N13' },
      { ai: '7002', title: 'MEAT CUT', format: 'X..30' },
      { ai: '7003', title: 'EXPIRY TIME', format: 'N10' },
      { ai: '7004', title: 'ACTIVE POTENCY', format: 'N..4' },
      { ai: '7005', title: 'CATCH AREA', format: 'X..12' },
      { ai: '7006', title: 'FIRST FREEZE DATE', format: 'N6' },
      { ai: '7007', title: 'HARVEST DATE', format: 'N6..12' },
      { ai: '7008', title: 'AQUATIC SPECIES', format: 'X..3' },
      { ai: '7009', title: 'FISHING GEAR TYPE', format: 'X..10' },
      { ai: '7010', title: 'PROD METHOD', format: 'X..2' },
      { ai: '7020', title: 'REFURB LOT', format: 'X..20' },
      { ai: '7021', title: 'FUNC STAT', format: 'X..20' },
      { ai: '7022', title: 'REV STAT', format: 'X..20' },
      { ai: '7023', title: 'GIAI - ASSEMBLY', format: 'X..30' },
      { ai: '703s', title: 'PROCESSOR # s', format: 'N3+X..27' },
      { ai: '710', title: 'NHRN PZN', format: 'X..20' },
      { ai: '711', title: 'NHRN CIP', format: 'X..20' },
      { ai: '712', title: 'NHRN CN', format: 'X..20' },
      { ai: '713', title: 'NHRN DRN', format: 'X..20' },
      { ai: '714', title: 'NHRN AIM', format: 'X..20' },
      { ai: '723s', title: 'CERT # s', format: 'X2+X..28' },
      { ai: '7240', title: 'PROTOCOL', format: 'X..20' },
      { ai: '8001', title: 'DIMENSIONS', format: 'N14' },
      { ai: '8002', title: 'CMT No.', format: 'X..20' },
      { ai: '8003', title: 'GRAI', format: 'N14+X..16' },
      { ai: '8004', title: 'GIAI', format: 'X..30' },
      { ai: '8005', title: 'PRICE PER UNIT', format: 'N6' },
      { ai: '8006', title: 'ITIP or GCTIN', format: 'N14+N2+N2' },
      { ai: '8007', title: 'IBAN', format: 'X..34' },
      { ai: '8008', title: 'PROD TIME', format: 'N8+N..4' },
      { ai: '8009', title: 'OPTSEN', format: 'X..50' },
      { ai: '8010', title: 'CPID', format: 'Y..30' },
      { ai: '8011', title: 'CPID SERIAL', format: 'N..12' },
      { ai: '8012', title: 'VERSION', format: 'X..20' },
      { ai: '8013', title: 'GMN or BUDI-DI', format: 'X..30' },
      { ai: '8017', title: 'GSRN - PROVIDER', format: 'N18' },
      { ai: '8018', title: 'GSRN - RECIPIENT', format: 'N18' },
      { ai: '8019', title: 'SRIN', format: 'N..10' },
      { ai: '8020', title: 'REF No.', format: 'X..25' },
      { ai: '8026', title: 'ITIP CONTENT', format: 'N14+N2+N2' },
      { ai: '8110', title: 'Coupon code', format: 'X..70' },
      { ai: '8111', title: 'POINTS', format: 'N4' },
      { ai: '8112', title: 'POSITIVE OFFER FILE COUPON CODE', format: 'X..70' },
      { ai: '8200', title: 'PRODUCT URL', format: 'X..70' },
      { ai: '90', title: 'INTERNAL', format: 'X..30' },
      { ai: '91', title: 'INTERNAL', format: 'X..90' },
      { ai: '92', title: 'INTERNAL', format: 'X..90' },
      { ai: '93', title: 'INTERNAL', format: 'X..90' },
      { ai: '94', title: 'INTERNAL', format: 'X..90' },
      { ai: '95', title: 'INTERNAL', format: 'X..90' },
      { ai: '96', title: 'INTERNAL', format: 'X..90' },
      { ai: '97', title: 'INTERNAL', format: 'X..90' },
      { ai: '98', title: 'INTERNAL', format: 'X..90' },
      { ai: '99', title: 'INTERNAL', format: 'X..90' }
    ];
  }

  extractFromGS1digitalLink(url) {
    try {
      // Basic URL validation
      if (!url || typeof url !== 'string') {
        throw new Error('Invalid URL provided');
      }

      // Parse the URL
      const parsedUrl = new URL(url);
      const pathSegments = parsedUrl.pathname.split('/').filter(segment => segment);
      
      // Extract query parameters (for key-value pairs in the query string)
      const queryParams = {};
      for (const [key, value] of parsedUrl.searchParams.entries()) {
        queryParams[key] = value;
      }
      
      // Process path segments to extract GS1 elements
      const extractedData = {};
      
      // Handle common GS1 Digital Link patterns
      if (pathSegments.length >= 2) {
        // Check for GTIN pattern: /gtin/{value}
        if (pathSegments[0].toLowerCase() === 'gtin') {
          extractedData['01'] = pathSegments[1];
        }
        
        // Process other path segments as key-value pairs
        for (let i = 0; i < pathSegments.length; i += 2) {
          if (i + 1 < pathSegments.length) {
            const key = this.mapShortcodeToAI(pathSegments[i]);
            if (key) {
              extractedData[key] = decodeURIComponent(pathSegments[i + 1]);
            }
          }
        }
      }
      
      // Add query parameters to extracted data
      for (const [key, value] of Object.entries(queryParams)) {
        // Check if the key is a valid AI
        if (this.isValidAI(key)) {
          extractedData[key] = decodeURIComponent(value);
        }
      }
      
      return extractedData;
    } catch (error) {
      throw new Error(`Failed to parse GS1 Digital Link: ${error.message}`);
    }
  }
  
  mapShortcodeToAI(shortcode) {
    // Map common shortcodes to AIs
    const shortcodeMap = {
      'gtin': '01',
      'lot': '10',
      'ser': '21',
      'exp': '17',
      'batch': '10',
      'serial': '21',
      'expiry': '17',
      'productionDate': '11',
      'variant': '20',
      'weight': '3100',
      'bestBefore': '15'
    };
    
    // Return the AI if the shortcode is in the map
    if (shortcodeMap[shortcode.toLowerCase()]) {
      return shortcodeMap[shortcode.toLowerCase()];
    }
    
    // Check if the shortcode is already an AI
    if (this.isValidAI(shortcode)) {
      return shortcode;
    }
    
    return null;
  }
  
  isValidAI(ai) {
    // Check if the AI exists in the AI table
    return this.aitable.some(item => item.ai === ai) || 
           // Handle variable-length AIs with 'n' in them (like 310n)
           this.aitable.some(item => {
             if (item.ai.includes('n') && ai.length === item.ai.length) {
               const pattern = item.ai.replace('n', '\\d');
               return new RegExp(`^${pattern}$`).test(ai);
             }
             return false;
           });
  }
}

export default GS1DigitalLinkToolkit;