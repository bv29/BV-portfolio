import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Hi, I'm Bhupesh
            <span className="block text-blue-600">Full Stack Developer</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            I build exceptional digital experiences that make life easier and more enjoyable. 
            Focused on creating clean, user-friendly solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#projects" 
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              View My Work
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}