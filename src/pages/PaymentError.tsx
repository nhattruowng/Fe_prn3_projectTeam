import React from "react";
import {Link} from "react-router-dom";

export const PaymentError: React.FC = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="bg-white p-6 md:mx-auto rounded-md shadow-md w-full max-w-md">
                <svg
                    viewBox="0 0 24 24"
                    className="text-red-600 w-16 h-16 mx-auto my-6"
                >
                    <path
                        fill="currentColor"
                        d="M11.001 10h2v5h-2zm0-4h2v2h-2zM12 0C5.373 0 0 5.373 0 12c0 6.627
                        5.373 12 12 12s12-5.373 12-12c0-6.627-5.373-12-12-12zm0
                        22c-5.514 0-10-4.486-10-10S6.486 2 12 2s10 4.486 10
                        10-4.486 10-10 10z"
                    />
                </svg>

                <div className="text-center">
                    <h3 className="text-2xl font-semibold text-red-600">
                        Payment Failed!
                    </h3>
                    <p className="text-gray-600 my-2">
                        Unfortunately, your payment could not be processed.
                    </p>
                    <p>Please try again later or contact support.</p>

                    <div className="py-10 text-center">
                        <Link
                            to="/"
                            className="px-12 bg-red-600 hover:bg-red-500 text-white font-semibold py-3 rounded"
                        >
                            GO HOME
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
