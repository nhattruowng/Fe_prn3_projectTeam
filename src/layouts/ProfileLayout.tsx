import React from "react";
import {Outlet} from "react-router-dom";

const ProfileLayout: React.FC = () => {
    return (
        <>
            <Outlet/>
        </>
    );
}

export default ProfileLayout;