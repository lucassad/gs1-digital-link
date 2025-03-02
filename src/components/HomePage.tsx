import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HomePage: React.FC = () => {
  const currentDomain = window.location.origin;
  const navigate = useNavigate();

  const handleExampleClick = (example: string) => {
    // Extract the path from the full URL
    const path = example.replace(currentDomain, '');
    // Navigate to the path which will trigger the RedirectHandler
    navigate(path);
  };

  const examples = [
    `${currentDomain}/gtin/09506000134352`,
    `${currentDomain}/gtin/09506000134352/lot/ABC123`,
    `${currentDomain}/gtin/09506000134352?10=ABC123&17=230930`,
    `${currentDomain}/01/09506000134376/10/123ABC/21/12345678?17=241231&3103=000500`
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="px-4 sm:px-6 py-6 sm:py-8 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">GS1 Digital Link Parser</h1>
          <p className="text-base sm:text-lg text-gray-700 mb-6">
            Parse and analyze GS1 Digital Link URLs to extract Application Identifiers and their values.
          </p>
          
          <div className="flex justify-center sm:justify-start">
            <Link 
              to="/webUI" 
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Open Parser Tool <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
        
        <div className="px-4 sm:px-6 py-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6">
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
              <h3 className="text-md font-medium text-gray-700 mb-2">Parser Tool</h3>
              <p className="text-gray-600 mb-3 text-sm">
                Use the dedicated parser tool to:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm">
                <li>Analyze GS1 Digital Link URLs manually</li>
                <li>Paste inputs from clipboard</li>
                <li>View detailed information about each AI</li>
                <li>Copy individual values to clipboard</li>
                <li>Generate GS1 Element Strings from parsed data</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
              <h3 className="text-md font-medium text-gray-700 mb-2">Direct URL Access</h3>
              <p className="text-gray-600 mb-3 text-sm">
                You can also directly access GS1 Digital Links:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm">
                <li>Navigate directly to a GS1 Digital Link URL</li>
                <li>View the parsed data immediately</li>
                <li>See the corresponding GS1 Element String</li>
              </ul>
            </div>
          </div>
          
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Format Examples</h2>
          
          <div className="bg-gray-50 p-4 rounded-md mb-6 border border-gray-200 overflow-x-auto">
            <h3 className="text-md font-medium text-gray-700 mb-2">GS1 Digital Link URL Format:</h3>
            <button 
              onClick={() => handleExampleClick(examples[0])}
              className="block w-full bg-gray-100 p-3 rounded text-xs sm:text-sm font-mono overflow-x-auto text-left hover:bg-blue-100 transition-colors"
            >
              {examples[0]}
            </button>
            
            <h3 className="text-md font-medium text-gray-700 mt-4 mb-2">With Batch/Lot:</h3>
            <button 
              onClick={() => handleExampleClick(examples[1])}
              className="block w-full bg-gray-100 p-3 rounded text-xs sm:text-sm font-mono overflow-x-auto text-left hover:bg-blue-100 transition-colors"
            >
              {examples[1]}
            </button>
            
            <h3 className="text-md font-medium text-gray-700 mt-4 mb-2">With Query Parameters:</h3>
            <button 
              onClick={() => handleExampleClick(examples[2])}
              className="block w-full bg-gray-100 p-3 rounded text-xs sm:text-sm font-mono overflow-x-auto text-left hover:bg-blue-100 transition-colors"
            >
              {examples[2]}
            </button>
            
            <h3 className="text-md font-medium text-gray-700 mt-4 mb-2">Complex Example:</h3>
            <button 
              onClick={() => handleExampleClick(examples[3])}
              className="block w-full bg-gray-100 p-3 rounded text-xs sm:text-sm font-mono overflow-x-auto text-left hover:bg-blue-100 transition-colors"
            >
              {examples[3]}
            </button>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-between mt-8 pt-4 border-t border-gray-200">
            <div className="mb-4 sm:mb-0 text-center sm:text-left">
              <h3 className="text-lg font-medium text-gray-900">Ready to try it?</h3>
              <p className="text-gray-600">Use our parser tool to analyze GS1 Digital Link URLs</p>
            </div>
            <Link 
              to="/webUI" 
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Go to Parser <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;