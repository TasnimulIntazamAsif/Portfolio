import React from 'react';
import { Brain, Code, BookOpen, Users, Award, TrendingUp } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Machine Learning', icon: Brain, level: 95 },
    { name: 'Python Programming', icon: Code, level: 90 },
    { name: 'Data Analysis', icon: TrendingUp, level: 92 },
    { name: 'Academic Writing', icon: BookOpen, level: 88 },
    { name: 'Research Assistance', icon: Users, level: 85 },
    { name: 'Statistical Analysis', icon: Award, level: 90 },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate about leveraging data science and machine learning to solve complex problems
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="prose prose-lg text-gray-700">
              <p className="text-lg leading-relaxed">
                I am a dedicated data scientist and academic researcher with extensive experience in 
                machine learning, statistical analysis, and academic writing. My journey began with 
                a passion for understanding complex datasets and translating them into actionable insights.
              </p>
              <p className="text-lg leading-relaxed">
                Throughout my career, I have collaborated with researchers, students, and businesses 
                to develop innovative solutions using cutting-edge machine learning techniques. My 
                expertise spans from building predictive models to crafting comprehensive academic 
                papers that meet the highest standards of scholarly excellence.
              </p>
              <p className="text-lg leading-relaxed">
                My mission is to bridge the gap between academic research and practical applications, 
                helping clients achieve their goals through data-driven approaches and rigorous 
                research methodologies.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">
                5+ Years Experience
              </div>
              <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold">
                100+ Projects Completed
              </div>
              <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-semibold">
                Academic Excellence
              </div>
            </div>
          </div>

          {/* Right Content - Skills */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Skills</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center mb-2">
                    <skill.icon className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="font-semibold text-gray-900">{skill.name}</span>
                    <span className="ml-auto text-sm text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;