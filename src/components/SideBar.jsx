import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { ChevronDown } from "lucide-react";
import { sideBarElements } from "../constants";
import { sideBarBottomElements } from "../constants";
const SideBar = () => {
    const [activeItem, setActiveItem] = useState(1);

    const handleClick = (id) => {
        setActiveItem(id);
    };

    return (
        <div className="w-60 flex flex-col h-svh justify-between py-4 px-4 border border-[#E9EAEB]">
            <div>
                <div className="flex items-center font-light text-2xl gap-2 ">
                    <img src={logo} alt="logo" width={32} />
                    CodeAnt Ai
                </div>
                <div className="w-48 flex items-center border rounded-lg px-4 py-2 my-4 justify-between shadow-sm border-[#D5D7DA]">
                    Pavan YDG
                    <ChevronDown />
                </div>
                <div className="flex flex-col gap-2">
                    {sideBarElements.map((item) => (
                        <div
                            key={item.id}
                            className={`flex gap-2 items-center font-inter text-[#414651] w-48 px-4 py-2 rounded-lg hover:cursor-pointer ${
                                activeItem === item.id
                                    ? "bg-[#1570EF] text-white"
                                    : ""
                            }`}
                            onClick={() => {
                                handleClick(item.id);
                            }}
                        >
                            <div>
                                <img
                                    src={item.icon}
                                    alt={item.icon}
                                    width={20}
                                    height={20}
                                    style={{
                                        filter:
                                            activeItem === item.id
                                                ? "invert(1)"
                                                : "none",
                                    }}
                                />
                            </div>
                            <div className="text-base font-semibold">
                                {item.text}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-2">
                {sideBarBottomElements.map((item) => (
                    <div
                        key={item.id}
                        className={`flex gap-2 items-center font-inter text-[#414651] w-48 px-4 py-2 rounded-lg hover:cursor-pointer ${
                            activeItem === item.id
                                ? "bg-[#1570EF] text-white"
                                : ""
                        }`}
                        onClick={() => {
                            handleClick(item.id);
                        }}
                    >
                        <div>
                            <img
                                src={item.icon}
                                alt={item.icon}
                                width={20}
                                height={20}
                                style={{
                                    filter:
                                        activeItem === item.id
                                            ? "invert(1)"
                                            : "none",
                                }}
                            />
                        </div>
                        <div className="text-base font-semibold">
                            {item.text}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SideBar;
