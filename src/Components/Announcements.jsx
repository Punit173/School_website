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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {announcements.map((announcement) => (
                    <div 
                        key={announcement.id} 
                        className="bg-[#e8e5ce] shadow-lg rounded-lg p-6 border  border-gray-300"
                    >
                        <h3 className="text-xl font-semibold mb-2 text-e04d46">{announcement.title}</h3>
                        <p className="text-gray-500 mb-4">{announcement.date}</p>
                        <p className="text-gray-700">{announcement.summary}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Announcements;
