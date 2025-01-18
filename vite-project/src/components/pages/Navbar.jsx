import React from "react";

const Navbar = () => {
    return (
        <nav className="bg-white border-b shadow-sm">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo */}
                <a href="/" className="text-2xl font-bold text-gray-800">
                Promptify
                </a>

                {/* Links */}
                <div className="flex space-x-6">
                    <a
                        href="/"
                        className="text-gray-600 hover:text-gray-900 transition duration-150"
                    >
                        Home 🏠
                    </a>
                    <a
                        href="/contact"
                        className="text-gray-600 hover:text-gray-900 transition duration-150"
                    >
                        Contact 📧
                    </a>
                    <a
                        href="/about"
                        className="text-gray-600 hover:text-gray-900 transition duration-150"
                    >
                        About Us
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
