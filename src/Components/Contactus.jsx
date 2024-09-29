import React from "react";
import "tailwindcss/tailwind.css";

const Contactus = () => {
    const sectionStyle = {
        backgroundImage: `linear-gradient(245deg, #000000, #26E8E8)`,
    };

    return (
        <div className="bg-black" id="contact">
            <div className="max-w-7xl mx-auto px-4 py-16">
                <h1 className="text-4xl font-bold text-white text-center mb-8">Contact Us</h1>

                <div className="flex flex-col md:flex-row justify-between gap-8">
                    <div className="flex-1 bg-[#e8e5ce] p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold text-teal-600 mb-4">Our Contact Details</h2>
                        <p className="mb-2">
                            <strong>School Office Hours:</strong> 9:00 AM to 4:00 PM
                        </p>
                        <p className="mb-2">
                            <strong>Address:</strong> ISKCON Vihar Colony, Nipania Rd, Indore, Madhya Pradesh 452016
                        </p>
                        <p className="mb-2">
                            <strong>Phone:</strong> 098277 20868
                        </p>
                        <p className="mb-2">
                            <strong>Email:</strong> advancedindore@gmail.com
                        </p>
                    </div>

                    <div className="flex-1 bg-[#e8e5ce] p-6 rounded-lg shadow-lg">
                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-700" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Your Name"
                                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Your Email"
                                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700" htmlFor="message">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    placeholder="Your Message"
                                    rows="4"
                                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-teal-500 text-white py-2 rounded hover:bg-teal-600 transition-colors"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-semibold text-white mb-4">Our Location</h2>
                    <div className="w-full h-64">
                        <iframe
                            title="Google Maps Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.384175527155!2d75.92351897600257!3d22.751119826402284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962e29e49856767%3A0x995ac84c571e787b!2sAdvanced%20Academy!5e0!3m2!1sen!2sin!4v1727627935548!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            allowFullScreen=""
                            loading="lazy"
                            className="rounded-lg"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contactus;
