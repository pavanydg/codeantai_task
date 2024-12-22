import React from "react";
import search from "../assets/search.svg";
import { Plus, RefreshCw } from "lucide-react";
import Project from "./Project";
import { projects } from "../constants";

const DashBoardHeader = () => {
    return (
        <div className="bg-white font-inter px-6 pt-5">
            <div>
                <div className="lg:flex justify-between">
                    <div>
                        <div className="text-2xl font-semibold">
                            Repositories
                        </div>
                        <div className="text-sm md:text-base text-[#414651]">
                            33 total repositories
                        </div>
                    </div>
                    <div className="flex gap-2 mt-3 lg:mt-0">
                        <button className="flex text-sm w-32 h-10 shadow-md border border-[#D5D7DA] items-center justify-center gap-2 rounded-lg hover:bg-gray-200">
                            <RefreshCw />
                            Refresh All
                        </button>
                        <button className="flex text-sm w-40 h-10 shadow-md border border-[#D5D7DA] items-center justify-center gap-1 rounded-lg bg-[#1570EF] hover:bg-[#115cc5] text-white">
                            <Plus />
                            Add Repository
                        </button>
                    </div>
                </div>
                <div className="max-w-[366px] flex items-center border rounded-lg px-4 py-2 my-4 gap-3 shadow-sm border-[#D5D7DA] text-[#414651]">
                    <img src={search} alt="search" />
                    Search Repositories
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default DashBoardHeader;
