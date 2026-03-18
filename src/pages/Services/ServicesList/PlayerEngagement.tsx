
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import j2 from "@/assets/Chinese-game-imgs/c6.png";
import imgMain from "@/assets/Dragon-Eye.png";                // TOP LEFT LARGE
import imgWide from "@/assets/Dragon-Eye.png";                // WIDE IMAGE BELOW BUTTONS
import imgSmall from "@/assets/Dragon-Eye.png";              // BOTTOM LEFT SMALL IMAGE
import imgTall from "@/assets//Dragon-Eye.png";                // BOTTOM MIDDLE TALL IMAGE
import imgRight from "@/assets/Dragon-Eye.png";              // BOTTOM RIGHT IMAGE
import ctaBg from "@/assets/Dragon-Eye.png";                    // CTA BACKGROUND IMAGE
import expImg from "@/assets/Isis.png"; // your Cleopatra-style art image

// 🔥 Replace these imports with your card background images + icons
import bg1 from "@/assets/Dragon-Eye.png";
import bg2 from "@/assets/Dragon-Eye.png";
import bg3 from "@/assets/Dragon-Eye.png";
import bg4 from "@/assets/Dragon-Eye.png";
import bg5 from "@/assets/Dragon-Eye.png";
import bg6 from "@/assets/Dragon-Eye.png";

import icon1 from "@/assets/Dragon-Eye.png";
import icon2 from "@/assets/Dragon-Eye.png";
import icon3 from "@/assets/Dragon-Eye.png";
import icon4 from "@/assets/Dragon-Eye.png";
import icon5 from "@/assets/Dragon-Eye.png";
import icon6 from "@/assets/Dragon-Eye.png";

import techstack from "@/assets/techstack.svg"

import Symbol1 from "@/assets/Symbol1.png"
import Symbol2 from "@/assets/Symbol2.png"
import Symbol3 from "@/assets/Symbol3.png"
import Symbol4 from "@/assets/Symbol4.png"
import Symbol5 from "@/assets/Symbol5.png"


const services = [
  {
    title: "Concept Art",
    text: "Lorem ipsum is a dummy text Lorem ipsum is a dummy text Lorem ipsum is a dummy.",
    image: bg1,
    icon: icon1,
  },
  {
    title: "Character Design",
    text: "Lorem ipsum is a dummy text Lorem ipsum is a dummy text Lorem ipsum is a dummy.",
    image: bg2,
    icon: icon2,
  },
  {
    title: "Environment Design",
    text: "Lorem ipsum is a dummy text Lorem ipsum is a dummy text Lorem ipsum is a dummy.",
    image: bg3,
    icon: icon3,
  },
  {
    title: "Game Elements Design",
    text: "Lorem ipsum is a dummy text Lorem ipsum is a dummy text Lorem ipsum is a dummy.",
    image: bg4,
    icon: icon4,
  },
  {
    title: "Game Logotypes",
    text: "Lorem ipsum is a dummy text Lorem ipsum is a dummy text Lorem ipsum is a dummy.",
    image: bg5,
    icon: icon5,
  },
  {
    title: "Illustration",
    text: "Lorem ipsum is a dummy text Lorem ipsum is a dummy text Lorem ipsum is a dummy.",
    image: bg6,
    icon: icon6,
  },
];


export default function PlayerEngagement() {
  return (
    <PageLayout>
      <section className="relative min-h-[100vh] mt-20 bg-black overflow-hidden">
        {/* BG IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center h-[85vh] lg:h-[100vh] scale-105 brightness-[0.90]"
          style={{ backgroundImage: `url(${j2})` }}
        />

        {/* GLOBAL DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/40" />

        {/* RADIAL VIGNETTE */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0)_20%,rgba(0,0,0,0.75)_100%)]" />
        </div>

        {/* STRONG SIDE GRADIENT (LEFT → RIGHT) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/9 via-black/7 to-transparent" />

        {/* TOP FADE */}
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black to-transparent" />

        {/* BOTTOM FADE */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:py-24 py-36">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">


            {/* RIGHT CONTENT */}
            <div className="text-left lg:text-left my-10 mx-2">
              <h2 className="text-6xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-purple-500 via-indigo-400 to-cyan-300
                 bg-clip-text text-transparent mb-6 drop-shadow-[0_0_20px_rgba(0,0,0,0.7)]">
                Animation
              </h2>

              <p className="text-gray-300 text-xl sm:text-xl leading-relaxed max-w-xl lg:ml-auto mb-6 drop-shadow-md">
                At this moment, we currently do not have any vacancies available.
                However, we’re always eager to connect with talented individuals who
                are passionate about game development, digital production, and
                creative innovation.
              </p>

              <p className="text-gray-300 text-lg sm:text-xl leading-relaxed max-w-xl lg:ml-auto mb-10 drop-shadow-md">
                Please feel free to check back regularly for future opportunities or
                send us your resume for upcoming positions.
              </p>

              {/* BUTTON */}
              <Button variant="slanted" className="w-36">
                <a href="/contact" className="tracking-wide font-heading text-xl">Get in Touch</a>
              </Button>
            </div>

          </div>
        </div>
      </section>

      <section className="w-full bg-[#0c0c0c] text-white py-24 px-4 md:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT — TEXT BLOCK */}
          <div>
            <h2 className="text-4xl md:text-7xl font-bold tracking-wider my-10">
              5+ YEARS OF Experience
            </h2>

            <p className="text-gray-400 leading-relaxed text-xl md:text-2xl max-w-2xl">
              At Moonglade, we bring over 5+ years of hands-on experience in
              game art and visual design, with a strong commitment to quality,
              accuracy, and on-time delivery. Our team specializes in creating
              trendy and industry-relevant 2D game art styles, including character
              design, environments, concept art, detailed 2D/3D assets, VFX, and
              smooth animations providing complete visual support for your game
              from idea to launch.
            </p>
          </div>

          {/* RIGHT — IMAGE WITH GOLD FRAME */}
          <div className="flex justify-center">
            <div className="relative w-[300px] md:w-[380px] lg:w-[420px]">

              {/* GOLD FRAME (Image wrapper) */}
              <div className="absolute inset-0 -z-10">
                {/* You can also use an imported PNG border if you have one */}
                <img
                  src={expImg}
                  alt="Experience Image"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              {/* IMAGE ITSELF */}
              <img
                src={expImg}
                alt="Experience"
                className="w-full h-full "
              />
            </div>
          </div>

        </div>
      </section>

      <section className="w-full bg-[#0c0c0c] text-white py-20 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <h2 className="text-4xl md:text-7xl font-bold text-center mb-4 tracking-wide">
            GAME ART Portfolio
          </h2>

          <p className="text-gray-400 text-center text-xl md:text-2xl max-w-6xl mx-auto leading-relaxed mb-16">
            Moonglade artists create assets across all popular game art styles,
            from doodle art to monochromatic designs. Our successful projects
            reflect a strong balance of creativity and experience. Here are some
            notable examples of our 2D game art.
          </p>


          {/* ---------- TOP ROW ---------- */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">

            {/* LEFT BIG IMAGE */}
            <div className="relative">
              <img
                src={imgMain}
                alt="Main Art"
                className="w-full h-full object-cover"
              />

              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-xl">
                <p className="text-gray-300 text-sm">
                  Lorem ipsum is a dummy text. Lorem ipsum is a dummy Lorem ipsum
                  is a dummy text. Lorem ipsum is a dummy.
                </p>
              </div>
            </div>

            {/* RIGHT BUTTON PANEL */}
            <div className="bg-[#111]  p-8 grid grid-cols-2 gap-4 h-fit">
              <button className="bg-[#1a1a1a] border border-gray-600 py-5 hover:bg-white hover:text-black transition text-xl">Character Design</button>
              <button className="bg-[#1a1a1a] border border-gray-600 py-5 hover:bg-white hover:text-black transition text-xl">Environment Design</button>
              <button className="bg-[#1a1a1a] border border-gray-600 py-5 hover:bg-white hover:text-black transition text-xl">Game Elements Design</button>
              <button className="bg-[#1a1a1a] border border-gray-600 py-5 hover:bg-white hover:text-black transition text-xl">Game Logotypes</button>
              <button className="bg-[#1a1a1a] border border-gray-600 py-5 hover:bg-white hover:text-black transition text-xl">Game UI</button>
              <button className="bg-[#1a1a1a] border border-gray-600 py-5 hover:bg-white hover:text-black transition text-xl">Slot Art</button>
            </div>
          </div>


          {/* ---------- WIDE IMAGE ---------- */}
          <div className="mb-10">
            <img
              src={imgWide}
              alt="Wide artwork"
              className="w-full h-full rounded-xl object-cover"
            />
          </div>


          {/* ---------- BOTTOM GRID ---------- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

            {/* LEFT COLUMN */}
            <div className="space-y-8">

              <img
                src={imgSmall}
                alt="Art small"
                className="w-full rounded-xl object-cover"
              />

              {/* CTA BOX */}
              <div className="relative rounded-xl overflow-hidden">

                {/* CTA BG IMAGE */}
                <img
                  src={ctaBg}
                  alt="CTA background"
                  className="w-full h-full object-cover"
                />

                {/* Black overlay 80% */}
                <div className="absolute inset-0 bg-black/80"></div>

                {/* CTA CONTENT */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <p className="text-lg font-semibold mb-3">
                    Lets Work <br /> Together
                  </p>
                  <button className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition">
                    Get started
                  </button>
                </div>
              </div>
            </div>

            {/* MIDDLE TALL IMAGE */}
            <div>
              <img
                src={imgTall}
                alt="Tall art"
                className="w-full rounded-xl object-cover"
              />
            </div>

            {/* RIGHT IMAGE */}
            <div>
              <img
                src={imgRight}
                alt="Right art"
                className="w-full rounded-xl object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      <section className="relative w-full bg-[#0d0620] text-white py-24 px-4 md:px-10 overflow-hidden">

        {/* GRID BACKGROUND */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="w-full h-full bg-[linear-gradient(#ffffff0d_1px,transparent_1px),linear-gradient(90deg,#ffffff0d_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-16">

          <div className="flex">
            <img
              src={techstack}
              alt="Tech Stack"
              className="
      lg:w-max lg:h-full        /* Desktop default size (big) */
      sm:w-72 sm:h-80  /* Tablet */  /* Mobile small */
      object-contain
    "
            />
          </div>

          {/* Right TEXT BLOCK */}
          <div className="max-w-xl mt-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl  tracking-wide mb-6">
              TECHNOLOGICAL EXPERTISE
            </h2>

            <p className="text-gray-400 leading-relaxed lg:text-lg md:text-base">
              We strive to deliver first-rate 2D game art; thus, leading-edge
              technology is a must at our studio. Every game artist in our team
              uses an extensive toolkit to draw a masterpiece, including Adobe
              Illustrator, Adobe Photoshop, Procreate, Daz3D, Spine 2D, After
              Effects, and other instruments.
              <br />
              <br />
              Modern tools allow us to create art of all shapes and sizes without
              software restraints. So, we promise that your every idea will be
              implemented comprehensively.
            </p>
          </div>

        </div>
      </section>
      <section className="w-full bg-[#0c0c0c] text-white py-20 px-4 md:px-10">
        <div className="max-w-7xl mx-auto text-center">

          {/* Heading */}
          <h2 className="text-4xl md:text-7xl font-bold tracking-wider mb-4 text-orange-300">
            OUR 2D ART SERVICES
          </h2>

          <p className="text-gray-400 max-w-7xl mx-auto text-sm md:text-2xl leading-relaxed mb-24 mt-10">
            We are experts in creating game design and illustration of various game genres. Our studio covers all aspects of
            art production, from concepts to separate game objects, ensuring you’re all set on this angle of your project.
          </p>

          {/* CARD GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((item, i) => (
              <div
                key={i}
                className="
                relative bg-[#141414] 
                border border-[#2a2a2a]
                hover:border-orange-500
                rounded-xl p-0 overflow-hidden
                transition-all duration-300
              "
              >

                {/* Background image */}
                <div className="relative w-[full] h-50 overflow-hidden">
                  <img
                    src={item.image}
                    className="w-full h-full object-cover opacity-50"
                  />

                  {/* Angled corner */}
                  <div
                    className="
                    absolute -top-[1px] right-0
                    w-16 h-16 
                    bg-[#141414]
                    rotate-45
                    translate-x-8 -translate-y-8
                  "
                  ></div>

                  {/* Icon Box */}
                  <div className="absolute top-4 right-4 bg-black/70 border border-orange-500 rounded-md p-3">
                    <img src={item.icon} className="w-5 h-5" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 text-left">
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/** why choose us 

      <section className="w-full bg-[#0c0c0c] text-white py-20 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <h2 className="text-4xl lg:text-7xl md:text-5xl font-bold tracking-wider mt-6">
              WHY CHOOSE US
            </h2>

            <p className="text-gray-300 max-w-lg text-lg md:text-base lg:text-xl mb-4 leading-relaxed">
              We provide best services with guarantee. We are the best realtor in
              country and always bring best option for our customer or clients. We
              never compromise on guarantee. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit, sed do eiusmod tempor.
            </p>
          </div>

          
          <div className="hidden lg:block">

            <div className="flex">
              <div className="w-[450px] h-[2px] bg-gray-500 mt-6 opacity-40"></div>
              <div className="w-[500px] h-[2px] bg-gray-500 mt-6 ml-80 opacity-40"></div>
            </div>

            <div className="flex">
              <div className="w-[2px] h-[100px] bg-gray-500 opacity-40"></div>
              <div className="w-[2px] h-[100px] bg-gray-500 ml-[1266px] opacity-40"></div>
            </div>

          </div>


          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center lg:ml-10">
            
            <div className="space-y-20">
              <div className="flex items-start gap-4">
                <img
                  src={Symbol2}
                  alt=""
                  className="w-20 h-20"
                />
                <div>
                  <h4 className="font-semibold text-2xl tracking-widest">Lorem Ipsum</h4>
                  <p className="text-gray-400 text-lg">
                    Lorem ipsum Lorem ipsum is a dummy text for temp use only
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <img
                  src={Symbol3}
                  alt=""
                  className="w-20 h-20"
                />
                <div>
                  <h4 className="font-semibold text-2xl tracking-widest">Lorem Ipsum</h4>
                  <p className="text-gray-400 text-lg">
                    Lorem ipsum Lorem ipsum is a dummy text for temp use only
                  </p>
                </div>
              </div>
            </div>

            
            <div className="flex justify-center">
              <img
                src={Symbol1}
                alt="center"
                className="w-72 md:w-72 lg:w-[400px] rounded-2xl shadow-xl"
              />
            </div>

           
            <div className="space-y-20">
              <div className="flex items-start gap-4">
                <img
                  src={Symbol4}
                  alt=""
                  className="w-20 h-20"
                />
                <div>
                  <h4 className="font-semibold text-2xl tracking-widest">Lorem Ipsum</h4>
                  <p className="text-gray-400 text-lg">
                    Lorem ipsum Lorem ipsum is a dummy text for temp use only
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <img
                  src={Symbol5}
                  alt=""
                  className="w-20 h-20"
                />
                <div>
                  <h4 className="font-semibold text-2xl tracking-widest">Lorem Ipsum</h4>
                  <p className="text-gray-400 text-lg">
                    Lorem ipsum Lorem ipsum is a dummy text for temp use only
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      */}
    </PageLayout>
  );
}
