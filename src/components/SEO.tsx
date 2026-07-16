import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://www.moongladeatelier.com";
const SITE_NAME = "Moonglade Atelier";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.webp`;

type SeoConfig = {
  title: string;
  description: string;
  path: string;
};

const routes: Record<string, SeoConfig> = {
  "/": {
    title: "Moonglade Atelier | Premium Game Art & Animation Studio",
    description:
      "Moonglade Atelier creates premium game art, slot visuals, 2D and 3D assets, animation, trailers, and production-ready creative support for game studios.",
    path: "/",
  },
  "/services": {
    title: "Game Art, Animation & Slot Game Services | Moonglade Atelier",
    description:
      "Explore Moonglade Atelier services for concept art, 2D and 3D game art, animation, slot game art, cinematic trailers, creative support, and game development.",
    path: "/services",
  },
  "/portfolio": {
    title: "Game Art Portfolio & Slot Game Projects | Moonglade Atelier",
    description:
      "View Moonglade Atelier portfolio projects featuring slot game art, fantasy worlds, polished UI, characters, symbols, backgrounds, and cinematic game visuals.",
    path: "/portfolio",
  },
  "/about": {
    title: "About Moonglade Atelier | Game Art & Animation Studio",
    description:
      "Learn about Moonglade Atelier, a game art and animation studio helping studios create compelling visual direction, assets, animation, and production-ready game content.",
    path: "/about",
  },
  "/blog": {
    title: "Game Art & Animation Blog | Moonglade Atelier",
    description:
      "Read Moonglade Atelier insights on game art, slot visuals, animation, visual development, and creative production for modern game studios.",
    path: "/blog",
  },
  "/careers": {
    title: "Careers at Moonglade Atelier | Game Art Studio Jobs",
    description:
      "Explore careers at Moonglade Atelier and join a creative game art and animation studio building premium visuals for game projects.",
    path: "/careers",
  },
  "/contact": {
    title: "Contact Moonglade Atelier | Game Art & Animation Services",
    description:
      "Contact Moonglade Atelier for game art, slot game visuals, animation, cinematic trailers, creative support, and game production inquiries.",
    path: "/contact",
  },
  "/portfolio/heavenly-dragons": {
    title: "Heavenly Dragons Slot Game Art | Moonglade Atelier Portfolio",
    description:
      "See Heavenly Dragons, a premium Asian-fantasy slot game art project with dragon characters, symbols, reels, and polished UI by Moonglade Atelier.",
    path: "/portfolio/heavenly-dragons",
  },
  "/portfolio/jurassic-jungle": {
    title: "Jurassic Jungle Game Art | Moonglade Atelier Portfolio",
    description:
      "Explore Jurassic Jungle game art featuring prehistoric environments, creature-driven visuals, slot interface design, and production-ready assets.",
    path: "/portfolio/jurassic-jungle",
  },
  "/portfolio/dragons-treasure": {
    title: "Dragons Treasure Game Art | Moonglade Atelier Portfolio",
    description:
      "View Dragons Treasure game art with fantasy environments, character-focused visuals, slot symbols, reels, and polished game UI.",
    path: "/portfolio/dragons-treasure",
  },
  "/portfolio/mythic-fortune": {
    title: "Mythic Fortune Slot Game Art | Moonglade Atelier Portfolio",
    description:
      "Explore Mythic Fortune, a fantasy slot art project with refined environments, symbol design, reward states, and game interface visuals.",
    path: "/portfolio/mythic-fortune",
  },
  "/portfolio/pirate-goldrush": {
    title: "Pirate Goldrush Slot Game Art | Moonglade Atelier Portfolio",
    description:
      "See Pirate Goldrush slot game art featuring treasure-themed symbols, reels, pirate visuals, gameplay UI, and polished reward states.",
    path: "/portfolio/pirate-goldrush",
  },
  "/portfolio/chinese-game": {
    title: "Osiris Fortune Game Art | Moonglade Atelier Portfolio",
    description:
      "View Osiris Fortune game art with themed symbols, gameplay screens, UI polish, and production-ready slot visuals by Moonglade Atelier.",
    path: "/portfolio/chinese-game",
  },
  "/services/art": {
    title: "2D & 3D Game Art Services | Moonglade Atelier",
    description:
      "Moonglade Atelier creates production-ready 2D and 3D game art, concept art, characters, environments, props, symbols, and game assets.",
    path: "/services/art",
  },
  "/services/animation": {
    title: "Game Animation Services | Moonglade Atelier",
    description:
      "Moonglade Atelier provides game animation services for characters, cinematic sequences, trailers, motion design, and gameplay-ready visual storytelling.",
    path: "/services/animation",
  },
  "/services/player-engagement": {
    title: "Player Engagement Game Art Services | Moonglade Atelier",
    description:
      "Design player engagement visuals, reward moments, UI states, animation cues, and game art systems that make gameplay clearer and more memorable.",
    path: "/services/player-engagement",
  },
  "/services/slot-game-art": {
    title: "Slot Game Art Services | Moonglade Atelier",
    description:
      "Moonglade Atelier designs premium slot game art, including reels, symbols, characters, backgrounds, UI screens, reward states, and visual themes.",
    path: "/services/slot-game-art",
  },
  "/services/slot-game-development": {
    title: "Slot Game Development Support | Moonglade Atelier",
    description:
      "Get slot game development support for production-ready art systems, game screens, visual assets, animation, UI, and implementation-ready creative pipelines.",
    path: "/services/slot-game-development",
  },
};

function setMeta(selector: string, attribute: "content" | "href", value: string) {
  const element = document.head.querySelector(selector);

  if (element) {
    element.setAttribute(attribute, value);
  }
}

function upsertMeta(name: string, value: string, isProperty = false) {
  const attr = isProperty ? "property" : "name";
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attr, name);
    document.head.appendChild(element);
  }

  element.content = value;
}

export default function SEO() {
  const { pathname } = useLocation();

  useEffect(() => {
    const config = routes[pathname] ?? routes["/"];
    const canonicalUrl = `${SITE_URL}${config.path === "/" ? "/" : config.path}`;

    document.title = config.title;
    upsertMeta("description", config.description);
    upsertMeta("robots", "index, follow, max-image-preview:large");
    upsertMeta("og:title", config.title, true);
    upsertMeta("og:description", config.description, true);
    upsertMeta("og:type", "website", true);
    upsertMeta("og:url", canonicalUrl, true);
    upsertMeta("og:site_name", SITE_NAME, true);
    upsertMeta("og:image", DEFAULT_IMAGE, true);
    upsertMeta("og:image:alt", `${SITE_NAME} game art and animation studio`, true);
    upsertMeta("twitter:card", "summary_large_image");
    upsertMeta("twitter:title", config.title);
    upsertMeta("twitter:description", config.description);
    upsertMeta("twitter:image", DEFAULT_IMAGE);
    setMeta('link[rel="canonical"]', "href", canonicalUrl);
  }, [pathname]);

  return null;
}
