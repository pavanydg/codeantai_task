import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { ChevronDown, Menu, X } from "lucide-react";
import { sideBarBottomElements, sideBarElements } from "../constants";

const MobileBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(1);

    const handleClick = (id) => {
        setActiveItem(id);
    };

    return (
        <>
            {/* Fixed top navigation bar */}
            <div className="fixed top-0 left-0 right-0 bg-white z-50">
                <div className="flex items-center justify-between p-4">
                    <div className="flex items-center font-light text-2xl gap-2">
                        <img src={logo} alt="logo" width={32} />
                        CodeAnt Ai
                    </div>
                    {!isOpen ? (
                        <Menu onClick={() => setIsOpen(true)} className="hover:cursor-pointer"/>
                    ) : (
                        <X onClick={() => setIsOpen(false)} className="hover:cursor-pointer"/>
                    )}
                </div>
            </div>

            {/* Add padding to prevent content from hiding behind fixed navbar */}
            <div className="h-[72px]"></div>

            {/* Dropdown menu */}
            {isOpen && (
                <>
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-40"
                        onClick={() => setIsOpen(false)}
                    ></div>
                    
                    <div className="flex flex-col gap-2 px-4 py-4 fixed top-[72px] bg-white w-full z-50 mt-[-5px]">
                        <div className="flex items-center border rounded-lg px-4 py-2 mb-3 justify-between shadow-sm border-[#D5D7DA]">
                            Pavan YDG
                            <ChevronDown />
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            {sideBarElements.map((item) => (
                                <div
                                    key={item.id}
                                    className={`flex gap-2 items-center font-inter text-[#414651] px-4 py-2 rounded-lg hover:cursor-pointer ${
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
                        <div>
                            {sideBarBottomElements.map((item) => (
                                <div
                                    key={item.id}
                                    className={`flex gap-2 items-center font-inter text-[#414651] px-4 py-2 rounded-lg hover:cursor-pointer ${
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
                </>
            )}
        </>
    );
};

export default MobileBar;