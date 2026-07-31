import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import SiteMap from "./pages/SiteMap";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-use" element={<TermsOfUse />} />
      <Route path="/site-map" element={<SiteMap />} />
        {/* Always keep this last */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}


export default App;