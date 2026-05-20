import ServiceDetailTemplate from "./ServiceDetailTemplate";

const serviceCards = [
  {
    title: "Dedicated Art Support",
    text: "We extend your production team with reliable artists who can support ongoing game art requirements.",
  },
  {
    title: "Style Matching",
    text: "We adapt to your existing visual language to keep new assets consistent with the live project.",
  },
  {
    title: "Asset Scaling",
    text: "We help teams produce large batches of characters, props, icons, and screens without losing quality.",
  },
  {
    title: "Pipeline Integration",
    text: "We prepare files, layers, formats, and exports to fit smoothly into your internal workflow.",
  },
  {
    title: "Live Game Updates",
    text: "We create seasonal visuals, promotional assets, event art, and content updates for active games.",
  },
  {
    title: "Flexible Collaboration",
    text: "We support short-term needs, long-term production, and overflow work with clear communication.",
  },
];

export default function SlotGameArt() {
  return (
    <ServiceDetailTemplate
      heroTitle="Creative Support"
      heroParagraphOne="Moonglade Atelier provides scalable creative support and game art outsourcing services, helping studios extend their production capacity with high-quality assets and technical pipeline integration."
      heroParagraphTwo="Whether it is long-term collaboration or short-term production support, we seamlessly integrate into your workflow to ensure consistent and efficient delivery."
      servicesSectionTitle="OUR CREATIVE SUPPORT SERVICES"
      serviceCards={serviceCards}
    />
  );
}
