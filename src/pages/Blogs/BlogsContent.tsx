import React from "react";
import { Button } from "@/components/ui/button";

import heroImg from "@/assets/blogmainimg.jpg";
import blogImg from "@/assets/blogsmainimg1.svg";
import farmgirl from "@/assets/Farmgirl.png";
import layer1 from "@/assets/Layer1.png";
import layer2 from "@/assets/Layer2.png";
import layer3 from "@/assets/Layer3.png";
import blue from "@/assets/blue_moonglade.png";
import green from "@/assets/green_moonglade.png";
import red from "@/assets/red_moonglade.png";

import blogImg1 from "@/assets/img1.png";
import blogImg2 from "@/assets/img4.png";
import blogImg3 from "@/assets/img2.jpg";
import blogImg4 from "@/assets/img3.jpg";
import Contact from "@/assets/zeusimg.jpg";

export default function Blog() {
    return (
        <div className=" text-white w-full overflow-hidden bg-black">

            {/* ================= NAVBAR ================= */}


            <section className="relative w-full">
                <img
                    src={blogImg}
                    alt="Hero"
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    className="w-full h-[850px] mt-0 object-cover brightness-150 "
                />

                <div className="absolute inset-0 " />

                {/* TEXT — BOTTOM ALIGNED */}
                <div className="absolute bottom-[120px] left-1/2 -translate-x-1/2 text-center max-w-[900px] px-6">
                    <h1 className="text-white text-[28px] md:text-[36px] font-bold leading-tight uppercase tracking-wider">
                        INDUSTRY INSIGHTS, USEFUL READS, AND UPDATES FROM
                        <br />
                        OUR LATEST WORK SHARED REGULARLY.
                    </h1>
                </div>
            </section>

            {/* ================= BLOG INTRO ================= */}
            <main className="bg-black text-white overflow-hidden">

                {/* ================= HERO SECTION ================= */}
                <section className="relative bg-[#2c0345c7] overflow-hidden">
                    {/* ANGLED CUT */}
                    <div
                        className="
      absolute bottom-[40px] left-0 w-full
      h-[1020px]
      bg-black
      origin-bottom-left
      -skew-y-[15deg]
      -z-0
    "
                    />
                    {/* Overlay */}


                    {/* CONTENT */}
                    <div className="relative z-10 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-[80px] min-h-[95vh]">

                        {/* LEFT: TEXT */}
                        <div className="text-left max-w-[700px] lg:ml-20 lg:w-[550px]">
                            <h1 className="text-3xl lg:text-5xl mb-8">GAME ART</h1>

                            <p className="uppercase tracking-widest text-sm md:text-base lg:text-xl text-gray-300 opacity-60">
                                Strong visuals play a major role in a game’s success. This article
                                breaks down how to evaluate a game art studio, what to look for in
                                their process, and why visual quality directly affects player
                                experience.
                            </p>
                        </div>

                        {/* RIGHT: IMAGE (CENTERED) */}
                        <div className="hidden lg:flex justify-end items-center">
                            <img
                                src={farmgirl}
                                alt="Character"
                                loading="lazy"
                                decoding="async"
                                className="h-[550px] object-contain lg:"
                            />
                        </div>

                    </div>
                </section>


                {/* ================= CONTENT SECTION ================= */}
                <section className="relative bg-[#2c0345c7] overflow-hidden">
                    {/* ANGLED CUT */}

                    {/* ITEM 1 */}
                    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-32 lg:mt-40 lg:mb-40">
                        <div>
                            <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold mb-4 ">
                                Lorem Ipsum is simply dummy text dummy text
                            </h2>
                            <p className="text-gray-400 mb-4 leading-relaxed lg:text-xl">
                                Lorem ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem ipsum has been the industry's standard dummy text
                                ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book.
                            </p>
                            <p className="text-gray-400 mb-6 text-sm lg:text-xl">
                                Lorem ipsum is simply dummy text of the printing and typesetting
                                industry.
                            </p>
                            <Button variant="slanted" size="default" className="px-6 font-heading text-lg">
                                Read More
                            </Button>
                        </div>

                        <div className="flex justify-center">
                            <img
                                src={layer1}
                                alt="Art"
                                loading="lazy"
                                decoding="async"
                                className=" w-[350px] md:w-[320px] lg:w-[450px] rounded-full"
                            />
                        </div>
                    </div>

                    {/* ITEM 2 (REVERSED) */}
                    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-32 lg:pt-40 lg:mb-40">
                        <div className="order-2 lg:order-1 flex justify-center">
                            <img
                                src={layer2}
                                alt="Art"
                                loading="lazy"
                                decoding="async"
                                className="w-[260px] md:w-[320px]  lg:w-[450px] rounded-full"
                            />
                        </div>

                        <div className="order-1 lg:order-2">
                            <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold mb-4">
                                Lorem Ipsum is simply dummy text dummy text
                            </h2>
                            <p className="text-gray-400 mb-4 leading-relaxed lg:text-xl">
                                Lorem ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem ipsum has been the industry's standard dummy text
                                ever since the 1500s.
                            </p>
                            <p className="text-gray-400 mb-6 text-sm lg:text-xl">
                                Lorem ipsum is simply dummy text of the printing and typesetting
                                industry.
                            </p>
                            <Button variant="slanted" size="default" className="px-6 font-heading text-lg">
                                Read More
                            </Button>
                        </div>
                    </div>

                    {/* ITEM 3 */}
                    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center lg:pt-40 lg:pb-10">
                        <div>
                            <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold mb-4">
                                Lorem Ipsum is simply dummy text dummy text
                            </h2>
                            <p className="text-gray-400 mb-4 leading-relaxed lg:text-xl">
                                Lorem ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem ipsum has been the industry's standard dummy text.
                            </p>
                            <p className="text-gray-400 mb-6 text-sm lg:text-xl">
                                Lorem ipsum is simply dummy text of the printing and typesetting
                                industry.
                            </p>
                            <Button variant="slanted" size="default" className="px-6 font-heading text-lg">
                                Read More
                            </Button>
                        </div>

                        <div className="flex justify-center">
                            <img
                                src={layer3}
                                alt="Art"
                                loading="lazy"
                                decoding="async"
                                className="w-[260px] md:w-[320px] lg:w-[450px] rounded-full"
                            />
                        </div>
                    </div>
                </section>
            </main>


            {/* temporary comment
            <section className="relative bg-[#220236] overflow-hidden">

                
                <div
                    className="
      absolute bottom-[-860px] left-0 w-full
      h-[1520px]
      bg-black
      origin-bottom-left
      -skew-y-[15deg]
      z-0
      pointer-events-none
    "
                />

                
                <div className="relative z-10 max-w-[1400px] mx-auto
                  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
                  gap-[64px]
                  pt-[520px] pb-[180px] px-6">
                    <div className="group]">
                        <div className="overflow-hidden mb-6">
                            <img
                                src={blue}
                                alt=""
                                className="w-full aspect-[16/10] object-cover lg:h-[320px] "
                            />
                        </div>

                        <h3 className="text-[22px] font-semibold mb-4 leading-[30px]">
                            Lorem Ipsum is simply dummy text dummy text
                        </h3>

                        <p className="text-[14px] text-gray-300 leading-[24px]">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book.
                        </p>
                    </div>

                    
                    <div className="group">
                        <div className="overflow-hidden rounded-[16px] mb-6">
                            <img
                                src={green}
                                alt=""
                                className="w-full aspect-[16/10] object-cover lg:h-[320px]"
                            />
                        </div>

                        <h3 className="text-[22px] font-semibold mb-4 leading-[30px]">
                            Lorem Ipsum is simply dummy text dummy text
                        </h3>

                        <p className="text-[14px] text-gray-300 leading-[24px]">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book.
                        </p>
                    </div>

                    
                    <div className="group">
                        <div className="overflow-hidden rounded-[16px] mb-6">
                            <img
                                src={red}
                                alt=""
                                className="w-full aspect-[16/10] object-cover lg:h-[320px]"
                            />
                        </div>

                        <h3 className="text-[22px] font-semibold mb-4 leading-[30px]">
                            Lorem Ipsum is simply dummy text dummy text
                        </h3>

                        <p className="text-[14px] text-gray-300 leading-[24px]">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book.
                        </p>
                    </div>

                </div>
            </section>
            
            */}

            {/* ================= FOOTER ================= */}

        </div>

    );
}
