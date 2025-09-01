import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="min-h-screen pt-20 px-4 bg-gradient-to-b from-red-50 to-white">
            <div className="max-w-6xl mx-auto py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-red-800 mb-4">Contact Us</h1>
                    <p className="text-red-600 max-w-2xl mx-auto">
                        Have questions about our stock photos or need assistance? We'd love to hear from you.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 bg-white rounded-2xl shadow-lg p-8">
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold text-red-800 mb-6 flex items-center">
                                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                Get in Touch
                            </h2>
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="bg-red-100 p-3 rounded-full mr-4">
                                        <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-red-800">Email</p>
                                        <p className="text-red-600">Bigyan@gmail.com</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start">
                                    <div className="bg-red-100 p-3 rounded-full mr-4">
                                        <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-red-800">Phone</p>
                                        <p className="text-red-600">+977 976-1234567</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start">
                                    <div className="bg-red-100 p-3 rounded-full mr-4">
                                        <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-red-800">Address</p>
                                        <p className="text-red-600">Bharatpur-2, Kshetrapur</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-red-800 mb-4">Business Hours</h3>
                            <div className="space-y-2 text-red-600">
                                <p className="flex justify-between"><span>Monday - Friday:</span> <span>9:00 AM - 6:00 PM</span></p>
                                <p className="flex justify-between"><span>Saturday:</span> <span>10:00 AM - 4:00 PM</span></p>
                                <p className="flex justify-between"><span>Sunday:</span> <span>Closed</span></p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-red-800 mb-6 flex items-center">
                            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Send a Message
                        </h2>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    className="w-full p-4 border border-red-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your Email"
                                    className="w-full p-4 border border-red-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                                    required
                                />
                            </div>
                            <div>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your Message"
                                    rows="5"
                                    className="w-full p-4 border border-red-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-colors duration-300 font-semibold shadow-md hover:shadow-lg"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <h3 className="text-2xl font-semibold text-red-800 mb-6">Follow Us</h3>
                    <div className="flex justify-center space-x-6">
                        <a href="#" className="bg-red-100 p-3 rounded-full text-red-600 hover:bg-red-200 transition-colors">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                            </svg>
                        </a>
                        <a href="#" className="bg-red-100 p-3 rounded-full text-red-600 hover:bg-red-200 transition-colors">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10 5.523 0 10-4.477 10-10 0-5.523-4.477-10-10-10zm-1.5 14.5H7.5v-9h3v9zm-1.5-10a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm7.5 10h-3v-5.25c0-.825-.675-1.5-1.5-1.5s-1.5.675-1.5 1.5v5.25h-3v-9h3v1.125c.6-.825 1.575-1.125 2.25-1.125 1.8 0 3.75 1.275 3.75 4.5v4.5z" />
                            </svg>
                        </a>
                        <a href="#" className="bg-red-100 p-3 rounded-full text-red-600 hover:bg-red-200 transition-colors">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10 5.523 0 10-4.477 10-10 0-5.523-4.477-10-10-10zm-1.5 14.5H7.5v-9h3v9zm-1.5-10a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm7.5 10h-3v-5.25c0-.825-.675-1.5-1.5-1.5s-1.5.675-1.5 1.5v5.25h-3v-9h3v1.125c.6-.825 1.575-1.125 2.25-1.125 1.8 0 3.75 1.275 3.75 4.5v4.5z" />
                            </svg>
                        </a>
                        <a href="#" className="bg-red-100 p-3 rounded-full text-red-600 hover:bg-red-200 transition-colors">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10 5.523 0 10-4.477 10-10 0-5.523-4.477-10-10-10zm-1.5 14.5H7.5v-9h3v9zm-1.5-10a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm7.5 10h-3v-5.25c0-.825-.675-1.5-1.5-1.5s-1.5.675-1.5 1.5v5.25h-3v-9h3v1.125c.6-.825 1.575-1.125 2.25-1.125 1.8 0 3.75 1.275 3.75 4.5v4.5z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;