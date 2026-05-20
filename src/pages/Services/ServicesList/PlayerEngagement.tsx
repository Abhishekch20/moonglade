import ServiceDetailTemplate from "./ServiceDetailTemplate";

const serviceCards = [
  {
    title: "Character Animation",
    text: "We animate characters with expressive motion, clear poses, and timing that supports gameplay and personality.",
  },
  {
    title: "Game Motion Design",
    text: "We create motion for UI, rewards, transitions, buttons, popups, and interactive game moments.",
  },
  {
    title: "Cinematic Sequences",
    text: "We produce cinematic shots, intros, story beats, and promotional animation for stronger presentation.",
  },
  {
    title: "VFX Animation",
    text: "We design animated effects for wins, impacts, powers, particles, and high-energy gameplay feedback.",
  },
  {
    title: "Slot Animations",
    text: "We animate reels, symbols, bonus triggers, win states, jackpots, and reward reveals for slot games.",
  },
  {
    title: "Export and Integration",
    text: "We prepare animation files for smooth implementation, performance, and handoff to development teams.",
  },
];

export default function PlayerEngagement() {
  return (
    <ServiceDetailTemplate
      heroTitle="Animation"
      heroParagraphOne="Moonglade Atelier delivers high-quality game animation services, including character animation, cinematic sequences, and motion design tailored for modern games. We create smooth, performance-optimized animations that enhance gameplay and player engagement."
      heroParagraphTwo="Every movement is crafted with precision to elevate immersion, storytelling, and overall visual impact."
      servicesSectionTitle="OUR ANIMATION SERVICES"
      serviceCards={serviceCards}
    />
  );
}
