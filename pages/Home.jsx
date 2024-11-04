import React from 'react';
import { ArrowRight, Users, Rocket, HelpCircle } from 'lucide-react';
import Navbar from '../components/HomePage/Navbar';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="w-full">
      {/* Navbar */}
      <nav className="h-16 bg-white fixed w-full z-50">
        <Navbar />
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-r from-blue-600 to-blue-800 text-white pt-16">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-3xl mx-auto px-6 py-32">
          <div>
            <h1 className="text-5xl font-bold mb-6">
              Efficient Resume Ranking with NLP & MCDM
            </h1>
            <p className="text-xl mb-8">
              Unlock the future of hiring with our cutting-edge resume ranking solution. 
              Using NLP and MCDM, we go beyond keywords to truly understand candidate 
              qualifications and find the perfect fit for your team.
            </p>
            <Link to='/about'>
            <button className="flex items-center bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors hover:bg-blue-50">
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 gap-12">
            <div className="bg-gray-50 rounded-xl p-8 transition-shadow hover:shadow-lg">
              <Users className="h-12 w-12 text-blue-600 mb-4" />
              <h2 className="text-2xl font-bold mb-4">Meet Our Experts</h2>
              <p>
                Our team consists of leading experts in Natural Language Processing,
                Machine Learning, and HR Technology. With years of experience in both
                academic research and industry applications, we bring unparalleled
                expertise to your hiring process.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 transition-shadow hover:shadow-lg">
              <Rocket className="h-12 w-12 text-blue-600 mb-4" />
              <h2 className="text-2xl font-bold mb-4">Unlock the Future</h2>
              <p>
                Experience the next generation of resume screening technology.
                Our advanced algorithms analyze not just keywords, but context,
                skills relationships, and career progression to identify the
                best candidates for your roles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Frequently Asked Questions</h2>
          <div className="grid grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 transition-shadow hover:shadow-lg">
              <HelpCircle className="h-8 w-8 text-blue-600 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-4">How does the system work?</h3>
              <p>
                Our system uses advanced NLP algorithms to analyze resumes,
                extracting key information and understanding the context of
                candidates' experiences and skills.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 transition-shadow hover:shadow-lg">
              <HelpCircle className="h-8 w-8 text-blue-600 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-4">What are the features?</h3>
              <p>
                Key features include automated resume parsing, skill matching,
                experience evaluation, and customizable ranking criteria based
                on your specific needs.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 transition-shadow hover:shadow-lg">
              <HelpCircle className="h-8 w-8 text-blue-600 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-4">How is the resume processed?</h3>
              <p>
                Resumes are processed through multiple stages including text extraction,
                information categorization, skill mapping, and multi-criteria
                decision making for final ranking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Criteria</h3>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Company</h3>
              <ul>
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Our Mission</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Leadership</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Resources</h3>
              <ul>
                <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Webinars</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Connect</h3>
              <ul>
                <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>@2024 Criteria Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;