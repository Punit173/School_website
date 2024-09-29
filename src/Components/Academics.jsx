import React from 'react';
import 'tailwindcss/tailwind.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator, faAtom, faFlask, faBookOpen, faLaptopCode, faPenFancy } from '@fortawesome/free-solid-svg-icons';

const Academics = () => {
    const subjects = [
        { title: 'Mathematics', description: 'Explore algebra, geometry, and calculus concepts.', icon: faCalculator },
        { title: 'Physics', description: 'Study the laws of motion, energy, and matter.', icon: faAtom },
        { title: 'Chemistry', description: 'Learn about chemical reactions, elements, and compounds.', icon: faFlask },
        { title: 'Biology', description: 'Understand the structure and function of living organisms.', icon: faBookOpen },
        { title: 'Computer Science', description: 'Introduction to programming and computer systems.', icon: faLaptopCode },
        { title: 'English', description: 'Enhance your language skills in writing and literature.', icon: faPenFancy },
    ];

    const studyMaterials = [
        { title: 'Book List Nursery to Class V', link: '/path/to/chemistry-guide.pdf' },
        { title: 'Book List Classes VI to VIII', link: 'https://www.advancedacademyindore.com/wp-content/uploads/2016/03/Classes-VI-to-VIII.pdf' },
        { title: 'Book List Classes IX to XII', link: 'https://www.advancedacademyindore.com/wp-content/uploads/2016/03/Classes-IX-to-XII.pdf' },
    ];

    return (
        <div className="bg-black" id='academics'> 
            <div className="max-w-7xl mx-auto px-4 py-16">
                <h1 className="text-4xl font-bold text-center mb-8 text-white">Academics</h1>

                <div className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4 text-white">Subject Highlights</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {subjects.map((subject, index) => (
                            <div key={index} className="bg-[#e8e5ce] rounded-lg p-6 shadow-lg text-center">
                                <FontAwesomeIcon icon={subject.icon} className="h-16 mb-4 mx-auto text-[#e04d46]" />
                                <h3 className="text-xl font-semibold mb-2 text-[#e04d46]">{subject.title}</h3>
                                <p className="text-gray-700">{subject.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-4 text-white">Book List</h2>
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
