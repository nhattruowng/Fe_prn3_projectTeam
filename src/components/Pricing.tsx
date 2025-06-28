import {useGetAllMembershipPackage} from "../hooks/MemberShipPackageHooks.ts";
import type {MembershipPackageRequest} from "../modole/request/MembershipPackageRequest.ts";
import React, {useEffect, useMemo} from "react";
import {useCheckUserExist} from "../utils/UnitAuthentication.ts";
import {useNavigate} from "react-router-dom";
import type {MemberShipPackageResponse} from "../modole/respont/MemberShipPackageRespont.ts";

export const Pricing: React.FC = () => {

    const checkUser = useCheckUserExist();

    const navigate = useNavigate();

    const filter = useMemo<MembershipPackageRequest>(() => ({
        PageNumber: 1,
        PageSize: 3,
        Name: "",
        Type: null,
        Description: ""
    }), []);
    const {data, loading, run} = useGetAllMembershipPackage();

    useEffect(() => {
        run(filter);
    }, [filter]);

    const handleClick = () => {
        navigate(checkUser ? "/" : "/login");
    };
    const parseFeatures = (features: string): string[] => {
        return features ? features.split(',').map(feature => feature.trim()) : [];
    };

    return (
        <section className="px-4 sm:px-8 py-24 bg-gray-50">
            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <div
                        className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
            ) : (
                <>
                    <div className="container mx-auto text-center">
                        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">Dịch vụ</h2>
                        <p className="text-base text-gray-500 mb-8 max-w-2xl mx-auto">
                            Khám phá các gói dịch vụ của chúng tôi với mức giá hợp lý và nhiều lợi ích.
                        </p>
                    </div>
                    <div className="mt-12 max-w-7xl mx-auto">
                        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {data?.items.map((plan: MemberShipPackageResponse, index: number) => (
                                <div
                                    key={plan.id || index}
                                    className="flex flex-col rounded-xl bg-white shadow-lg border border-gray-200 transition-transform hover:scale-105"
                                >
                                    <div className="p-6">
                                        <h5 className="text-xl font-semibold text-gray-900 capitalize">
                                            {plan.name || plan.type}
                                        </h5>
                                        <p className="text-sm text-gray-500 mt-2">{plan.description}</p>
                                        <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mt-4 flex items-end gap-1">
                                            {plan.price}
                                            {plan.price !== 'Contact us for a quote' && (
                                                <span
                                                    className="text-base opacity-70 -mb-1">/{plan.durationMonths} tháng</span>
                                            )}
                                        </h3>
                                    </div>
                                    <div className="p-6 border-t border-gray-100">
                                        <ul className="flex flex-col gap-3">
                                            {parseFeatures(plan.features).map((feature, idx) => (
                                                <li key={idx} className="flex items-center gap-3 text-gray-700">
                                                    <svg
                                                        className="h-4 w-4 text-gray-900 flex-shrink-0"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="2"
                                                        stroke="currentColor"
                                                        aria-hidden="true"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M4.5 12.75l6 6 9-13.5"
                                                        />
                                                    </svg>
                                                    <p className="text-sm">{feature}</p>
                                                </li>
                                            ))}
                                        </ul>
                                        <button
                                            className="mt-6 w-full py-2.5 px-4 text-xs font-bold text-green-500 uppercase border border-green-500 rounded-lg hover:bg-green-50 focus:ring focus:ring-green-200 active:opacity-85 transition-colors"
                                            type="button"
                                            onClick={handleClick}

                                        >
                                            Đăng ký
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </section>
    );
};