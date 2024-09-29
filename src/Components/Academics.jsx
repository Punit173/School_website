import React from 'react';
import 'tailwindcss/tailwind.css';

const Academics = () => {
    const timetable = [
        { day: 'Monday', subject: 'Mathematics', time: '9:00 AM - 10:00 AM' },
        { day: 'Monday', subject: 'Physics', time: '10:15 AM - 11:15 AM' },
        { day: 'Wednesday', subject: 'Chemistry', time: '9:00 AM - 10:00 AM' },
        { day: 'Wednesday', subject: 'Biology', time: '10:15 AM - 11:15 AM' },
        { day: 'Friday', subject: 'Computer Science', time: '9:00 AM - 10:00 AM' },
        { day: 'Friday', subject: 'English', time: '10:15 AM - 11:15 AM' },
    ];

    const studyMaterials = [
        { title: 'Book List Nursery to Class V', link: '/path/to/chemistry-guide.pdf' },
        { title: 'Book List Classes VI to VIII', link: 'https://www.advancedacademyindore.com/wp-content/uploads/2016/03/Classes-VI-to-VIII.pdf' },
        { title: 'Book List CLasses IX to XII', link: 'https://www.advancedacademyindore.com/wp-content/uploads/2016/03/Classes-IX-to-XII.pdf' },
    ];

    return (
        <div className="bg-black" id='academics'> 
            <div className="max-w-7xl mx-auto px-4 py-16">
                <h1 className="text-4xl font-bold text-center mb-8 text-white">Academics</h1>

                <div className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4 text-white">Class Timetable</h2>
                    <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg">
                        <thead>
                            <tr className="bg-white">
                                <th className="py-2 px-4 border border-gray-300 bg-[#023813] text-white">Day</th>
                                <th className="py-2 px-4 border border-gray-300 bg-[#023813] text-white">Subject</th>
                                <th className="py-2 px-4 border border-gray-300 bg-[#023813] text-white">Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {timetable.map((item, index) => (
                                <tr key={index}>
                                    <td className="py-2 px-4 border border-gray-300 bg-[#e8e5ce]">{item.day}</td>
                                    <td className="py-2 px-4 border border-gray-300 bg-[#e8e5ce]">{item.subject}</td>
                                    <td className="py-2 px-4 border border-gray-300 bg-[#e8e5ce]">{item.time}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div>
                    <h2 className="text-2xl  font-semibold mb-4 text-white">Book List</h2>
                    <ul className="list-disc list-inside">
                        {studyMaterials.map((material, index) => (
                            <li key={index} className="mb-2">
                                <a href={material.link} className="text-blue-500 hover:underline" download>
                                    {material.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Academics;
