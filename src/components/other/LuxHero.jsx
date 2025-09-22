import React from 'react';
import vennD from '../../assets/vennD.png';

const LuxHero = () => {
    return (
        <div className="bg-[#16191e] text-white min-h-screen flex flex-col justify-center items-center px-4 py-8">
            {/* Desktop Layout */}
            <div className="hidden md:block w-full max-w-6xl">
                <div className="text-center mb-16">
                    {/* First Row - WE BELIEVE with images */}
                    <div className="flex items-center justify-center mb-8">
                        <div className="w-24 h-24 bg-gray-600 mr-6">
                            <img src="https://cdn.prod.website-files.com/62cdfd11dfb27b3fbe70e0b6/62d1fbbc0e07ab0b21c04fa2_about-1.webp" alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className="w-36 h-24 bg-gray-600 mr-8">
                            <img src="https://cdn.prod.website-files.com/62cdfd11dfb27b3fbe70e0b6/62d1fbc01f56220fa98b8d18_about-2.webp" alt="" className="w-full h-full object-cover" />
                        </div>
                        <h1 className="md:text-7xl lg:text-8xl font-semibold tracking-wider">WE BELIEVE</h1>
                    </div>

                    {/* Second Row - BEFORE with images and Venn diagram */}
                    <div className="flex items-center justify-center mb-8">
                        <div className="w-44 h-24 bg-gray-600 mr-6">
                            <img src="https://cdn.prod.website-files.com/62cdfd11dfb27b3fbe70e0b6/62d2077caf5e2e92ba9905fa_about-3.webp" alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className="w-24 h-24 mr-6">
                            <img src="https://cdn.prod.website-files.com/62cdfd11dfb27b3fbe70e0b6/62d2077c727756c75e68d92a_about-4.webp" alt="" className="w-full h-full object-cover rounded-full" />
                        </div>
                        <h1 className="md:text-7xl lg:text-8xl  font-semibold  tracking-wider mr-8">BEFORE</h1>
                        <div className="w-36 flex items-center justify-center">
                            <img className='w-32' src={vennD} alt="" />
                        </div>
                    </div>

                    {/* Third Row - OTHERS UNDERSTAND with image */}
                    <div className="flex items-center justify-center mb-12">
                        <h1 className="md:text-7xl lg:text-8xl  font-semibold  tracking-wider mr-8">OTHERS</h1>
                        <div className="w-48 h-24 bg-gray-600 mr-6">
                            <img src="https://cdn.prod.website-files.com/62cdfd11dfb27b3fbe70e0b6/62d2077ce20c181d7578b1be_about-6.webp" alt="" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    <div className="mb-12">
                        <h1 className="md:text-7xl lg:text-8xl  font-semibold  tracking-wider">UNDERSTAND</h1>
                    </div>

                    {/* Subtitle */}
                    <p className="text-xl mb-8 font-light">
                        Learn why we bet big on the biggest ideas.
                    </p>

                    {/* CTA Button */}
                    <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 text-lg flex items-center mx-auto transition-colors">
                        SHOW ME WHAT LUX STANDS FOR
                        <svg className="ml-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Layout (below md) */}
            <div className="block md:hidden w-full max-w-md">
                <div className="text-center">
                    {/* WE BELIEVE */}
                    <div className="mb-8">
                        <h1 className="text-6xl font-semibold tracking-wider mb-6">WE BELIEVE</h1>
                        <div className="flex justify-center space-x-4 mb-6">
                            <div className="w-24 h-24 bg-gray-600">
                                <img src="https://cdn.prod.website-files.com/62cdfd11dfb27b3fbe70e0b6/62d1fbbc0e07ab0b21c04fa2_about-1.webp" alt="" className="w-full h-full object-cover" />
                            </div>
                            <div className="w-36 h-24 bg-gray-600">
                                <img src="https://cdn.prod.website-files.com/62cdfd11dfb27b3fbe70e0b6/62d1fbc01f56220fa98b8d18_about-2.webp" alt="" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>

                    {/* BEFORE */}
                    <div className="mb-8">
                        <h1 className="text-6xl font-semibold tracking-wider mb-6">BEFORE</h1>
                        <div className="flex justify-center items-center space-x-4 mb-6">
                            <div className="w-48 h-24 bg-gray-600">
                                <img src="https://cdn.prod.website-files.com/62cdfd11dfb27b3fbe70e0b6/62d2077caf5e2e92ba9905fa_about-3.webp" alt="" className="w-full h-full object-cover" />
                            </div>
                            <div className="w-24 h-24 ">
                                <img src="https://cdn.prod.website-files.com/62cdfd11dfb27b3fbe70e0b6/62d2077c727756c75e68d92a_about-4.webp" alt="" className="w-full h-full object-cover rounded-full" />
                            </div>
                            <div className="w-36 flex items-center justify-center">
                                <img className='w-36' src={vennD} alt="" />
                            </div>
                        </div>
                    </div>

                    {/* OTHERS */}
                    <div className="mb-8">
                        <h1 className="text-6xl font-semibold tracking-wider mb-6">OTHERS</h1>
                        <div className="flex justify-center mb-6">
                            <div className="w-48 h-24 bg-gray-600">
                                <img src="https://cdn.prod.website-files.com/62cdfd11dfb27b3fbe70e0b6/62d2077ce20c181d7578b1be_about-6.webp" alt="" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>

                    {/* UNDERSTAND */}
                    <div className="mb-12">
                        <h1 className="text-5xl font-bold tracking-wider">UNDERSTAND</h1>
                    </div>

                    {/* Subtitle */}
                    <p className="text-lg mb-8 font-light">
                        Learn why we bet big on the biggest ideas.
                    </p>

                    {/* CTA Button */}
                    <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 text-base flex items-center mx-auto transition-colors">
                        SHOW ME WHAT LUX STANDS FOR
                        <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LuxHero;
