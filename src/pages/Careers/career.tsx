import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import empressImage from "@/assets/coin.png";
import j2 from "@/assets/careers-bg.webp";
// or .png / .webp


/* images */
import bgImage from "@/assets/d6.png"
import coinImage from "@/assets/coin.png"


/* -------------------------------
   Animation Variants
-------------------------------- */

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const slideLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};


export default function CareersPage() {
  return (
    <section className="relative min-h-screen pt-6 pb-16 overflow-hidden bg-gray-800 mt-20">


      <div className="absolute inset-0 bg-black/60" />

      {/* ================= ABOUT ================= */}
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-60px)]">

          {/* IMAGE */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-start lg:ml-24">
            <motion.img
              src={empressImage}
              alt="Hero Art"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-[260px] sm:max-w-[320px] lg:max-w-[530px] object-cover animate-float drop-shadow-[0_0_12px_rgba(255,200,80,0.6)]
    drop-shadow-[0_0_28px_rgba(255,140,0,0.5)]
    drop-shadow-[0_0_60px_rgba(255,80,0,0.4)]"
            />
          </div>

          {/* TEXT */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.h1
              variants={slideLeft}
              className="text-4xl lg:text-8xl font-bold 
              bg-gradient-to-r
                from-[#F97316]   /* orange */
                via-[#EF4444]    /* red */
                to-[#B91C1C]     /* deep red */
               bg-clip-text
               text-transparent
               font-display
               tracking-widest"
            >
              Join the team
            </motion.h1>

            <motion.p variants={slideLeft} className="text-gray-300 text-xl max-w-3xl">
              Moonglade is an employee-centred game development studio that values
              creativity, ownership, and personal growth. We empower our team members
              with the freedom to make decisions, support continuous self-development,
              and encourage long-term career progression. Our development team is always
              looking for talented individuals who are passionate about building engaging
              and visually rich gaming experiences.
            </motion.p>

            <motion.p variants={slideLeft} className="text-gray-300 text-lg max-w-xl">
              Explore below to view our current open positions
            </motion.p>

            <motion.div variants={slideLeft}>
              <Link to="/Careers">
                <Button variant="slanted" size="lg" className="group tracking-wider text-slate-100 font-heading text-lg rounded-none w-[180px]">
                  Open positions ⇒
                </Button>
              </Link>
            </motion.div>

          </motion.div>

        </div>
      </div>

      <section className="relative min-h-[90vh] my-32 bg-black overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center "
          style={{ backgroundImage: `url(${j2})` }}
        />


        {/* DARK GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:py-24 py-36">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* LEFT CONTENT */}
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6">
                Careers <span className="text-purple-600">VACANCIES</span>
              </h2>

              <p className="text-gray-300 text-base sm:text-xl leading-relaxed max-w-xl mb-6">
                At this moment, we currently do not have any vacancies available.
                However, we’re always eager to connect with talented individuals who
                are passionate about game development, digital production, and
                creative innovation.
              </p>

              <p className="text-gray-300 text-lg sm:text-xl leading-relaxed max-w-xl mb-10">
                Please feel free to check back regularly for future opportunities
                or send us your resume for upcoming positions.
              </p>

              <div>
                <p className="text-white text-lg font-semibold mb-1">
                  Submit Your Resume:
                </p>
                <a
                  href="mailto:hello@inkration.com"
                  className="text-purple-600 text-lg hover:underline"
                >
                  contact@moonglade.co.in
                </a>
              </div>
            </div>

            {/* RIGHT SPACER (IMAGE IS BACKGROUND) */}
            <div className="hidden lg:block" />

          </div>
        </div>

      </section>


      {/* hiring process*/}

      <section className="relative bg-black pt-14 pb-8 overflow-hidden lg:mx-20 pointer-events-none">

        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
        <div className="absolute inset-0 bg-black/60" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6">

          {/* HEADING */}
          <h2 className="text-center font-display tracking-widest text-4xl sm:text-4xl lg:text-6xl text-gray-100 mb-28">
            OUR HIRING PROCESS
          </h2>

          {/* TIMELINE WRAPPER */}
          <div className="relative">

            {/* CENTER LINE (DESKTOP ONLY) */}
            <div className="absolute left-1/2 top-12 bottom-10 w-[2px] bg-white/20 -translate-x-1/2  lg:block" />



            {/* ================= STEP 01 ================= */}
            <div className="relative grid lg:grid-cols-2 items-center mb-16 lg:mb-8">

              {/* LEFT CONTENT */}
              <div className="lg:text-right text-center lg:pr-24">
                <h3 className="text-purple-400 font-semibold tracking-widest text-xl mb-4">
                  FIND A ROLE THAT SUITS YOU
                </h3>
                <p className="text-gray-200 max-w-sm ml-auto ">
                  Explore open positions and identify a role that aligns with your
                  skills, experience, and career goals.
                </p>
              </div>

              <div />

              {/* CENTER CIRCLE */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:flex">
                <div className="w-12 h-12 rounded-full bg-white text-black font-bold
                          flex items-center justify-center
                          border-4 border-purple-500">
                  01
                </div>
              </div>
            </div>

            {/* ================= STEP 02 ================= */}
            <div className="relative grid lg:grid-cols-2 items-center mb-16 lg:mb-8">

              <div />

              {/* RIGHT CONTENT */}
              <div className="lg:text-left text-center lg:pl-24">
                <h3 className="text-purple-400 font-semibold tracking-widest text-xl mb-4">
                  SEND YOUR APPLICATION
                </h3>
                <p className="text-gray-200 max-w-md">
                  Submit your application along with relevant details for our team
                  to review your profile.
                </p>
              </div>

              {/* CENTER CIRCLE */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:flex">
                <div className="w-12 h-12 rounded-full bg-white text-black font-bold
                          flex items-center justify-center
                          border-4 border-purple-500">
                  02
                </div>
              </div>
            </div>

            {/* ================= STEP 03 ================= */}
            <div className="relative grid lg:grid-cols-2 items-center mb-16 lg:mb-8">

              {/* LEFT CONTENT */}
              <div className="lg:text-right text-center lg:pr-24">
                <h3 className="text-purple-400 font-semibold tracking-widest text-xl mb-4">
                  RECEIVE YOUR INTERVIEW INVITE
                </h3>
                <p className="text-gray-200 max-w-md ml-auto">
                  Attend an interview to discuss your skills, experience, and
                  suitability for the role.
                </p>
              </div>

              <div />

              {/* CENTER CIRCLE */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:flex">
                <div className="w-12 h-12 rounded-full bg-white text-black font-bold
                          flex items-center justify-center
                          border-4 border-purple-500">
                  03
                </div>
              </div>
            </div>

            {/* ================= STEP 04 ================= */}
            <div className="relative grid lg:grid-cols-2 items-center mb-16 lg:mb-8">

              <div />

              {/* RIGHT CONTENT */}
              <div className="lg:text-left text-center lg:pl-24">
                <h3 className="text-purple-400 font-semibold tracking-widest text-xl mb-4">
                  HR INTERVIEW
                </h3>
                <p className="text-gray-200 max-w-md">
                  Connect with our HR team to discuss company culture,
                  expectations, and next steps.
                </p>
              </div>

              {/* CENTER CIRCLE */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:flex">
                <div className="w-12 h-12 rounded-full bg-white text-black font-bold
                          flex items-center justify-center
                          border-4 border-purple-500">
                  04
                </div>
              </div>
            </div>

            {/* ================= STEP 05 ================= */}
            <div className="relative grid lg:grid-cols-2 items-center mb-16 lg:mb-8">

              {/* LEFT CONTENT */}
              <div className="lg:text-right text-center lg:pr-24">
                <h3 className="text-purple-400 font-semibold tracking-widest text-xl mb-4">
                  OFFER LETTER
                </h3>
                <p className="text-gray-200 max-w-md ml-auto">
                  Successful candidates receive an official offer along with
                  onboarding details.
                </p>
              </div>

              <div />

              {/* CENTER CIRCLE */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:flex">
                <div className="w-12 h-12 rounded-full bg-white text-black font-bold
                          flex items-center justify-center
                          border-4 border-purple-500">
                  05
                </div>
              </div>
            </div>

            {/* ================= FINAL COIN NODE (STEP 06 VISUAL) ================= */}

            {/* DESKTOP (centered on timeline) */}
            <div className="relative hidden lg:flex justify-center mb-16 lg:mb-8">
              <img
                src={coinImage}
                alt="Completion Reward"
                loading="lazy"
                decoding="async"
                className="
                  w-16 h-16
                  drop-shadow-[0_0_20px_rgba(255,200,80,0.9)]
                  drop-shadow-[0_0_50px_rgba(255,140,0,0.7)]
                  drop-shadow-[0_0_90px_rgba(255,80,0,0.6)]                 "
              />
            </div>

            {/* MOBILE (stacked after step 05) */}
            <div className="flex justify-center mt-16 lg:hidden">
              <img
                src={coinImage}
                alt="Completion Reward"
                loading="lazy"
                decoding="async"
                className="w-14 h-14"
              />
            </div>




          </div>
        </div>
      </section>

    </section>


  );
}
