import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";

const Aboutus = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        {
            id: 1,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXZUMvN-JSOVJuMvn7LWI96GkNE0hbJwWc_g&s",
        },
        {
            id: 2,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmvwG1GmFJrvt0OnVd3UzfqZzjeNvBaAMFAg&s",
        },
        {
            id: 3,
            image: "https://cricketgraph.com/wp-content/gallery/advance-sports-and-events-cricketgraph-academy/Advance-Sports-and-Events-Cricketgraph-Academy-Churchgate-7.jpg",
        },
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex - 1 + slides.length) % slides.length
        );
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 3000); 
        return () => clearInterval(interval); 
    }, []);

    return (
        <div className="bg-gray-300" id="about">
            <div className="relative w-full max-w-3xl mx-auto overflow-hidden p-20 rounded-lg shadow-lg ">
                <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {slides.map((slide) => (
                        <div key={slide.id} className="min-w-full">
                            <img
                                src={slide.image}
                                alt={`Slide ${slide.id}`}
                                className="w-full h-64 object-cover rounded-lg"
                            />
                        </div>
                    ))}
                </div>

                <button
                    onClick={prevSlide}
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 shadow-lg hover:bg-gray-300 transition-colors duration-200"
                >
                    <span className="text-xl text-gray-800">&#10094;</span> {/* Left Arrow */}
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 shadow-lg hover:bg-gray-300 transition-colors duration-200"
                >
                    <span className="text-xl text-gray-800">&#10095;</span> {/* Right Arrow */}
                </button>

                <div className="flex justify-center mt-4">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            className={`w-3 h-3 mx-1 rounded-full ${index === currentIndex ? "bg-blue-500" : "bg-gray-300"
                                }`}
                            onClick={() => setCurrentIndex(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Aboutus;
