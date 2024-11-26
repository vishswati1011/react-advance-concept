import React, { useRef, useState } from 'react';
import './tooltip.css';

function Tooltip({ children ,content}) {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const tooltipRef = useRef(null);

  const handleMouseEnter = () => {
    setIsTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setIsTooltipVisible(false);
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> 
      {children}
      {isTooltipVisible && (
        <div ref={tooltipRef} className="tooltip">
          <button className='tooltip_button'>{content}</button>
        </div>
      )}
    </div>
  );
}

export default Tooltip;