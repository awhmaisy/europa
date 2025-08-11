'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Navigation() {
  const pathname = usePathname();
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    // Check localStorage first, then body class
    const savedLightMode = localStorage.getItem('light-mode') === 'true';
    const bodyHasLightMode = document.body.classList.contains('light-mode');
    
    // Set initial state based on localStorage or body class
    const initialLightMode = savedLightMode || bodyHasLightMode;
    setIsLightMode(initialLightMode);
    
    // Apply the correct class to body
    if (initialLightMode && !bodyHasLightMode) {
      document.body.classList.add('light-mode');
    } else if (!initialLightMode && bodyHasLightMode) {
      document.body.classList.remove('light-mode');
    }
  }, []);

  const toggleTheme = () => {
    const newLightMode = !isLightMode;
    setIsLightMode(newLightMode);
    document.body.classList.toggle('light-mode', newLightMode);
    
    // Save to localStorage
    localStorage.setItem('light-mode', newLightMode.toString());
  };

  const activeColor = '#EA9AE5';
  const inactiveColor = isLightMode ? 'black' : 'white';

  return (
    <nav style={{ 
      position: 'fixed', 
      top: '15vh', 
      left: '50%', 
      transform: 'translateX(-50%)', 
      zIndex: 1000,
      display: 'flex',
      gap: '2rem',
      fontFamily: 'MSGothic, monospace, sans-serif',
      fontSize: '13px'
    }}>
      <Link 
        href="/" 
        style={{ 
          color: pathname === '/' ? activeColor : inactiveColor,
          textDecoration: 'none'
        }}
      >
        intercept
      </Link>
      <Link 
        href="/lexicon" 
        style={{ 
          color: pathname === '/lexicon' ? activeColor : inactiveColor,
          textDecoration: 'none'
        }}
      >
        lexicon
      </Link>
      <button
        onClick={toggleTheme}
        style={{ 
          color: inactiveColor,
          textDecoration: 'none',
          background: 'none',
          border: 'none',
          padding: 0,
          cursor: 'pointer',
          fontFamily: 'MSGothic, monospace, sans-serif',
          fontSize: '13px'
        }}
      >
        {isLightMode ? '電気消して！' : '電気つけて！'}
      </button>
    </nav>
  );
}
