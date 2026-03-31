import { useState, type ChangeEvent, type FormEvent } from "react";
import placeholderImg from "../assets/blue_moonglade.webp";
import { Button } from "@/components/ui/button";
import { submitContactForm } from "@/lib/contactForm";

type ContactFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

type SubmissionState = {
  type: "success" | "error";
  message: string;
} | null;

const initialFormData: ContactFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function GetInTouch() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionState, setSubmissionState] = useState<SubmissionState>(null);

  const handleInputChange = (field: keyof ContactFormData) => {
    return (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((current) => ({
        ...current,
        [field]: event.target.value,
      }));
    };
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedFormData = {
      firstName: formData.firstName.trim(),
      lastName: formData.lastName.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      message: formData.message.trim(),
    };

    if (!trimmedFormData.firstName || !trimmedFormData.lastName || !trimmedFormData.email || !trimmedFormData.message) {
      setSubmissionState({
        type: "error",
        message: "Please fill in your first name, last name, email, and message.",
      });
      return;
    }

    if (!emailPattern.test(trimmedFormData.email)) {
      setSubmissionState({
        type: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmissionState(null);

    try {
      await submitContactForm(trimmedFormData);

      setFormData(initialFormData);
      setSubmissionState({
        type: "success",
        message: "Thanks. Your message has been sent.",
      });
    } catch (error) {
      setSubmissionState({
        type: "error",
        message: error instanceof Error ? error.message : "Unable to send your message right now.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* ================= TOP HEADING SECTION ================= */}
      <section className="relative bg-black pt-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2
            className="font-display uppercase tracking-widest
                 text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                 bg-gradient-to-r from-purple-500 via-indigo-400 to-cyan-300
                 bg-clip-text text-transparent"
          >
            LET&apos;S BUILD SOMETHING PLAYERS LOVE
          </h2>

          <p
            className="mt-8 text-base sm:text-lg md:text-xl
                 text-gray-400 leading-relaxed max-w-3xl mx-auto"
          >
            Have a game idea or project in mind?
            <br />
            Our game art outsourcing studio specializes in 2D/3D animation,
            slot game art, and production-ready assets to bring your vision to life.
          </p>
        </div>
      </section>

      {/* ================= GET IN TOUCH SECTION ================= */}
      <section className="relative h-[950px] bg-black flex justify-start lg:justify-center px-0 sm:px-6 py-28 overflow-hidden">
        <div
          className="w-full lg:h-[750px]
             bg-gradient-to-br from-[#0b0b0b] via-[#050505] to-[#0b0b0b]
             shadow-[0_0_90px_rgba(0,0,0,0.95)]
             lg:w-[1200px] lg:p-16 px-0 sm:px-6"
        >
          <div className="relative w-full max-w-[1000px] px-6 sm:px-0">
            {/* Heading */}
            <h2 className="text-white font-display text-3xl sm:text-4xl lg:text-5xl tracking-widest mb-16 mt-16 sm:mt-0">
              GET IN TOUCH
            </h2>

            {/* TOP-LEFT ACCENT */}
            <div className="absolute lg:top-20 lg:left-[-20px] pointer-events-none">
              <div className="w-24 h-[1.5px] bg-violet-600" />
              <div className="w-[1.5px] h-24 bg-violet-600" />
            </div>

            {/* MAIN CARD */}
            <div
              className="relative w-full rounded-tr-[70px] overflow-hidden 
             bg-gradient-to-br from-white/10 via-transparent to-transparent
             shadow-[0_0_90px_rgba(0,0,0,0.95)]"
            >
              <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2">
                {/* FORM */}
                <div className="p-4 sm:p-12 space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                    <Input
                      label="First Name"
                      value={formData.firstName}
                      onChange={handleInputChange("firstName")}
                      disabled={isSubmitting}
                    />
                    <Input
                      label="Last Name"
                      value={formData.lastName}
                      onChange={handleInputChange("lastName")}
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                    <Input
                      label="Your Email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange("email")}
                      disabled={isSubmitting}
                    />
                    <Input
                      label="Phone Number"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange("phone")}
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-white/60 mb-4">
                      Message
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={handleInputChange("message")}
                      placeholder="Write your message..."
                      rows={4}
                      disabled={isSubmitting}
                      className="w-full bg-transparent border-b border-white/30
                           focus:border-violet-500 outline-none
                           text-white placeholder-white/30 resize-none"
                    />
                  </div>

                  {/* MOBILE-ONLY GET STARTED BUTTON */}
                  <div className="block lg:hidden pt-6">
                    <Button
                      type="submit"
                      variant="slanted"
                      size="default"
                      disabled={isSubmitting}
                      className="
                  w-full
                  text-slate-300 px-4 py-4
                  bg-violet-800 hover:bg-purple-900
                  font-display tracking-widest text-xl
                "
                    >
                      {isSubmitting ? "Sending..." : "Get Started"}
                    </Button>
                  </div>
                </div>

                {/* INTRO CARD (DESKTOP ONLY) */}
                <div className="relative hidden lg:flex items-center justify-center px-0">
                  {/* GLOW WRAPPER */}
                  <div
                    className="
  relative w-full max-w-md
  rounded-tr-[70px]
  bg-gradient-to-br from-white/10 via-transparent to-transparent
  px-8 py-8
  overflow-hidden
  border border-violet-500/20
  shadow-[0_0_40px_rgba(168,85,247,0.25)]
  hover:shadow-[0_0_80px_rgba(168,85,247,0.5)]
  transition-all duration-300
"
                  >
                    {/* BACKGROUND IMAGE */}
                    <img loading="lazy" decoding="async"
                      src={placeholderImg}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none"
                    />

                    {/* CONTENT */}
                    <div className="relative z-10">
                      <h3 className="text-4xl font-semibold text-gray-300 tracking-wider py-4">
                        Build Worlds.
                        <br />
                        Create Experiences.
                      </h3>

                      <p className="my-4 text-gray-400 text-lg leading-relaxed">
                        Crafting high-performance gaming art and dynamic websites that
                        captivate players from the first click.
                      </p>

                      {/* DESKTOP GET STARTED BUTTON */}
                      <Button
                        type="submit"
                        variant="slanted"
                        size="default"
                        disabled={isSubmitting}
                        className="
                    text-slate-300 px-4 py-4 my-6
                    bg-violet-800 
                    font-display tracking-widest text-xl
                  "
                      >
                        {isSubmitting ? "SENDING..." : "SUBMIT"}
                      </Button>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            {submissionState && (
              <div className="pointer-events-none absolute bottom-0 left-6 right-6 z-20 flex justify-center translate-y-[110%]">
                <div
                  className={`w-full max-w-[640px] rounded-2xl border px-5 py-4 text-sm shadow-[0_18px_60px_rgba(0,0,0,0.45)] backdrop-blur-md sm:text-base ${
                    submissionState.type === "success"
                      ? "border-emerald-400/40 bg-emerald-500/15 text-emerald-200"
                      : "border-rose-400/40 bg-rose-500/15 text-rose-200"
                  }`}
                >
                  <div className="font-display tracking-wide uppercase text-xs sm:text-sm opacity-80">
                    {submissionState.type === "success" ? "Message Sent" : "Submission Error"}
                  </div>
                  <p className="mt-2 leading-relaxed">{submissionState.message}</p>
                </div>
              </div>
            )}
          </div>

          {/* BOTTOM-RIGHT ACCENT */}
          <div className="hidden lg:block md:block absolute bottom-[225px] right-[270px] pointer-events-none">
            <div className="ml-auto w-[1.5px] h-24 bg-violet-600" />
            <div className="ml-auto w-24 h-[1.5px] bg-violet-600" />
          </div>
        </div>
      </section>
    </>
  );
}

/* ================= INPUT ================= */

type InputProps = {
  label: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  disabled?: boolean;
};

function Input({ label, value, onChange, type = "text", disabled = false }: InputProps) {
  return (
    <div>
      <label className="block text-sm text-white/60 mb-4">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className="w-full bg-transparent border-b border-white/30
                   focus:border-violet-500 outline-none
                   text-white"
      />
    </div>
  );
}

