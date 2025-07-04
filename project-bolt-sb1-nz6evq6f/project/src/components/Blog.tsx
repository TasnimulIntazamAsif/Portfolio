import React from 'react';
import { Calendar, Clock, ArrowRight, TrendingUp, BookOpen, Code } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: 'Machine Learning Model Deployment: Best Practices for Production',
      excerpt: 'Learn the essential steps and considerations for deploying ML models in production environments, including monitoring, versioning, and scaling strategies.',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'Machine Learning',
      image: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['ML Deployment', 'Production', 'Best Practices']
    },
    {
      title: 'Academic Writing Tips: Crafting Compelling Research Proposals',
      excerpt: 'A comprehensive guide to writing research proposals that stand out, including structure, methodology, and common pitfalls to avoid.',
      date: '2024-01-10',
      readTime: '12 min read',
      category: 'Academic Writing',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Academic Writing', 'Research', 'Proposals']
    },
    {
      title: 'Data Visualization: Creating Impactful Charts with Python',
      excerpt: 'Master the art of data visualization using Python libraries like Matplotlib, Seaborn, and Plotly to create compelling visual narratives.',
      date: '2024-01-05',
      readTime: '10 min read',
      category: 'Data Science',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Data Visualization', 'Python', 'Charts']
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Blog Posts</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Insights on machine learning, data science, and academic research
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                  <Clock className="w-4 h-4 ml-4 mr-2" />
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button className="flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
            View All Posts
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;