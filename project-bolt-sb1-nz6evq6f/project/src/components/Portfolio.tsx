import React from 'react';
import { ExternalLink, Github, Heart, FileText, Image } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'Cardiovascular Disease Risk Prediction',
      description: 'Advanced machine learning model to predict cardiovascular disease risk using patient health data with 94% accuracy.',
      image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'Random Forest', 'XGBoost', 'Pandas', 'Scikit-learn'],
      category: 'Machine Learning',
      github: '#',
      demo: '#'
    },
    {
      title: 'Academic Thesis Presentation Suite',
      description: 'Comprehensive thesis presentation materials for graduate students including slides, posters, and executive summaries.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['PowerPoint', 'LaTeX', 'Adobe Illustrator', 'Research Methods'],
      category: 'Academic Writing',
      github: '#',
      demo: '#'
    },
    {
      title: 'OCR Document Converter',
      description: 'Intelligent document conversion system supporting multiple languages with advanced OCR capabilities.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'Tesseract', 'OpenCV', 'Flask', 'Multi-language OCR'],
      category: 'Data Processing',
      github: '#',
      demo: '#'
    },
    {
      title: 'Research Paper Analysis Dashboard',
      description: 'Interactive dashboard for analyzing and summarizing academic papers with automated insight extraction.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'Streamlit', 'NLP', 'Plotly', 'TextBlob'],
      category: 'Data Visualization',
      github: '#',
      demo: '#'
    },
    {
      title: 'Statistical Analysis Platform',
      description: 'Web-based platform for conducting comprehensive statistical analysis with automated report generation.',
      image: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['R', 'Shiny', 'ggplot2', 'Statistical Modeling', 'Report Generation'],
      category: 'Statistical Analysis',
      github: '#',
      demo: '#'
    },
    {
      title: 'Data Cleaning Automation Tool',
      description: 'Automated data preprocessing pipeline that handles missing values, outliers, and data transformation.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'Pandas', 'NumPy', 'Data Validation', 'Pipeline Automation'],
      category: 'Data Processing',
      github: '#',
      demo: '#'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing successful projects in machine learning, academic research, and data analysis
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    <span className="text-sm">Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;