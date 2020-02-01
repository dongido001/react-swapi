import React from 'react';

export default function ProgressBar(prop) {
  const progress = prop.progress || "0%"
  const disabled = prop.disabled || false
  
  let className = "progress-bar"

  if (disabled) {
    className += " disabled" 
  }
 
  return (
    <div className={className}> 
        <div className="progress" style={{ width: progress }}> </div>
    </div>
  );
}