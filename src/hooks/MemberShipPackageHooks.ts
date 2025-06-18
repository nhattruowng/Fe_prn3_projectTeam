import type {GetAllMembershipPackageRequest} from "../modole/request/GetAllMembershipPackageRequest.ts";
import {useEffect, useState} from "react";
import type {MemberShipPackageRespont} from "../modole/respont/MemberShipPackageRespont.ts";
import {GetMemberShipPackageApi} from "../api/MemberShipPackageApi.ts";

export const useGetAllMembershipPackage = (
    requestParams: GetAllMembershipPackageRequest
) => {
    const [data, setData] = useState<MemberShipPackageRespont>();
    const [message, setMessage] = useState<string>();
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const res = await GetMemberShipPackageApi(requestParams);
                setData(res);
            } catch (error) {
                setMessage("Lỗi khi tải dữ liệu");
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [requestParams]);

    return { data, loading, message };
};