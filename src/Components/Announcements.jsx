import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faFutbol, faUserFriends, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import NewsletterPopup from "./NewsletterPopup";

const announcements = [
    {
        id: 1,
        title: "School Reopens",
        date: "September 1, 2024",
        summary: "We are excited to announce that the school will reopen for the new academic year on September 1st.",
        icon: faBell
    },
    {
        id: 2,
        title: "Annual Sports Day",
        date: "October 15, 2024",
        summary: "Join us for the Annual Sports Day! Fun activities and competitions await all students.",
        icon: faFutbol
    },
    {
        id: 3,
        title: "Parent-Teacher Meeting",
        date: "November 10, 2024",
        summary: "We encourage all parents to attend the upcoming Parent-Teacher Meeting to discuss student progress.",
        icon: faUserFriends
    },
];

const Announcements = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-16" id="announcements">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Announcements</h2>
            <div className="relative">
                <div className="absolute left-1/2 border-l border-gray-300 h-full"></div>
                {announcements.map((announcement, index) => (
                    <div key={announcement.id} className={`mb-8 flex items-start ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                        <div className="bg-[#e8e5ce] p-4 shadow-lg rounded-lg border border-gray-300 w-1/2">
                            <div className="flex items-center mb-2">
                                <FontAwesomeIcon icon={announcement.icon} className="text-[#e04d46] mr-2" />
                                <h3 className="text-xl font-semibold text-[#e04d46]">{announcement.title}</h3>
                            </div>
                            <p className="text-gray-500 mb-1">{announcement.date}</p>
                            <p className="text-gray-700">{announcement.summary}</p>
                        </div>
                        <div className="w-4 h-4 rounded-full bg-[#e04d46] absolute left-1/2 transform -translate-x-1/2"></div>
                    </div>
                ))}
            </div>

            <div className="bg-black w-full py-8 flex flex-col items-center mt-8">
                <p className="text-lg text-white text-center mb-4">Stay updated with the latest news and announcements!</p>
                {!isPopupOpen && (
                    <button
                        onClick={togglePopup}
                        className="flex items-center bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
                    >
                        <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                        Subscribe to Newsletter
                    </button>
                )}

                {isPopupOpen && <NewsletterPopup onClose={handleClosePopup} />}
            </div>

        </div>
    );
};

export default Announcements;
