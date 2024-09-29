import React, { useState } from "react";
import "tailwindcss/tailwind.css";

const NewsletterPopup = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState("");

    const handleSubscribe = () => {
        // Placeholder for subscribe functionality
        alert(`Subscribed with: ${email}`);
        setEmail(""); // Clear the email input
        setIsOpen(false); // Close the popup
    };

    return (
        <div>
            <button
                onClick={() => setIsOpen(true)}
                className="bg-blue-600 text-white py-2 px-4 rounded-md mt-4"
            >
                Subscribe to Newsletter
            </button>

            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
                        <h2 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h2>
                        <p className="mb-4">Stay updated with the latest news and announcements!</p>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="border rounded-md p-2 w-full mb-4"
                            required
                        />
                        <div className="flex justify-between">
                            <button
                                onClick={handleSubscribe}
                                className="bg-blue-600 text-white py-2 px-4 rounded-md"
                            >
                                Subscribe
                            </button>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-gray-600 py-2 px-4 rounded-md"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NewsletterPopup;
