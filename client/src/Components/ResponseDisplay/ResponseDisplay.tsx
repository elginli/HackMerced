import React from 'react';

interface ResponseDisplayProps {
  response: string | null;
}

const ResponseDisplay: React.FC<ResponseDisplayProps> = ({ response }) => {
  return (
    <div className="response-container">
      {response ? (
        <p><strong>Answer:</strong> {response}</p> 
      ) : (
        <p>Waiting for an answer...</p>
      )}
    </div>
  );
};

export default ResponseDisplay;
