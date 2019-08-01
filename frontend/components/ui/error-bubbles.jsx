import React from 'react';

const parseErrorMessages = (msg, fields) => {
  const trimmed = msg.replace('Validation failed: ', '');
  const errors = trimmed.split(', ');
  const assignedErrors = {};
  for (const error of errors) {
    for (const field of fields) {
      if (error.startsWith(field.name)) {
        
      }
    }
  }
}

const ErrorBubbles = ({ errorMessages, fields }) => {
  
};

export default ErrorBubbles;
