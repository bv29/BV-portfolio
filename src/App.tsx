import React from 'react';
import { useDarkMode } from './hooks/useDarkMode';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [isDark, toggleDark] = useDarkMode();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Header isDark={isDark} toggleDark={() => toggleDark(!isDark)} />
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>© 2024 Bhupesh.dev. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;