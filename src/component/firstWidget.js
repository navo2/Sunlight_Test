import React, { useEffect } from 'react';
import './widget.css'
import { useNavigate } from 'react-router-dom';

function FirstWidget() {
    const Navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            Navigate('/dirty'); // Navigate to "lastWidget" after 2 minutes
        }, 3000); // 2 minutes in milliseconds
    
        return () => clearTimeout(timer); // Clear the timer if the component unmounts
      }, [Navigate]);// 2 minutes in milliseconds
  return (
    <div className='FirstWidget'></div>
  )
}

export default FirstWidget;