import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Dr. Sarah Mitchell',
      role: 'Professor, Data Science Department',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      rating: 5,
      text: 'Tasnimul\'s expertise in machine learning and academic writing is exceptional. He helped me develop a comprehensive research proposal that was accepted by a top-tier conference. His attention to detail and deep understanding of statistical methods made all the difference.',
      project: 'Research Proposal Development'
    },
    {
      name: 'Michael Chen',
      role: 'Graduate Student, Computer Science',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      rating: 5,
      text: 'Working with Tasnimul on my thesis was a game-changer. His guidance through the entire process - from literature review to final presentation - was invaluable. The quality of work exceeded my expectations, and I received excellent feedback from my committee.',
      project: 'Thesis Writing Support'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Business Analyst, TechCorp',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      rating: 5,
      text: 'Tasnimul delivered a sophisticated predictive model that transformed our business intelligence capabilities. His ability to translate complex data into actionable insights helped us increase our forecasting accuracy by 40%. Highly professional and responsive throughout the project.',
      project: 'ML Model Development'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            What clients say about working with me
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 relative hover:shadow-lg transition-all duration-300">
              <div className="absolute -top-4 -left-4 bg-blue-600 text-white p-3 rounded-full">
                <Quote className="w-6 h-6" />
              </div>
              
              <div className="flex items-center mb-4 mt-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <div className="flex items-center mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              
              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold inline-block">
                {testimonial.project}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;