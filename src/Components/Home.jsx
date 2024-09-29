import React, { useEffect, useRef } from "react";
import schlimg from "../assets/schl.png";

const Home = () => {
    const sectionStyle = {
        backgroundImage: `linear-gradient(145deg, #000000, #26E8E8)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "600px",
        zIndex: 0,
    };

    const listRef = useRef(null);

    // Smooth scrolling effect
    useEffect(() => {
        const scrollContainer = listRef.current;
        let scrollInterval;

        const startScrolling = () => {
            scrollInterval = setInterval(() => {
                scrollContainer.scrollTop += 1; // Scroll down by 1 pixel
                // Reset scroll to top when reaching bottom
                if (scrollContainer.scrollTop >= scrollContainer.scrollHeight - scrollContainer.clientHeight) {
                    scrollContainer.scrollTop = 0;
                }
            }, 30); // Adjust speed by changing the interval
        };

        const stopScrolling = () => {
            clearInterval(scrollInterval);
        };

        scrollContainer.addEventListener("mouseenter", startScrolling);
        scrollContainer.addEventListener("mouseleave", stopScrolling);

        return () => {
            stopScrolling();
            scrollContainer.removeEventListener("mouseenter", startScrolling);
            scrollContainer.removeEventListener("mouseleave", stopScrolling);
        };
    }, []);

    return (
        <>
            <div className="relative text-white py-20" style={sectionStyle}>
                <div className="absolute inset-0 bg-black opacity-75"></div>
                <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center relative z-10 gap-6">
                    <img
                        src={schlimg}
                        alt="School Logo"
                        className="md:h-96 sm:h-48 mb-4 md:w-[5000px] mt-28"
                    />
                    <h1 className="text-2xl sm:text-6xl font-bold text-center leading-tight sm:leading-snug">
                        Welcome to Advanced Academy
                    </h1>

                    <div className="flex flex-col md:flex-row gap-8 justify-between w-full">
                        <div className="flex-1">
                            <p className="text-left leading-tight sm:leading-snug md:text-xl">
                                Advanced Academy began its humble journey in the year 2000 under the
                                able guidance of Director Mr. Anil Rai. Our idea of education is to
                                unsettle the minds of the young and inflame their intellects. We
                                have striven to evolve an educational environment that nurtures
                                while teaching and encouraging the students to recognize their
                                distinctive potential. We lay stress on grooming the children to be
                                independent learners so they grow up to be leaders and decision
                                makers. Our objective is not only to impart academic education but
                                also to develop personality, physical growth, emotional &amp;
                                spiritual balance and imbibing pride in our cultural heritage.
                            </p>
                        </div>
                        <div className="flex-1 md:max-w-xs">
                            <div className="bg-white text-black shadow-lg rounded-lg relative overflow-hidden">
                                <h2 className="font-bold p-5 bg-orange-50 text-black z-10 relative">Announcement</h2>
                                <div className="overflow-y-auto max-h-56" ref={listRef}>
                                    <ul className="p-4 space-y-4">
                                        <li className="p-4 bg-gray-100 rounded-md">Lorem ipsum</li>
                                        <li className="p-4 bg-gray-100 rounded-md">Lorem ipsum</li>
                                        <li className="p-4 bg-gray-100 rounded-md">Lorem ipsum</li>
                                        <li className="p-4 bg-gray-100 rounded-md">Lorem ipsum</li>
                                        <li className="p-4 bg-gray-100 rounded-md">Lorem ipsum</li>
                                        <li className="p-4 bg-gray-100 rounded-md">Lorem ipsum</li>
                                        <li className="p-4 bg-gray-100 rounded-md">Lorem ipsum</li>
                                        <li className="p-4 bg-gray-100 rounded-md">Lorem ipsum</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
