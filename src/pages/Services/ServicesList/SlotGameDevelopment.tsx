import ServiceDetailTemplate from "./ServiceDetailTemplate";

const serviceCards = [
  {
    title: "Platform Migration",
    text: "We help move games across platforms while preserving visual quality, interaction flow, and core experience.",
  },
  {
    title: "Asset Conversion",
    text: "We adapt art, UI, animation files, and supporting assets for new resolutions, formats, and engines.",
  },
  {
    title: "Performance Optimization",
    text: "We review and optimize game visuals so they remain sharp, lightweight, and stable across devices.",
  },
  {
    title: "UI Adaptation",
    text: "We adjust screens, buttons, layouts, and HUD elements for new aspect ratios and platform standards.",
  },
  {
    title: "Compatibility Support",
    text: "We support cross-platform visual consistency, device testing, and production fixes during migration.",
  },
  {
    title: "Launch Readiness",
    text: "We prepare final assets and visual checks so the ported game feels complete and production-ready.",
  },
];

export default function SlotGameDevelopment() {
  return (
    <ServiceDetailTemplate
      heroTitle="Porting / Migration"
      heroParagraphOne="Moonglade Atelier provides game porting and migration services, helping studios adapt games across platforms while preserving performance, visuals, and user experience."
      heroParagraphTwo="From optimization to cross-platform compatibility, we ensure smooth transitions with minimal disruption and high technical accuracy."
      servicesSectionTitle="OUR PORTING SERVICES"
      serviceCards={serviceCards}
    />
  );
}
