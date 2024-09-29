import React, { useEffect } from 'react';
import schlimg from '../assets/schl.png'

const Home = () => {
    const sectionStyle = {
        backgroundImage: `linear-gradient(145deg, #000000, #26E8E8)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '600px',
        zIndex: 0,
    };

    return (
        <>
            <div className="relative text-white py-20" style={sectionStyle}>
                <div className="absolute inset-0 bg-black opacity-75"></div>
                <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center relative z-10 gap-6">
                    <img src={schlimg} alt="" className="md:h-96 sm:h-48 mb-4 md:w-[5000px] mt-28" />
                    <h1 className="text-2xl sm:text-6xl font-bold text-center leading-tight sm:leading-snug">
                        Welcome to Advanced Academy
                    </h1>
                    <p className='text-center leading-tight sm:leading-snug'>Advanced Academy began its humble journey in the year 2000 under the able guidance of Director Mr. Anil Rai. Our idea of education is to unsettle the minds of the young and inflame their intellects. We have striven to evolve an educational environment that nurtures while teaching and encouraging the students to recognize their distinctive potential. We lay stress on grooming the children to be independent learner so they grow up to be leaders and decision makers. Our objective is not only to impart academic education but also to develop personality, physical growth, emotional &amp; spiritual balance and imbibing pride in our cultural heritage.</p>

                </div>

                <div className="hidden md:block">
                </div>
            </div>
        </>
    );
};

export default Home;