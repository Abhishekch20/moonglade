import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import j2 from "@/assets/Chinese-game-imgs/c6.png";
import imgMain from "@/assets/Dragon-Eye.png";
import imgWide from "@/assets/Dragon-Eye.png";
import imgSmall from "@/assets/Dragon-Eye.png";
import imgTall from "@/assets/Dragon-Eye.png";
import imgRight from "@/assets/Dragon-Eye.png";
import ctaBg from "@/assets/Dragon-Eye.png";
import expImg from "@/assets/Isis.png";
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
import techstack from "@/assets/techstack.svg";

type ServiceDetailTemplateProps = {
  heroTitle: string;
  heroParagraphOne: string;
  heroParagraphTwo: string;
};

const services = [
  {
    title: "Concept Art",
    text: "We create high-quality concept art that defines the visual direction of your game. From early ideas to detailed visuals, we shape worlds, characters, and storytelling elements.",
    image: bg1,
    icon: icon1,
  },
  {
    title: "Character Design",
    text: "We design unique and engaging game characters tailored to your game’s style and audience. Each character is crafted with strong personality, visual appeal, and production-ready detail.",
    image: bg2,
    icon: icon2,
  },
  {
    title: "Environment Design",
    text: "We build immersive game environments that enhance storytelling and gameplay experience. Our designs focus on atmosphere, depth, and seamless integration into your game world.",
    image: bg3,
    icon: icon3,
  },
  {
    title: "Game Element Design",
    text: "We create detailed game elements including props, icons, and in-game assets. Each element is optimized for clarity, consistency, and performance within the game.",
    image: bg4,
    icon: icon4,
  },
  {
    title: "Game Logotypes",
    text: "We design distinctive game logotypes that establish strong brand identity and visual recognition. Each logo is crafted to match your game’s theme, style, and target audience.",
    image: bg5,
    icon: icon5,
  },
  {
    title: "Illustrations",
    text: "We create high-quality illustrations that enhance storytelling and visual appeal in games. Our artwork is detailed, engaging, and tailored for marketing, in-game assets, and promotions.",
    image: bg6,
    icon: icon6,
  },
];

export default function ServiceDetailTemplate({
  heroTitle,
  heroParagraphOne,
  heroParagraphTwo,
}: ServiceDetailTemplateProps) {
  return (
    <PageLayout>
      <section className="relative min-h-[100vh] mt-20 bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center h-[85vh] lg:h-[100vh] scale-105 brightness-[0.90]"
          style={{ backgroundImage: `url(${j2})` }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0)_20%,rgba(0,0,0,0.75)_100%)]" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/9 via-black/7 to-transparent" />
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:py-24 py-36">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left lg:text-left my-10 mx-2">
              <h2 className="text-6xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-purple-500 via-indigo-400 to-cyan-300 bg-clip-text text-transparent mb-6 drop-shadow-[0_0_20px_rgba(0,0,0,0.7)]">
                {heroTitle}
              </h2>

              <p className="text-gray-300 text-xl sm:text-xl leading-relaxed max-w-xl lg:ml-auto mb-6 drop-shadow-md">
                {heroParagraphOne}
              </p>

              <p className="text-gray-300 text-lg sm:text-xl leading-relaxed max-w-xl lg:ml-auto mb-10 drop-shadow-md">
                {heroParagraphTwo}
              </p>

              <Button variant="slanted" className="w-36">
                <a href="/contact" className="tracking-wide font-heading text-xl">Get in Touch</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#0c0c0c] text-white py-24 px-4 md:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-7xl font-bold tracking-wider my-10">
              5+ YEARS OF Experience
            </h2>

            <p className="text-gray-400 leading-relaxed text-xl md:text-2xl max-w-2xl">
              At Moonglade, we bring over 5+ years of hands-on experience in game art and visual design, with a strong commitment to quality, accuracy, and on-time delivery. Our team specializes in creating trendy and industry-relevant 2D game art styles, including character design, environments, concept art, detailed 2D/3D assets, VFX, and smooth animations providing complete visual support for your game from idea to launch.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative w-[300px] md:w-[380px] lg:w-[420px]">
              <div className="absolute inset-0 -z-10">
                <img
                  src={expImg}
                  alt="Experience Image"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

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
          <h2 className="text-4xl md:text-7xl font-bold text-center mb-4 tracking-wide bg-gradient-to-r from-[#ffb86b] via-[#ff8c42] to-[#c84c2f] bg-clip-text text-transparent">
            GAME ART Portfolio
          </h2>

          <p className="text-gray-400 text-center text-xl md:text-2xl max-w-6xl mx-auto leading-relaxed mb-16">
            Moonglade artists create assets across all popular game art styles, from doodle art to monochromatic designs. Our successful projects reflect a strong balance of creativity and experience. Here are some notable examples of our 2D game art.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
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

            <div className="bg-[#111] p-8 grid grid-cols-2 gap-4 h-fit">
              <button className="bg-[#1a1a1a] border border-gray-600 py-5 hover:bg-white hover:text-black transition text-xl">Character Design</button>
              <button className="bg-[#1a1a1a] border border-gray-600 py-5 hover:bg-white hover:text-black transition text-xl">Environment Design</button>
              <button className="bg-[#1a1a1a] border border-gray-600 py-5 hover:bg-white hover:text-black transition text-xl">Game Elements Design</button>
              <button className="bg-[#1a1a1a] border border-gray-600 py-5 hover:bg-white hover:text-black transition text-xl">Game Logotypes</button>
              <button className="bg-[#1a1a1a] border border-gray-600 py-5 hover:bg-white hover:text-black transition text-xl">Game UI</button>
              <button className="bg-[#1a1a1a] border border-gray-600 py-5 hover:bg-white hover:text-black transition text-xl">Slot Art</button>
            </div>
          </div>

          <div className="mb-10">
            <img
              src={imgWide}
              alt="Wide artwork"
              className="w-full h-full rounded-xl object-cover"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="space-y-8">
              <img
                src={imgSmall}
                alt="Art small"
                className="w-full rounded-xl object-cover"
              />

              <div className="relative rounded-xl overflow-hidden">
                <img
                  src={ctaBg}
                  alt="CTA background"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/80"></div>

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

            <div>
              <img
                src={imgTall}
                alt="Tall art"
                className="w-full rounded-xl object-cover"
              />
            </div>

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
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="w-full h-full bg-[linear-gradient(#ffffff0d_1px,transparent_1px),linear-gradient(90deg,#ffffff0d_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-16">
          <div className="flex">
            <img
              src={techstack}
              alt="Tech Stack"
              className="
      lg:w-max lg:h-full
      sm:w-72 sm:h-80
      object-contain
    "
            />
          </div>

          <div className="max-w-xl mt-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-wide mb-6">
              TECHNOLOGICAL EXPERTISE
            </h2>

            <p className="text-gray-400 leading-relaxed lg:text-lg md:text-base">
              We leverage industry-standard tools and advanced technologies to deliver high-quality 2D/3D game art and animation. Our team utilizes software such as Adobe Photoshop, Illustrator, Procreate, Spine 2D, After Effects, and Daz3D to create production-ready assets for modern game development.
              <br />
              <br />
              Our technology-driven approach ensures flexibility, scalability, and precision allowing us to bring every creative idea to life without limitations.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#0c0c0c] text-white py-20 px-4 md:px-10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-7xl font-bold tracking-wider mb-4 text-orange-300">
            OUR 2D ART SERVICES
          </h2>

          <p className="text-gray-400 max-w-7xl mx-auto text-sm md:text-2xl leading-relaxed mb-24 mt-10">
            We specialize in high-quality 2D game art and illustration across multiple game genres. Moonglade Atelier covers the complete art production pipeline from concept design to individual game assets ensuring visually consistent and production-ready results for your project.
          </p>

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
                <div className="relative w-[full] h-50 overflow-hidden">
                  <img
                    src={item.image}
                    className="w-full h-full object-cover opacity-50"
                  />

                  <div
                    className="
                    absolute -top-[1px] right-0
                    w-16 h-16
                    bg-[#141414]
                    rotate-45
                    translate-x-8 -translate-y-8
                  "
                  ></div>

                  <div className="absolute top-4 right-4 bg-black/70 border border-orange-500 rounded-md p-3">
                    <img src={item.icon} className="w-5 h-5" />
                  </div>
                </div>

                <div className="p-6 text-left">
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
