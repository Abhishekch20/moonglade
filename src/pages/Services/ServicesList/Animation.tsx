import ServiceDetailTemplate from "./ServiceDetailTemplate";

const serviceCards = [
  {
    title: "2D Game Assets",
    text: "We create polished 2D assets for characters, props, icons, environments, and gameplay screens.",
  },
  {
    title: "3D Game Assets",
    text: "We produce stylized and production-ready 3D assets that align with the game's art direction and pipeline.",
  },
  {
    title: "Environment Art",
    text: "We build readable game environments with strong composition, atmosphere, and technical consistency.",
  },
  {
    title: "Props and Objects",
    text: "We design detailed props, pickups, decorative elements, and in-game objects for multiple genres.",
  },
  {
    title: "UI Art Support",
    text: "We create interface visuals, buttons, panels, frames, and HUD elements that match the game style.",
  },
  {
    title: "Production Polish",
    text: "We refine assets for clarity, consistency, export readiness, and smooth integration into development.",
  },
];

export default function Animation() {
  return (
    <ServiceDetailTemplate
      heroTitle="Game Art"
      heroParagraphOne="Moonglade Atelier delivers high-quality game art outsourcing services, including 2D/3D game assets, environments, props, and visual elements tailored for modern game development. We help studios create engaging, production-ready visuals that enhance gameplay and player experience."
      heroParagraphTwo="Every asset is crafted with attention to detail, strong art direction, and technical precision to ensure seamless integration into game pipelines."
      servicesSectionTitle="OUR GAME ART SERVICES"
      serviceCards={serviceCards}
    />
  );
}
