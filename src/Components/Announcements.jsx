import React from "react";
import "tailwindcss/tailwind.css";

const announcements = [
    {
        id: 1,
        title: "School Reopens",
        date: "September 1, 2024",
        summary: "We are excited to announce that the school will reopen for the new academic year on September 1st.",
    },
    {
        id: 2,
        title: "Annual Sports Day",
        date: "October 15, 2024",
        summary: "Join us for the Annual Sports Day! Fun activities and competitions await all students.",
    },
    {
        id: 3,
        title: "Parent-Teacher Meeting",
        date: "November 10, 2024",
        summary: "We encourage all parents to attend the upcoming Parent-Teacher Meeting to discuss student progress.",
    },
];

const Announcements = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-16" id="announcements">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Announcements</h2>
            <div className="relative">
                <div className="absolute left-1/2 border-l border-gray-300 h-full"></div>
                {announcements.map((announcement, index) => (
                    <div key={announcement.id} className={`mb-8 flex items-start ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                        <div className="bg-[#e8e5ce] p-4 shadow-lg rounded-lg border border-gray-300 w-1/2">
                            <h3 className="text-xl font-semibold mb-2 text-[#e04d46]">{announcement.title}</h3>
                            <p className="text-gray-500 mb-1">{announcement.date}</p>
                            <p className="text-gray-700">{announcement.summary}</p>
                        </div>
                        <div className="w-4 h-4 rounded-full bg-[#e04d46] absolute left-1/2 transform -translate-x-1/2"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Announcements;
