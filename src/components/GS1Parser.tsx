import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import GS1DigitalLinkToolkit from '../utils/GS1DigitalLinkToolkit';
import { Clipboard, ClipboardPaste, Check, ArrowRight } from 'lucide-react';

interface ParsedData {
  [key: string]: string;
}

const GS1Parser: React.FC = () => {
  const location = useLocation();
  const [url, setUrl] = useState('');
  const [parsedData, setParsedData] = useState<ParsedData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copiedValue, setCopiedValue] = useState<string | null>(null);
  const currentDomain = window.location.origin;
  
  const gs1Toolkit = new GS1DigitalLinkToolkit();
  
  // Check for URL parameter on component mount
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const urlParam = params.get('url');
    if (urlParam) {
      setUrl(urlParam);
      // Auto-parse the URL if it's provided in the query parameter
      setTimeout(() => parseUrl(urlParam), 100);
    }
  }, [location]);
  
  const parseUrl = (urlToParse = url) => {
    try {
      setError(null);
      if (!urlToParse.trim()) {
        setError('Please enter a GS1 Digital Link URL');
        setParsedData(null);
        return;
      }
      
      // Only parse as GS1 Digital Link URL
      const extractedData = gs1Toolkit.extractFromGS1digitalLink(urlToParse);
      setParsedData(extractedData);
    } catch (err) {
      setError(`Error parsing input: ${err instanceof Error ? err.message : String(err)}`);
      setParsedData(null);
    }
  };
  
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedValue(text);
    setTimeout(() => setCopiedValue(null), 2000);
  };
  
  const pasteFromClipboard = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setUrl(text);
      // Auto-parse after pasting
      setTimeout(() => parseUrl(text), 100);
    } catch (err) {
      setError('Failed to read from clipboard. Please check browser permissions.');
    }
  };

  const useExampleUrl = (exampleUrl: string) => {
    setUrl(exampleUrl);
    parseUrl(exampleUrl);
  };
  
  const getAITitle = (ai: string): string => {
    const aiTable = gs1Toolkit.aitable;
    const aiInfo = aiTable.find((item: any) => item.ai === ai);
    return aiInfo ? aiInfo.title : `Unknown AI (${ai})`;
  };
  
  // Generate GS1 Element String from parsed data
  const generateGS1ElementString = (data: ParsedData): string => {
    if (!data || Object.keys(data).length === 0) return '';
    
    return Object.entries(data)
      .map(([ai, value]) => `(${ai})${value}`)
      .join('');
  };
  
  // Example inputs - only Digital Link URLs
  const examples = [
    {
      title: "GS1 Digital Link URL Examples",
      items: [
        `${currentDomain}/gtin/09506000134352`,
        `${currentDomain}/gtin/09506000134352/lot/ABC123`,
        `${currentDomain}/gtin/09506000134352?10=ABC123&17=230930`,
        `${currentDomain}/01/09506000134376/10/123ABC/21/12345678?17=241231&3103=000500`
      ]
    }
  ];
  
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">GS1 Digital Link Parser Tool</h2>
        <label htmlFor="gs1-url" className="block text-sm font-medium mb-2">
          Enter GS1 Digital Link URL
        </label>
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="flex flex-1">
            <input
              id="gs1-url"
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="e.g. /gtin/09506000134352"
              className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
            />
            <button
              onClick={pasteFromClipboard}
              className="px-3 py-2 bg-gray-200 text-gray-700 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              title="Paste from clipboard"
            >
              <ClipboardPaste size={20} />
            </button>
          </div>
          <button
            onClick={() => parseUrl()}
            className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:w-auto w-full flex items-center justify-center"
          >
            <ArrowRight size={20} className="mr-2" /> Parse
          </button>
        </div>
      </div>
      
      <div className="mb-6 bg-blue-50 border-l-4 border-blue-500 text-blue-700 p-4 overflow-x-auto">
        <h3 className="font-medium mb-2">Click an example to try it:</h3>
        <ul className="list-disc pl-5 space-y-2">
          {examples[0].items.map((example, index) => (
            <li key={index}>
              <button 
                onClick={() => useExampleUrl(example)}
                className="bg-blue-100 px-2 py-1 rounded font-mono text-xs sm:text-sm hover:bg-blue-200 transition-colors cursor-pointer text-left w-full overflow-x-auto"
              >
                {example}
              </button>
            </li>
          ))}
        </ul>
      </div>
      
      {error && (
        <div className="mb-6 p-4 bg-red-100 border-l-4 border-red-500 text-red-700">
          {error}
        </div>
      )}
      
      {parsedData && Object.keys(parsedData).length > 0 && (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="px-4 sm:px-6 py-4 bg-gray-50 border-b border-gray-200">
            <h2 className="text-lg font-semibold">Parsed GS1 Data</h2>
            {parsedData && (
              <div className="mt-2 bg-gray-100 p-3 rounded overflow-x-auto">
                <p className="font-medium text-sm text-gray-700 mb-1">GS1 Element String:</p>
                <code className="font-mono text-xs sm:text-sm break-all">
                  {generateGS1ElementString(parsedData)}
                </code>
                <button 
                  onClick={() => copyToClipboard(generateGS1ElementString(parsedData))}
                  className="ml-2 text-gray-500 hover:text-blue-600 inline-flex items-center"
                  title="Copy element string"
                >
                  {copiedValue === generateGS1ElementString(parsedData) ? 
                    <Check size={16} className="text-green-500" /> : 
                    <Clipboard size={16} />
                  }
                </button>
              </div>
            )}
          </div>
          <div className="p-4 sm:p-6 overflow-x-auto">
            <table className="w-full min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-3 sm:px-4 py-2 text-left text-xs sm:text-sm font-medium text-gray-700">AI</th>
                  <th className="px-3 sm:px-4 py-2 text-left text-xs sm:text-sm font-medium text-gray-700">Description</th>
                  <th className="px-3 sm:px-4 py-2 text-left text-xs sm:text-sm font-medium text-gray-700">Value</th>
                  <th className="px-3 sm:px-4 py-2 text-center text-xs sm:text-sm font-medium text-gray-700">Copy</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {Object.entries(parsedData).map(([ai, value]) => (
                  <tr key={ai} className="hover:bg-gray-50">
                    <td className="px-3 sm:px-4 py-3 font-mono text-xs sm:text-sm">{ai}</td>
                    <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm">{getAITitle(ai)}</td>
                    <td className="px-3 sm:px-4 py-3 font-mono text-xs sm:text-sm break-all">{value}</td>
                    <td className="px-3 sm:px-4 py-3 text-center">
                      <button 
                        onClick={() => copyToClipboard(value)}
                        className="text-gray-500 hover:text-blue-600"
                        title="Copy value"
                      >
                        {copiedValue === value ? <Check size={18} className="text-green-500 mx-auto" /> : <Clipboard size={18} className="mx-auto" />}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default GS1Parser;