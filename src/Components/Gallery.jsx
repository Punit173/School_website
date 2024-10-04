import React from 'react';
import 'tailwindcss/tailwind.css';

const Gallery = () => {
    const images = [
        'https://scontent.fmaa12-1.fna.fbcdn.net/v/t39.30808-6/459616277_18032240348233948_8614826931966292225_n.jpg?stp=dst-jpg_p526x296&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=z6kowZP5IrIQ7kNvgH4maUT&_nc_ht=scontent.fmaa12-1.fna&_nc_gid=Am1j4Ijhk1OywdcZF67eOZz&oh=00_AYBebNnjGbCYyBsIgqaQ43S3MJtcXekWMqxJ0UuczAxnCg&oe=66FF6D32',
        'https://scontent.fmaa12-1.fna.fbcdn.net/v/t39.30808-6/458175957_18030791423233948_1271069445085681135_n.jpg?stp=dst-jpg_p526x296&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=LhmlRKptrGEQ7kNvgGtbpvc&_nc_ht=scontent.fmaa12-1.fna&_nc_gid=Azd72zb1JHOykmwVBEXBpta&oh=00_AYA0_uZJhj1BJdtZwP6ZQCYxHCPiCbQs0RneUOtefHfU5Q&oe=66FF4F78',
        'https://scontent.fmaa12-3.fna.fbcdn.net/v/t39.30808-6/457618008_1026122535975601_6364868587303567717_n.jpg?stp=dst-jpg_p526x296&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=GhdG-ewuEGwQ7kNvgE6ToV-&_nc_ht=scontent.fmaa12-3.fna&_nc_gid=Azd72zb1JHOykmwVBEXBpta&oh=00_AYBrit7Cd2scC5ixM6074oqkdQh-0nj9kOcxJL0vmRgPpA&oe=66FF7FDD',
        'https://scontent.fmaa12-1.fna.fbcdn.net/v/t39.30808-6/459616277_18032240348233948_8614826931966292225_n.jpg?stp=dst-jpg_p526x296&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=z6kowZP5IrIQ7kNvgH4maUT&_nc_ht=scontent.fmaa12-1.fna&_nc_gid=Am1j4Ijhk1OywdcZF67eOZz&oh=00_AYBebNnjGbCYyBsIgqaQ43S3MJtcXekWMqxJ0UuczAxnCg&oe=66FF6D32',
        'https://scontent.fmaa12-1.fna.fbcdn.net/v/t39.30808-6/458175957_18030791423233948_1271069445085681135_n.jpg?stp=dst-jpg_p526x296&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=LhmlRKptrGEQ7kNvgGtbpvc&_nc_ht=scontent.fmaa12-1.fna&_nc_gid=Azd72zb1JHOykmwVBEXBpta&oh=00_AYA0_uZJhj1BJdtZwP6ZQCYxHCPiCbQs0RneUOtefHfU5Q&oe=66FF4F78',
        'https://scontent.fmaa12-3.fna.fbcdn.net/v/t39.30808-6/457618008_1026122535975601_6364868587303567717_n.jpg?stp=dst-jpg_p526x296&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=GhdG-ewuEGwQ7kNvgE6ToV-&_nc_ht=scontent.fmaa12-3.fna&_nc_gid=Azd72zb1JHOykmwVBEXBpta&oh=00_AYBrit7Cd2scC5ixM6074oqkdQh-0nj9kOcxJL0vmRgPpA&oe=66FF7FDD',
        'https://scontent.fmaa12-1.fna.fbcdn.net/v/t39.30808-6/459616277_18032240348233948_8614826931966292225_n.jpg?stp=dst-jpg_p526x296&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=z6kowZP5IrIQ7kNvgH4maUT&_nc_ht=scontent.fmaa12-1.fna&_nc_gid=Am1j4Ijhk1OywdcZF67eOZz&oh=00_AYBebNnjGbCYyBsIgqaQ43S3MJtcXekWMqxJ0UuczAxnCg&oe=66FF6D32',
        'https://scontent.fmaa12-1.fna.fbcdn.net/v/t39.30808-6/458175957_18030791423233948_1271069445085681135_n.jpg?stp=dst-jpg_p526x296&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=LhmlRKptrGEQ7kNvgGtbpvc&_nc_ht=scontent.fmaa12-1.fna&_nc_gid=Azd72zb1JHOykmwVBEXBpta&oh=00_AYA0_uZJhj1BJdtZwP6ZQCYxHCPiCbQs0RneUOtefHfU5Q&oe=66FF4F78',
        'https://scontent.fmaa12-3.fna.fbcdn.net/v/t39.30808-6/457618008_1026122535975601_6364868587303567717_n.jpg?stp=dst-jpg_p526x296&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=GhdG-ewuEGwQ7kNvgE6ToV-&_nc_ht=scontent.fmaa12-3.fna&_nc_gid=Azd72zb1JHOykmwVBEXBpta&oh=00_AYBrit7Cd2scC5ixM6074oqkdQh-0nj9kOcxJL0vmRgPpA&oe=66FF7FDD',
    ];

    const videos = [
        {
            id: 1,
            title: 'Annual Day Celebration',
            url: 'https://www.youtube.com/embed/vFoWwbYDkEs?si=U6mNfh57FRDI6iUC', 
        },
    ];

    return (
        <div className="bg-white py-16" id='gallery'>
            <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-center mb-8 text-e04d46">Gallery</h1>

                <h2 className="text-2xl font-semibold mb-4 text-gray-800">School Events Images</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
                    {images.map((image, index) => (
                        <div key={index} className="bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                            <img src={image} alt={`Gallery Image ${index + 1}`} className="w-full h-48 object-cover" />
                        </div>
                    ))}
                </div>

                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Featured Videos</h2>
                <div className="mb-12">
                    {videos.map((video) => (
                        <div key={video.id} className="mb-8">
                            <h3 className="text-xl font-semibold mb-2">{video.title}</h3>
                            <iframe
                                title={video.title}
                                src={video.url}
                                width="100%"
                                height="315"
                                className="rounded-lg shadow-lg"
                                allowFullScreen
                            ></iframe>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery;

