import React from "react";

const Footer = () => {
    return (
        <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
            <div className="w-full flex flex-col items-center justify-center m-auto">
                <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">

                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start mt-60 ">
                        <div className="font-bold text-[16px] underline mb-6">About</div>

                        <p className="flex flex-row items-center my-[5px]"><span className="text-[15px] ml-[6px]"><a href="https://www.google.com/maps/place/JinuL+garage+spesialis+motor+INJEKSI+sport%26metic/@-7.672191,112.2544065,17z/data=!3m1!4b1!4m6!3m5!1s0x2e786927ab6458cb:0xd1d4dd5964b6f4b4!8m2!3d-7.6721963!4d112.2569814!16s%2Fg%2F11ghfqrpg3?entry=ttu">Jl. Wedani Kecamatan Ngoro</a></span></p>

                        <a href="https://www.google.com/maps/place/JinuL+garage+spesialis+motor+INJEKSI+sport%26metic/@-7.672191,112.2544065,17z/data=!3m1!4b1!4m6!3m5!1s0x2e786927ab6458cb:0xd1d4dd5964b6f4b4!8m2!3d-7.6721963!4d112.2569814!16s%2Fg%2F11ghfqrpg3?entry=ttu" className="flex flex-row items-center my-[5px]"><span className="text-[15px] ml-[6px]">Kabupaten Jombang</span></a>

                        <p className="flex flex-row items-center my-[5px]"><span className="text-[15px] ml-[6px]"><a href="https://www.google.com/maps/place/Jawa+Timur/@-6.9019615,110.9404378,7z/data=!3m1!4b1!4m6!3m5!1s0x2da393f79feeb5c5:0x1030bfbca7cb850!8m2!3d-7.5360639!4d112.2384017!16zL20vMDF2Zndk?entry=ttu">Jawa Timur</a></span></p>

                        <p className="flex flex-row items-center my-[5px] mb-40">
                            <span className="text-[15px] ml-[6px]">
                                <a href="https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=zanualvin06@gmail.com">zanualvin06@gmail.com</a>
                            </span>
                        </p>
                    </div>
                </div>

                <div className="mt-[30px] mb-[20px] text-[15px] text-center">
                    &copy; Znualvin 2024 Inc. All rights reserved
                </div>
            </div>
        </div>
    )
}

export default Footer
