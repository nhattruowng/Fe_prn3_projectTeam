import React from "react";

const MainBlog: React.FC = () => {
    return (
        <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-screen-lg mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center group">
                    {/* Text Section */}
                    <div className="space-y-6 text-gray-600">
                        <p>
                            Simply Air Conditioning London are fixed system heating and air
                            conditioning installation specialists. Because we’ve tested all
                            heating and air conditioning unit manufacturers before using them
                            there are no hidden surprises for our customers. We only supply
                            air conditioning units from the leading manufacturers so any
                            system we fit will be of the highest quality.
                        </p>
                        <p>
                            We also provide tailored Air Conditioning installation packages.
                            The systems we install are all inverter driven therefore are
                            energy efficient, stylish & silent both providing cooling and
                            heating. At Zero Degree AC Limited we only use the best brands.
                        </p>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-700 mb-3">
                                Conditioning installation packages
                            </h3>
                            <ul className="list-disc marker:text-sky-400 space-y-2 pl-6">
                                <li>5 cups chopped Porcini mushrooms</li>
                                <li>1/2 cup of olive oil</li>
                                <li>3lb of celery</li>
                            </ul>
                        </div>
                    </div>

                    {/* Image Section with Overlay */}
                    <div className="relative flex items-end flex-col overflow-hidden group">
                        {/*/!* Text overlay *!/*/}
                        {/*<div className="absolute top-0 left-0 bg-blue-500 w-3/4 px-8 py-10 rounded-xl z-20 transition-all duration-500 group-hover:z-10 group-hover:opacity-0">*/}
                        {/*  <span className="block mb-6 font-bold text-white group-hover:text-orange-300">*/}
                        {/*    HERE WE ARE*/}
                        {/*  </span>*/}
                        {/*    <h2 className="text-white font-bold text-2xl leading-snug">*/}
                        {/*        What started as a tiny team mostly dedicated to Air Quality has grown.*/}
                        {/*    </h2>*/}
                        {/*</div>*/}

                        {/* Image */}
                        <div className="rounded-xl overflow-hidden z-10 transition-all duration-700 ease-in-out group-hover:z-20 group-hover:scale-105">
                            <img
                                src="https://picsum.photos/800/800"
                                alt="Conditioning Visual"
                                className="object-cover w-full h-auto transition-transform duration-700 ease-in-out"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainBlog;
