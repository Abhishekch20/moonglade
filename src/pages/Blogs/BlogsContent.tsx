import { Button } from "@/components/ui/button";

import blogImg from "@/assets/blogsmainimg1.svg";
import farmgirl from "@/assets/Farmgirl.webp";
import layer1 from "@/assets/Layer1.webp";
import layer2 from "@/assets/Layer2.webp";
import layer3 from "@/assets/Layer3.webp";

const blogPosts = [
  {
    title: "Why to Choose Specialised Slot Game Art Studios Over Generic Art Studios",
    date: "November 29, 2024",
    category: "Industry Insights",
    url: "https://moongladeatelier.blogspot.com",
    image: layer1,
    paragraphs: [
      "When I first decided to play casino games, I came across many online options. What makes me click on one particular game out of millions? That question highlights what makes a specific game stand out.",
      "When you think of casino games, the first thing that comes to mind is wins, jackpots, and reward pools. But there's much more to it. Players also deeply appreciate the art and design of casino games.",
      "Here's the catch: not all casino games are just about winning — they are also about entertainment. A simple game with no flashy elements would struggle to compete with one that offers a rich visual experience.",
      "The online gaming industry is shifting towards a new era — one that places player experience as a top priority during game design. Visual elements, art, and graphics are now more important than ever.",
      "Casino operators focus on KPIs when advertising. But optimising performance begins at the foundation — with art and design. A casino with rich themes, captivating characters, and high-quality design sees better player acquisition and retention.",
      "Player segments matter too. Gen Z seeks personalised experiences. Boomers prefer straightforward interfaces. Gen X responds less to social media ads and more to visual billboards or TV. A versatile art team must anticipate trends and apply marketing principles to develop campaigns that drive results.",
    ],
    highlights: [
      "Deep Industry Expertise: Mastered the art of captivating casino players across countless projects.",
      "Creative Excellence: Visually stunning, thematic designs that engage and retain players.",
      "Collaborative Approach: Work closely with clients to understand their vision and exceed expectations.",
    ],
  },
  {
    title: "Fruit Theme Slot Games",
    date: "July 13, 2024",
    category: "Game Design Trends",
    url: "https://moongladeatelier.blogspot.com",
    image: layer2,
    paragraphs: [
      "In the ever-evolving world of casino slot games, trends come and go — but the fruit theme has remained a perennial favourite. This classic motif, dating back to the earliest slot machines, has seen a strong resurgence thanks to innovative art styles and creative design approaches.",
      "Fruit-themed slot games have a universal charm that resonates with players of all ages. Bright visuals and straightforward gameplay make them an instant hit. Symbols like cherries, lemons, grapes, oranges, and watermelons evoke nostalgia for classic fruit machines.",
      "Hyper-realistic art introduces almost lifelike fruit symbols with detailed textures, shadows, and reflections, adding sophistication and stronger immersion.",
      "Vibrant neon graphics give classic fruit symbols a modern twist. Glowing effects capture the energy of a bustling casino night and make the visuals feel striking and bold.",
      "Cartoonish and whimsical designs use exaggerated shapes, bold outlines, and cheerful colours to appeal to casual gamers looking for a fun, relaxing experience.",
      "Retro and vintage aesthetics bring back muted colours, classic fonts, and old-school graphic elements that echo mid-century casino nostalgia with a fresh perspective.",
      "As technology evolves, so will fruit-slot art. Developers continue to push boundaries with hyper-realism, neon, 3D animation, and new production techniques. The fruit theme is here to stay.",
    ],
    highlights: [
      "Universal appeal through bright visuals and simple readability.",
      "Flexible art direction, from retro charm to high-end realism.",
      "A timeless theme that still adapts well to new technologies.",
    ],
  },
  {
    title: "Why Are Casino Games With Dragons So Popular?",
    date: "August 01, 2023",
    category: "Game Themes",
    url: "https://moongladeatelier.blogspot.com",
    image: layer3,
    paragraphs: [
      "Is it any wonder that dragon-themed slots are so popular?",
      "Dragon slots give players the thrilling opportunity to raid the reels for valuable symbols and prizes. They transport players to a magical world filled with fantasy and mystery.",
      "One key element that enhances the experience is the quality of the dragon art itself. The attention to detail in crafting dragon visuals is crucial in making these games more thrilling.",
      "A well-crafted dragon truly immerses the player, adding excitement and enchantment to every spin.",
      "Whether you believe in dragons or simply enjoy the thrill of mythical creatures, dragon-themed slots offer an unforgettable gaming experience that is sure to leave you entertained.",
    ],
    highlights: [
      "Fantasy themes create stronger emotional immersion.",
      "Detailed dragon art amplifies excitement and atmosphere.",
      "Mythical motifs remain highly memorable for players.",
    ],
  },
];

export default function Blog() {
  return (
    <div className="text-white w-full overflow-hidden bg-black">
      <section className="relative w-full">
        <img
          src={blogImg}
          alt="Hero"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="w-full h-[850px] mt-0 object-cover brightness-150"
        />

        <div className="absolute inset-0" />

        <div className="absolute bottom-[120px] left-1/2 -translate-x-1/2 text-center max-w-[900px] px-6">
          <h1 className="text-white text-[28px] md:text-[36px] font-bold leading-tight uppercase tracking-wider">
            INDUSTRY INSIGHTS, USEFUL READS, AND UPDATES FROM
            <br />
            OUR LATEST WORK SHARED REGULARLY.
          </h1>
        </div>
      </section>

      <main className="bg-black text-white overflow-hidden">
        <section className="relative bg-[#2c0345c7] overflow-hidden">
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

          <div className="relative z-10 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-[80px] min-h-[95vh]">
            <div className="text-left max-w-[700px] lg:ml-20 lg:w-[550px]">
              <h1 className="text-3xl lg:text-5xl mb-8">GAME ART</h1>

              <p className="uppercase tracking-widest text-sm md:text-base lg:text-xl text-gray-300 opacity-60">
                Strong visuals play a major role in a game&apos;s success. This article breaks down
                how to evaluate a game art studio, what to look for in their process, and why
                visual quality directly affects player experience.
              </p>
            </div>

            <div className="hidden lg:flex justify-end items-center">
              <img
                src={farmgirl}
                alt="Character"
                loading="lazy"
                decoding="async"
                className="h-[550px] object-contain"
              />
            </div>
          </div>
        </section>

        <section className="relative bg-[#2c0345c7] overflow-hidden">
          {blogPosts.map((post, index) => {
            const isReversed = index === 1;

            return (
              <div
                key={post.title}
                className={`max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center ${index === 0 ? "mb-20 lg:mt-28 lg:mb-24" : index === 1 ? "mb-20 lg:pt-24 lg:mb-24" : "lg:pt-24 lg:pb-10"
                  }`}
              >
                <div className={isReversed ? "order-1 lg:order-2" : ""}>
                  <p className="text-sm uppercase tracking-[0.2em] text-gray-400 mb-3">
                    {post.category} • {post.date}
                  </p>

                  <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold mb-4">
                    {post.title}
                  </h2>

                  <p className="text-gray-400 mb-6 text-sm leading-relaxed lg:text-xl line-clamp-4">
                    {post.paragraphs.join(" ")}
                  </p>

                  <a href="https://moongladeatelier.blogspot.com/" target="_blank" rel="noreferrer">
                    <Button variant="slanted" size="default" className="px-6 font-heading text-lg">
                      Read More
                    </Button>
                  </a>
                </div>

                <div className={`flex justify-center ${isReversed ? "order-2 lg:order-1" : ""}`}>
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    decoding="async"
                    className={`rounded-full ${index === 0 ? "w-[350px] md:w-[320px] lg:w-[450px]" : "w-[260px] md:w-[320px] lg:w-[450px]"}`}
                  />
                </div>
              </div>
            );
          })}
        </section>
      </main>
    </div>
  );
}
