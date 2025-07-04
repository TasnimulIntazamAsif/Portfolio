import React from 'react';
import { Download, Mail, ArrowRight, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className={`absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] repeat`}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col items-center space-y-8">
          {/* Profile Image */}
          <div className="relative">
            <div className="w-48 h-48 bg-gray-300 rounded-full flex items-center justify-center shadow-2xl overflow-hidden">
              <img 
                src="https://i.ibb.co/fVzLpGbG/Whats-App-Image-2025-05-06-at-15-47-46-0d88389f.jpg" 
                alt="Tasnimul Intazam Asif" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
              <ArrowRight className="w-8 h-8 text-white" />
            </div>
          </div>

          <div className="text-white space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Tasnimul Intazam Asif
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Machine Learning Specialist | Academic Research Expert | Freelance Data Analyst
            </p>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto">
              Transforming data into insights and research into publications. 
              Specialized in machine learning, academic writing, and data analysis.
            </p>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button
              onClick={scrollToContact}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
            >
              <Mail className="w-5 h-5" />
              <span>Hire Me</span>
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
              <Download className="w-5 h-5" />
              <span>Download CV</span>
            </button>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6 mt-8">
            <a
              href="https://www.linkedin.com/in/asif2896"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-200 hover:text-white transition-colors duration-300"
            >
              <Linkedin className="w-8 h-8" />
            </a>
            <a
              href="https://github.com/TasnimulIntazamAsif"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-200 hover:text-white transition-colors duration-300"
            >
              <Github className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;