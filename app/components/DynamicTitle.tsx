'use client';

import { useEffect } from 'react';

export default function DynamicTitle() {
  useEffect(() => {
    const titles = [
      '𝓌𝑒𝓁𝒸𝑜𝓂𝑒',
      '𝓉𝑜',
      '𝓂𝒶𝒾𝓈𝓎𝓁𝒶𝓃𝒹!',
      '˚୨୧⋆｡˚ ⋆',
    ];
    let currentIndex = 0;

    const updateTitle = () => {
      document.title = titles[currentIndex];
      currentIndex = (currentIndex + 1) % titles.length;
    };

    updateTitle();

    const interval = setInterval(updateTitle, 1500);

    return () => clearInterval(interval);
  }, []);

  return null; 
}
