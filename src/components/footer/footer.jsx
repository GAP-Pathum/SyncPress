import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white bg-opacity-85 backdrop-blur-md text-black p-5 rounded-lg flex justify-between items-start flex-wrap">
            <div className="flex-1 m-1">
                <div className="max-w-xs">
                    <img src="src/assets/images/logo.png" alt="Logo" className="max-w-full" />
                </div>
            </div>
            
            <div className="flex-1 m-1">
                <ul className="list-none pt-7 mr-36">
                    <li className="my-1"><a href="/link1" className="text-black no-underline hover:underline transition duration-500 hover:text-blue-900">Home</a></li>
                    <li className="my-1"><a href="/link2" className="text-black no-underline hover:underline transition duration-500 hover:text-blue-900">About Us</a></li>
                    <li className="my-1"><a href="/link3" className="text-black no-underline hover:underline transition duration-500 hover:text-blue-900">Contact Us</a></li>
                </ul>
            </div>
            
            <div className="flex-1 m-1">
                <div className="mb-2"></div>
                <div>
                    <h3 className="mb-2">Subscribe to our newsletter</h3>
                    <form className="flex flex-col">
                        <input type="email" placeholder="Enter your email" className="p-2 mb-2 border-none rounded-md" />
                        <button type="submit" className="p-2 border-none rounded-md bg-red-600 text-white cursor-pointer hover:bg-gray-500">Subscribe</button>
                    </form>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
