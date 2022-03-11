import React from "react";
import { LanguageSharp, Call, Email, CalendarToday, AccessTime, Person } from "@material-ui/icons";
import logo from '../assets/logo.png';
function Navbar() {
    return (
        <>
            <div className="w-full h-14 flex items-center justify-between" style={{ 'backgroundColor': '#2E86C1' }}>
                <div className="flex w-3/4 px-4">
                    <div className="ml-1">
                        <Email className="text-white mx-2" />
                        <span className="text-white">erp@mitrc.ac.in</span>
                    </div>
                    <div className="ml-1">
                        <Call className="text-white mx-2" />
                        <span className="text-white">+91-9999999999</span>
                    </div>
                    <div className="ml-1">
                        <LanguageSharp className="text-white mx-2" />
                        <span className="text-white">www.mitrc.ac.in</span>
                    </div>
                </div>
                <div className="flex w-1/2 justify-end px-4">
                    <div className="mr-1">
                        <CalendarToday className="text-white mx-2" />
                        <span className="text-white">4 MARCH 2022</span>
                    </div>
                    <div className="mr-1">
                        <AccessTime className="text-white mx-2" />
                        <span className="text-white ">12:08:00</span>
                    </div>
                </div>
            </div>
            <div className="w-full h-max flex items-center justify-between px-5">
                <img src={logo} alt="" />
                <AccessTime className="text-white mx-2" />
                <button className="text-white px-2 py-1" style={{ 'backgroundColor': '#FF944A' }}
                >    <Person className="text-white mr-2" />
                    <span className="text-xs">Admin Login</span></button>
            </div>
        </>
    );
}


export default Navbar;