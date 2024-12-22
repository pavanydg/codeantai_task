import React from "react";
import SideBar from "../components/SideBar";
import DashBoardHeader from "../components/DashBoardHeader";
import { projects } from "../constants";
import Project from "../components/Project";
import MobileBar from "../components/MobileBar";

export const DashBoard = () => {
    return (
        <div className="md:flex">
            {/* Sidebar */}
            <div className="hidden md:flex md:fixed">
                <SideBar />
            </div>
            <div className=" md:hidden md:fixed">
                <MobileBar/>
            </div>
            {/* Main content */}
            <div className="md:ml-60 bg-[#FAFAFA] w-full min-h-screen">
                <div className="bg-white font-inter md:m-6 border border-[#E9EAEB] rounded-xl flex flex-col">
                    <DashBoardHeader />
                    <div>
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="border border-b-0 border-r-0 border-l-0 px-6 py-6 hover:bg-[#F5F5F5] hover:cursor-pointer"
                            >
                                <Project
                                    title={project.title}
                                    visibility={project.visibility}
                                    techstack={project.techstack}
                                    size={project.size}
                                    updatedDay={project.updatedDay}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
