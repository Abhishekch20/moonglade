import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "./components/ScrollToTopcomponent";
import SEO from "./components/SEO";


export default function App() {
  return (
    <BrowserRouter>
      <SEO />
      <ScrollToTop />
      <AppRoutes />
    </BrowserRouter>
    
  );
}
