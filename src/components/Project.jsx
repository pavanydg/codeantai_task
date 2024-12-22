import React from "react";
import database from "../assets/database.svg";

const Project = ({ title, visibility, techstack, size, updatedDay }) => {
    return (
        <div className="font-inter">
            <div className="flex items-center gap-4 mb-3">
                <div className="text-lg md:text-xl font-medium">{title}</div>
                <div className="w-14 h-6 bg-[#EFF8FF] border border-[#B2DDFF] flex justify-center text-[#175CD3] text-sm items-center rounded-full">
                    {visibility}
                </div>
            </div>
            <div className="text-sm md:text-base flex gap-10">
                <div className="flex items-center gap-2">
                    {techstack} <div className="w-2 h-2 bg-[#1570EF] rounded-full"></div>
                </div>
                <div className="flex gap-2 items-center">
                    <img src={database} alt="database" height={12} className="h-3" />
                    {size}
                </div>
                <div>Updated {updatedDay} day ago</div>
            </div>
        </div>
    );
};

export default Project;
