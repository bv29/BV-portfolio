import React from 'react';
import { useDarkMode } from './hooks/useDarkMode';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Github, Linkedin } from 'lucide-react';

function App() {
  const [isDark, toggleDark] = useDarkMode();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Header isDark={isDark} toggleDark={() => toggleDark(!isDark)} />
      <main>
        <Hero />
        <p className='text-white text-center '>"projects are under construction  ⬇️" </p>
        <Projects/>
        <Contact />
      </main>
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-8">
      <div className="justify-center flex p-4">
  <p className="flex space-x-4">
    <a
      href="https://github.com/bhupeshv29"
      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
    >
      <Github className="w-5 h-5" />
    </a>
    <a
      href="https://www.linkedin.com/in/bhupesh-verma-684991198"
      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
    >
      <Linkedin className="w-5 h-5" />
    </a>
  </p>
</div>
        <div className="container mx-auto px-6 text-center">
          <p>© 2024 Bhupesh.dev. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
