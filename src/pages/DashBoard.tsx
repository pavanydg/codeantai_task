import React from "react";
import SideBar from "../components/SideBar";
import Repository from "../components/Repository";

export const DashBoard = () => {
    return <div className="flex">
        <div>
            <SideBar />
        </div>
        <div>
            <Repository />
        </div>
    </div>;
};
