import React from 'react';

const About = () => {
    return (
        <div className="min-h-screen pt-20 px-4 bg-gradient-to-b from-red-50 to-white">
            <div className="max-w-6xl mx-auto py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-red-800 mb-4">About PixelStock</h1>
                    <p className="text-red-600 max-w-2xl mx-auto text-lg">
                        Discover the story behind our passion for photography and our commitment to providing exceptional stock images.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
                    <div className="md:w-1/2">
                        <img
                            src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Our Photography Team"
                            className="rounded-2xl shadow-xl w-full"
                        />
                    </div>

                    <div className="md:w-1/2">
                        <div className="inline-flex items-center bg-red-100 text-red-800 px-4 py-2 rounded-full mb-4">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            Our Story
                        </div>
                        <h2 className="text-2xl font-bold text-red-800 mb-4">Capturing Moments, Creating Value</h2>
                        <p className="text-red-700 mb-4 leading-relaxed">
                            Founded in 2015, PixelStock began as a small collective of photographers passionate about making high-quality imagery accessible to everyone. What started as a shared gallery among friends has grown into a comprehensive stock photo library serving creators worldwide.
                        </p>
                        <p className="text-red-700 leading-relaxed">
                            We believe that compelling visuals have the power to transform projects, tell stories, and connect people. That's why we're dedicated to curating a diverse collection of stunning photographs that inspire and empower creative professionals.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                        <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-red-800 mb-2">Quality Imagery</h3>
                        <p className="text-red-600">Every image in our collection is carefully curated and meets our high standards for composition, lighting, and storytelling.</p>
                    </div>

                    <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                        <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-red-800 mb-2">Global Community</h3>
                        <p className="text-red-600">We work with photographers from around the world to bring you diverse perspectives and authentic visual content.</p>
                    </div>

                    <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                        <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-red-800 mb-2">Trusted Resource</h3>
                        <p className="text-red-600">Thousands of designers, marketers, and content creators rely on our library for their creative projects.</p>
                    </div>
                </div>

                <div className="bg-red-800 text-white rounded-2xl p-8 md:p-12 text-center">
                    <h2 className="text-2xl font-bold mb-4">Join Our Creative Community</h2>
                    <p className="mb-6 max-w-2xl mx-auto">
                        Whether you're a photographer looking to share your work or a creative professional seeking inspiration, 
                        we invite you to be part of our growing community.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="bg-white text-red-800 hover:bg-red-100 px-6 py-3 rounded-lg transition-colors font-semibold">
                            Submit Photos
                        </button>
                        <button className="bg-transparent border-2 border-white hover:bg-red-700 px-6 py-3 rounded-lg transition-colors font-semibold">
                            Browse Collection
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;