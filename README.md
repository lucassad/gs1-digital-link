# GS1 Digital Link Parser

A web application for parsing and analyzing GS1 Digital Link URLs to extract Application Identifiers (AIs) and their values, with the ability to generate corresponding GS1 Element Strings.

## Overview

The GS1 Digital Link Parser is a tool that allows users to:

- Parse GS1 Digital Link URLs to extract Application Identifiers and their values
- Generate corresponding GS1 Element Strings from parsed data
- View detailed information about each Application Identifier
- Copy individual values or the complete Element String to clipboard
- Access GS1 Digital Links directly through URL paths

## Features

### Parser Tool

The main parser tool provides a user-friendly interface to:

- Enter GS1 Digital Link URLs for parsing
- View extracted Application Identifiers with descriptions
- See the corresponding GS1 Element String representation
- Copy individual values or the complete Element String
- Try example URLs with a single click

### Direct URL Access

The application also supports direct access to GS1 Digital Links through URL paths:

- `/gtin/{value}` - For Global Trade Item Numbers
- `/{shortcode}/{value}` - For other GS1 identifiers using shortcodes
- `/{ai}/{value}` - For direct AI access
- Query parameters for additional AIs (e.g., `?10=ABC123&17=230930`)

## Technology Stack

- **Frontend**: React, TypeScript, Tailwind CSS
- **Routing**: React Router
- **Icons**: Lucide React
- **Build Tool**: Vite
- **GS1 Parsing**: GS1 Digital Link Toolkit

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/gs1-digital-link-parser.git
   cd gs1-digital-link-parser
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Usage Examples

### Parsing a GS1 Digital Link URL

1. Navigate to the Parser Tool page
2. Enter a GS1 Digital Link URL, such as:
   - `/gtin/09506000134352`
   - `/gtin/09506000134352/lot/ABC123`
   - `/gtin/09506000134352?10=ABC123&17=230930`
3. Click "Parse" to see the extracted data and corresponding GS1 Element String

### Direct URL Access

You can directly access GS1 Digital Links by navigating to URLs like:
- `https://yourdomain.com/gtin/09506000134352`
- `https://yourdomain.com/gtin/09506000134352/lot/ABC123`

The application will automatically parse the URL and display the extracted data.

## Building for Production

To build the application for production:

```bash
npm run build
```

The built files will be in the `dist` directory and can be deployed to any static hosting service.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built with the [GS1 Digital Link Toolkit](https://github.com/gs1/GS1DigitalLinkToolkit.js/)
- GS1 standards documentation available at [GS1.org](https://www.gs1.org/standards/gs1-digital-link)