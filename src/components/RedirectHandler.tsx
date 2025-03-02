import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import GS1DigitalLinkToolkit from '../utils/GS1DigitalLinkToolkit';
import { Clipboard, Check } from 'lucide-react';

interface ParsedData {
  [key: string]: string;
}

const RedirectHandler: React.FC = () => {
  const location = useLocation();
  const [parsedData, setParsedData] = useState<ParsedData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copiedValue, setCopiedValue] = useState<string | null>(null);
  
  useEffect(() => {
    try {
      const gs1Toolkit = new GS1DigitalLinkToolkit();
      const fullUrl = window.location.origin + location.pathname + location.search;
      const extractedData = gs1Toolkit.extractFromGS1digitalLink(fullUrl);
      setParsedData(extractedData);
    } catch (err) {
      setError(`Error parsing URL: ${err instanceof Error ? err.message : String(err)}`);
    }
  }, [location]);
  
  const getAITitle = (ai: string): string => {
    const gs1Toolkit = new GS1DigitalLinkToolkit();
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
  
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedValue(text);
    setTimeout(() => setCopiedValue(null), 2000);
  };
  
  if (error) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4">
        <div className="p-4 bg-red-100 border-l-4 border-red-500 text-red-700 rounded">
          {error}
        </div>
      </div>
    );
  }
  
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="px-4 sm:px-6 py-4 bg-gray-50 border-b border-gray-200">
          <h2 className="text-lg font-semibold">GS1 Digital Link Data</h2>
          <p className="text-sm text-gray-600 mt-1 break-all">
            Parsed from: <code className="bg-gray-100 px-2 py-1 rounded text-xs">{window.location.href}</code>
          </p>
          {parsedData && Object.keys(parsedData).length > 0 && (
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
        
        {parsedData && Object.keys(parsedData).length > 0 ? (
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
        ) : (
          <div className="p-6 text-center text-gray-500">
            No GS1 data found in the URL
          </div>
        )}
      </div>
    </div>
  );
};

export default RedirectHandler;