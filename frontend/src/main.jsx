import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'


const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    
    <StrictMode>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </StrictMode>,
  );
} else {
  console.error('Root element not found');
}
