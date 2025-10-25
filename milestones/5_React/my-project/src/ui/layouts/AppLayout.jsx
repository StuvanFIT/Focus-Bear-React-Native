// src/ui/components/Layout.jsx
import React from 'react';
import NavigationBar from '../components/NavigationBar';

function AppLayout({ children }) {

  return (

    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      <header>
        <NavigationBar />
      </header>
  

      <main className="flex-1 flex flex-col items-center justify-center p-6">
        {children}
      </main>

      <footer className="bg-gray-200 text-gray-700 py-4 px-6 text-center">
        &copy; 2025 Steven Kaing
      </footer>
    </div>
  );
}

export default AppLayout;
