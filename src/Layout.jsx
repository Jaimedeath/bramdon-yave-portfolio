import React from 'react';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        
        * {
          font-family: 'Inter', sans-serif;
        }
        
        html {
          scroll-behavior: smooth;
          lang: es-MX;
        }
        
        body {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: #F8F9FA;
        }
        ::-webkit-scrollbar-thumb {
          background: #C3B1E1;
          border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #A8D8EA;
        }
      `}</style>
      {children}
    </div>
  );
}