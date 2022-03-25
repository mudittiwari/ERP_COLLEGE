import React from "react";
import { CallOutlined } from "@material-ui/icons";
import { MailOutlined } from "@material-ui/icons";
import { PrintOutlined } from "@material-ui/icons";
import { LocationOnOutlined } from "@material-ui/icons";
function Footer() {
    return (
        <>
            <div className="w-full h-72 px-20 py-16 flex flex-col" style={{
                'backgroundColor': '#4475F2'
            }}>
                <div className="h-3/4 flex justify-between items-center w-full">
                    <div>
                        <h1 className="text-xl font-bold text-white">Contact Us</h1>
                        <p className="text-white text-sm my-6">Modern Institute of Technology & Research Centre <br />
                            6th Mile Stone, Village Jharkhera Sirmoli Road  <br />
                            Delhi Tijara State Highway   <br />
                            Alwar-301028
                        </p>
                    </div>
                    <div>
                        <div className="flex my-3">
                            <CallOutlined className="text-white mx-2 items-center" />
                            <h1 className="text-xs text-white">310-437-2766</h1>
                        </div>
                        <div className="flex my-3">
                            <MailOutlined className="text-white mx-2 items-center" />
                            <h1 className="text-xs text-white">unreal@outlook.com</h1>
                        </div>
                        <div className="flex my-3">
                            <LocationOnOutlined className="text-white mx-2 items-center" />
                            <h1 className="text-xs text-white">706 Campfire Ave. Meriden, CT 06450</h1>
                        </div>
                        <div className="flex my-3">
                            <PrintOutlined className="text-white mx-2 items-center" />
                            <h1 className="text-xs text-white">+1-212-9876543</h1>
                        </div>
                    </div>
                </div>
                <div className="h-1/4 flex justify-between mt-10">
                    <h1 className="text-xs text-white">
                        &copy; 2000-2021, All Rights Reserved
                    </h1>
                    <ul className="flex">
                        <li className="text-xs text-white mx-2">About Us</li>
                        <li className="text-xs text-white mx-2">Contact</li>
                        <li className="text-xs text-white mx-2">Privacy Policy</li>
                        <li className="text-xs text-white mx-2">Sitemap</li>
                    </ul>
                </div>

            </div>
        </>
    );
}

export default Footer;