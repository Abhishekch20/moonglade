import ServiceDetailTemplate from "./ServiceDetailTemplate";

const serviceCards = [
  {
    title: "Visual Direction",
    text: "We define the look and mood of the game through early sketches, references, color studies, and strong art direction.",
  },
  {
    title: "Character Concepts",
    text: "We create expressive character concepts with clear silhouettes, personality, costume detail, and production-ready direction.",
  },
  {
    title: "Environment Concepts",
    text: "We design immersive worlds, locations, and scene compositions that support gameplay, story, and atmosphere.",
  },
  {
    title: "Prop Exploration",
    text: "We develop props, weapons, collectibles, and interactive objects that match the game theme and visual language.",
  },
  {
    title: "Logo Concepts",
    text: "We explore game title marks and identity treatments that capture the genre, tone, and target audience.",
  },
  {
    title: "Key Art",
    text: "We create polished illustrations and promotional visuals that communicate the game's world, characters, and appeal.",
  },
];

export default function Art() {
  return (
    <ServiceDetailTemplate
      heroTitle="Concept Art"
      heroParagraphOne="Moonglade Atelier delivers high-quality concept art services for game development, transforming ideas into visually compelling characters, environments, and key visual assets."
      heroParagraphTwo="We help studios establish a strong art direction and visual identity from the earliest stages of production. Our concept art combines creativity, storytelling, and technical understanding to create production-ready visuals that guide the entire game development pipeline."
      servicesSectionTitle="OUR CONCEPT ART SERVICES"
      serviceCards={serviceCards}
    />
  );
}
