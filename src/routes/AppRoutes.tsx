import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import RouteLoader from "../components/RouteLoader";

const Home = lazy(() => import("../pages/Home/Home"));
const Services = lazy(() => import("../pages/Services/Services"));
const Portfolio = lazy(() => import("../pages/Portfolio/Portfolio"));
const About = lazy(() => import("../pages/About/About"));
const Blogs = lazy(() => import("../pages/Blogs/Blogs"));
const Careers = lazy(() => import("../pages/Careers/Careers"));
const Contact = lazy(() => import("../pages/Contact/Contact"));

const HeavenlyDragons = lazy(
  () => import("../pages/Portfolio/PortfolioGames/HeavenlyDragons")
);
const JurassicJungle = lazy(
  () => import("../pages/Portfolio/PortfolioGames/JurassicJungle")
);
const DragonsTreasure = lazy(
  () => import("../pages/Portfolio/PortfolioGames/DragonsTreasure")
);
const MythicFortune = lazy(
  () => import("../pages/Portfolio/PortfolioGames/MythicFortune")
);
const PirateGoldrush = lazy(
  () => import("../pages/Portfolio/PortfolioGames/PirateGoldrush")
);
const Chinese = lazy(
  () => import("../pages/Portfolio/PortfolioGames/OsirisFortune")
);

const Art = lazy(() => import("../pages/Services/ServicesList/Art"));
const Animation = lazy(
  () => import("../pages/Services/ServicesList/Animation")
);
const PlayerEngagement = lazy(
  () => import("../pages/Services/ServicesList/PlayerEngagement")
);
const SlotGameArt = lazy(
  () => import("../pages/Services/ServicesList/SlotGameArt")
);
const SlotGameDevelopment = lazy(
  () => import("../pages/Services/ServicesList/SlotGameDevelopment")
);

export default function AppRoutes() {
  return (
    <Suspense fallback={<RouteLoader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/portfolio/heavenly-dragons" element={<HeavenlyDragons />} />
        <Route path="/portfolio/jurassic-jungle" element={<JurassicJungle />} />
        <Route path="/portfolio/dragons-treasure" element={<DragonsTreasure />} />
        <Route path="/portfolio/mythic-fortune" element={<MythicFortune />} />
        <Route path="/portfolio/pirate-goldrush" element={<PirateGoldrush />} />
        <Route path="/portfolio/chinese-game" element={<Chinese />} />

        <Route path="/services/Art" element={<Art />} />
        <Route path="/services/Animation" element={<Animation />} />
        <Route path="/services/PlayerEngagement" element={<PlayerEngagement />} />
        <Route path="/services/SlotGameArt" element={<SlotGameArt />} />
        <Route
          path="/services/SlotGameDevelopment"
          element={<SlotGameDevelopment />}
        />

        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </Suspense>
  );
}
