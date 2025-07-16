import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import { RealDataError } from '../services/realDataService';

interface DataErrorDisplayProps {
  error: RealDataError;
  onRetry?: () => void;
  className?: string;
}

const DataErrorDisplay: React.FC<DataErrorDisplayProps> = ({ error, onRetry, className = '' }) => {
  const getErrorMessage = (error: RealDataError) => {
    switch (error.type) {
      case 'cors':
        return 'Cannot fetch real data due to browser security restrictions. In production, this would be handled by a backend server.';
      case 'network':
        return 'Network error occurred while fetching data. Please check your connection and try again.';
      case 'parsing':
        return 'Error parsing website data. The site may have unusual formatting.';
      case 'timeout':
        return 'Request timed out. The website may be slow to respond.';
      default:
        return error.message;
    }
  };

  return (
    <div className={`bg-red-50 border border-red-200 rounded-lg p-4 ${className}`}>
      <div className="flex items-start">
        <AlertTriangle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
        <div className="flex-1">
          <h3 className="text-sm font-medium text-red-800 mb-1">
            Unable to fetch real data
          </h3>
          <p className="text-sm text-red-700 mb-3">
            {getErrorMessage(error)}
          </p>
          <div className="text-xs text-red-600 mb-3">
            URL: {error.url}
          </div>
          {onRetry && (
            <button
              onClick={onRetry}
              className="inline-flex items-center px-3 py-1 bg-red-100 text-red-700 rounded text-sm hover:bg-red-200 transition-colors"
            >
              <RefreshCw className="w-3 h-3 mr-1" />
              Retry
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DataErrorDisplay;