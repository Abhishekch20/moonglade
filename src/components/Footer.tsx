import {
  MapPin,
  Mail,
  Phone,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";
import logo from "@/assets/logo.webp";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#0e0412]  text-white/60 tracking-widest ">

      {/* ================= TOP NOTCH ================= */}
      <svg
        className="absolute top-0 left-0 w-full h-[42px]"
        viewBox="0 0 1440 42"
        preserveAspectRatio="none"
        fill="#00000"
      >
        <path d="M0 0 L480 0 L560 42 L880 42 L960 0 L1440 0 Z" />
      </svg>

      {/* ================= MAIN CONTENT ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-10 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">

          {/* CONTACT */}
          <div className="lg:col-span-4 space-y-5">
            <img src={logo} alt="Moonglade" className="h-20" />

            <div className="flex gap-3">
              <MapPin className="w-10 h-10 text-purple-500 mt-1" />
              <p className="text-md text-gray-400 leading-relaxed">
                Plot No 9, Road No 1, Mythrinagar, NSBH V III,
                Hyderabad, Telangana, India - 500074
              </p>
            </div>

            <div className="flex gap-3">
              <Mail className="w-5 h-5 text-purple-500" />
              <a
                href="mailto:contact@moonglade.co.in"
                className="text-md text-gray-400 hover:text-purple-400"
              >
                contact@moonglade.co.in
              </a>
            </div>

            <div className="flex gap-3">
              <Phone className="w-5 h-5 text-purple-500" />
              <a
                href="tel:+919818475969"
                className="text-md text-gray-400 hover:text-purple-400"
              >
                +91-9818475969
              </a>
            </div>
          </div>

          {/* SERVICES */}
          <div className="lg:col-span-2 lg:pt-14">
            <h4 className="font-semibold text-xl tracking-widest mb-4">Services</h4>
            <ul className="space-y-3 text-md text-gray-400">
              <li>
                <Link to="/services/serviceslist/2dart" className="hover:text-white transition">
                  2D Art
                </Link>
              </li>
              <li>
                <Link to="/services/serviceslist/2danimation" className="hover:text-white transition">
                  2D animation
                </Link>
              </li>
              <li>
                <Link to="/services/serviceslist/slotgameart" className="hover:text-white transition">
                  Slot Game Art
                </Link>
              </li>
              <li>
                <Link to="/services/serviceslist/slotgamedevelopment" className="hover:text-white transition">
                  Slot Game Development
                </Link>
              </li>
              <li>
                <Link to="/services/serviceslist/PlayerEngagement" className="hover:text-white transition">
                  Player Engagement
                </Link>
              </li>
            </ul>
          </div>

          {/* PROJECTS */}
          <div className="lg:col-span-2 lg:pt-14">
            <h4 className="font-semibold text-xl tracking-widest mb-4">Recent Projects</h4>
            <ul className="space-y-3 text-md text-gray-400">
              <li>
                <Link to="/projects/cursed-clinic" className="hover:text-white transition">
                  Heavenly Dragons
                </Link>
              </li>
              <li>
                <Link to="/projects/space-adventure" className="hover:text-white transition">
                  Jurassic Jungle
                </Link>
              </li>
              <li>
                <Link to="/projects/panda-fortune" className="hover:text-white transition">
                  Dragons Treasure
                </Link>
              </li>
              <li>
                <Link to="/projects/panda-fortune" className="hover:text-white transition">
                  Mythic Fortune
                </Link>
              </li>
              <li>
                <Link to="/projects/panda-fortune" className="hover:text-white transition">
                  Pirate Gold Rush
                </Link>
              </li>
              <li>
                <Link to="/projects/panda-fortune" className="hover:text-white transition">
                  Osiris Fortune
                </Link>
              </li>
            </ul>
          </div>

          {/* LINKS */}
          <div className="lg:col-span-2 lg:pt-14">
            <h4 className="font-semibold text-xl tracking-widest mb-4">Quick Links</h4>
            <ul className="space-y-3 text-md text-gray-400">
              <li>
                <Link to="/about" className="hover:text-white transition">
                  About us
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-white transition">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-white transition">
                  Careers
                </Link>
              </li>
            </ul>
          </div>


          {/* SOCIAL */}
          <div className="lg:mt-24 lg:col-span-2 flex lg:justify-end">
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Linkedin].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-full bg-purple-600
                               flex items-center justify-center
                               hover:bg-purple-700 transition"
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </a>
                )
              )}
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-14 border-t border-white/10 pt-6 text-center text-sm text-gray-400">
          Copyright © 2025 Moonglade All rights Reserved
        </div>
      </div>

      {/* ================= PERSPECTIVE GRID ================= */}
      <div className="relative h-36 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            perspective: "450px",
            perspectiveOrigin: "50% 0%",
          }}
        >
          <div
            className="absolute w-full h-full"
            style={{
              transform: "rotateX(65deg)",
              transformOrigin: "top",
            }}
          >
            {/* Horizontal */}
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className="absolute w-full border-t border-purple-500/40"
                style={{ top: `${i * 22}px` }}
              />
            ))}

            {/* Vertical */}
            {[...Array(22)].map((_, i) => (
              <div
                key={i}
                className="absolute h-full border-l border-purple-500/40"
                style={{ left: `${i * 4.5}%` }}
              />
            ))}
          </div>
        </div>

        {/* GRID FADE */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#420b60bb] via-transparent to-transparent" />
      </div>
    </footer>
  );
};

export default Footer;
