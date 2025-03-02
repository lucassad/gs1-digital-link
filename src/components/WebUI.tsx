import React, { useState } from 'react';
import { parseGS1DigitalLink } from '../utils/gs1Parser';
import { Clipboard, ArrowRight, ExternalLink, AlertCircle } from 'lucide-react';

const WebUI: React.FC = () => {
  const [url, setUrl] = useState('');
  const [parsedData, setParsedData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleParse = () => {
    try {
      setError(null);
      
      // Extract the path and query parameters from the URL
      const urlObj = new URL(url);
      const path = urlObj.pathname.replace(/^\/+/, ''); // Remove leading slashes
      const queryParams = new URLSearchParams(urlObj.search);
      
      // Parse the GS1 Digital Link
      const result = parseGS1DigitalLink(path, queryParams);
      setParsedData(result);
    } catch (err) {
      setError('Invalid URL or GS1 Digital Link format');
      setParsedData(null);
    }
  };

  const handlePasteFromClipboard = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setUrl(text);
    } catch (err) {
      setError('Unable to access clipboard. Please paste manually.');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleParse();
    }
  };

  const examples = [
    'https://gs1-digital-link.vercel.app/01/09506000134376/10/ABC/21/123456?17=221231',
    'https://gs1-digital-link.vercel.app/01/12345678901234/21/SERIAL123?10=BATCH456&17=230101',
    'https://gs1-digital-link.vercel.app/01/00614141123452/21/SERIAL1?10=LOT123&17=220930'
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">GS1 Digital Link Web UI</h2>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-lg font-semibold mb-4">Enter GS1 Digital Link URL</h3>
        
        <div className="mb-4 relative">
          <div className="flex">
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Enter a GS1 Digital Link URL"
              className="w-full p-3 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handlePasteFromClipboard}
              className="bg-gray-100 hover:bg-gray-200 p-3 border border-l-0 border-gray-300 transition-colors"
              title="Paste from clipboard"
            >
              <Clipboard size={20} />
            </button>
            <button
              onClick={handleParse}
              className="bg-blue-600 text-white py-2 px-6 rounded-r hover:bg-blue-700 transition-colors flex items-center"
            >
              Parse <ArrowRight size={16} className="ml-1" />
            </button>
          </div>
        </div>
        
        {error && (
          <div className="mt-4 p-3 bg-red-100 text-red-700 rounded flex items-center">
            <AlertCircle size={20} className="mr-2" />
            {error}
          </div>
        )}

        <div className="mt-6">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Example URLs:</h4>
          <div className="space-y-2">
            {examples.map((example, index) => (
              <div key={index} className="flex items-center">
                <button
                  onClick={() => setUrl(example)}
                  className="text-blue-600 hover:text-blue-800 text-sm truncate text-left"
                >
                  {example}
                </button>
                <button
                  onClick={() => setUrl(example)}
                  className="ml-2 text-gray-500 hover:text-gray-700"
                  title="Use this example"
                >
                  <ExternalLink size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {parsedData && (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Parsed Elements</h3>
          
          {parsedData.primaryKey && (
            <div className="mb-6">
              <h4 className="font-medium text-blue-700 mb-2">Primary Key</h4>
              <div className="bg-blue-50 p-4 rounded">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="font-semibold">AI</div>
                  <div className="md:col-span-2">{parsedData.primaryKey.ai}</div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                  <div className="font-semibold">Value</div>
                  <div className="md:col-span-2">{parsedData.primaryKey.value}</div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                  <div className="font-semibold">Description</div>
                  <div className="md:col-span-2">{parsedData.primaryKey.description}</div>
                </div>
              </div>
            </div>
          )}
          
          {parsedData.pathElements && parsedData.pathElements.length > 0 && (
            <div className="mb-6">
              <h4 className="font-medium text-green-700 mb-2">Path Elements</h4>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="py-2 px-4 text-left">AI</th>
                      <th className="py-2 px-4 text-left">Value</th>
                      <th className="py-2 px-4 text-left">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {parsedData.pathElements.map((element: any, index: number) => (
                      <tr key={index} className="border-t">
                        <td className="py-2 px-4">{element.ai}</td>
                        <td className="py-2 px-4">{element.value}</td>
                        <td className="py-2 px-4">{element.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          
          {parsedData.queryElements && parsedData.queryElements.length > 0 && (
            <div>
              <h4 className="font-medium text-purple-700 mb-2">Query Parameters</h4>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="py-2 px-4 text-left">AI</th>
                      <th className="py-2 px-4 text-left">Value</th>
                      <th className="py-2 px-4 text-left">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {parsedData.queryElements.map((element: any, index: number) => (
                      <tr key={index} className="border-t">
                        <td className="py-2 px-4">{element.ai}</td>
                        <td className="py-2 px-4">{element.value}</td>
                        <td className="py-2 px-4">{element.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default WebUI;