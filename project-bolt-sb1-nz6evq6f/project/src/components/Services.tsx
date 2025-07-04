import React from 'react';
import { Brain, PenTool, Database, FileText, Search, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: 'Machine Learning Model Building',
      description: 'Custom ML models for prediction, classification, and clustering tasks using Python, scikit-learn, and TensorFlow.',
      features: ['Model Selection & Training', 'Feature Engineering', 'Model Evaluation', 'Deployment Support']
    },
    {
      icon: PenTool,
      title: 'Academic Thesis Writing Support',
      description: 'Comprehensive assistance with thesis proposals, research papers, and presentation slides for academic excellence.',
      features: ['Research Proposals', 'Literature Reviews', 'Data Analysis Chapters', 'Presentation Design']
    },
    {
      icon: Database,
      title: 'Data Cleaning & Visualization',
      description: 'Transform raw data into clean, analysis-ready datasets with compelling visualizations and insights.',
      features: ['Data Preprocessing', 'Statistical Analysis', 'Interactive Dashboards', 'Report Generation']
    },
    {
      icon: FileText,
      title: 'PDF to DOCX Conversion',
      description: 'Advanced OCR-based document conversion with multilingual support and formatting preservation.',
      features: ['OCR Technology', 'Multi-language Support', 'Format Preservation', 'Batch Processing']
    },
    {
      icon: Search,
      title: 'Research Paper Summarization',
      description: 'Comprehensive analysis and summarization of academic papers with key insights extraction.',
      features: ['Literature Analysis', 'Key Findings Extraction', 'Comparative Studies', 'Citation Management']
    },
    {
      icon: Zap,
      title: 'Custom Data Solutions',
      description: 'Tailored data science solutions for unique business challenges and research questions.',
      features: ['Consultation Services', 'Custom Algorithms', 'Performance Optimization', 'Technical Documentation']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Services Offered</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive data science and academic research services tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <service.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 ml-4">{service.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;