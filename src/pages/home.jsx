import React from 'react';
import Gallery from './gallery';
import Contact from './Contact';
import About from './About';

const Home = () => {
    return (
        <>
            <div 
                className="min-h-screen pt-4 px-4 bg-cover bg-center bg-no-repeat flex items-center relative"
                style={{ backgroundImage: "linear-gradient(rgba(190, 0, 0, 0.7), rgba(120, 0, 0, 0.8)), url('https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')" }}
            >
                {/* Decorative elements */}
                <div className="absolute top-10 right-10 w-24 h-24 bg-red-500 rounded-full opacity-20"></div>
                <div className="absolute bottom-20 left-8 w-16 h-16 bg-red-400 rounded-full opacity-30"></div>
                <div className="absolute top-1/3 left-20 w-12 h-12 bg-red-300 rounded-full opacity-40"></div>
                
                <div className="max-w-4xl mx-auto text-center text-white relative z-10">
                    <div className="inline-flex items-center justify-center mb-4 bg-red-800 bg-opacity-70 px-4 py-2 rounded-full">
                        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="font-medium">Premium Stock Photography</span>
                    </div>
                    
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 text-shadow">Discover Stunning Stock Photos</h1>
                    <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
                        Explore our curated collection of high-quality, royalty-free images. Perfect for your creative projects, marketing materials, and websites.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg transition-all duration-300 font-semibold text-lg transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            Explore Gallery
                        </button>
                        <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-red-800 transition-all duration-300 font-semibold text-lg flex items-center justify-center">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Learn More
                        </button>
                    </div>
                    
                    <div className="mt-16 flex flex-wrap justify-center gap-6">
                        <div className="flex items-center bg-red-900 bg-opacity-40 px-4 py-2 rounded-lg">
                            <svg className="w-5 h-5 mr-2 text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Royalty-Free</span>
                        </div>
                        <div className="flex items-center bg-red-900 bg-opacity-40 px-4 py-2 rounded-lg">
                            <svg className="w-5 h-5 mr-2 text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>High Resolution</span>
                        </div>
                        <div className="flex items-center bg-red-900 bg-opacity-40 px-4 py-2 rounded-lg">
                            <svg className="w-5 h-5 mr-2 text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Curated Collections</span>
                        </div>
                    </div>
                </div>
                
                {/* Scroll indicator */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-red-300 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-red-300 rounded-full mt-2"></div>
                    </div>
                </div>
            </div>
            <Gallery />
            <About />
            <Contact />
        </>
    );
};

export default Home;