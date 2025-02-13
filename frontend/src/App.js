import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Investor from "./pages/Investor";
import MarketFunds from "./pages/MarketFunds";
import Funds from "./pages/Funds";
import InvestorLetter from "./pages/InvestorLetter";
import OurImpact from "./pages/OurImpact";
import Insights from "./pages/Insights";
import PublicFund from "./pages/PublicFund";
import NewsArticle from "./pages/NewsArticle";
import Contact from "./pages/Contact";
import BlogDetails from "./pages/BlogDetails";
import Disclaimer from "./pages/Disclaimer";
import PrivateMarket from "./pages/PrivateMarket";
import Disclosure from "./pages/Disclosure";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Career from "./pages/Career";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/foreign-investor" element={<Investor type="foreign" />} />
        <Route path="/nri-investor" element={<Investor type="nri" />} />
        <Route
          path="/startup-founder-entrepreneur"
          element={<Investor type="startup" />}
        />
        <Route path="/careers" element={<Career />}></Route>
        <Route path="/public-market" element={<MarketFunds />}></Route>
        <Route path="/private-market" element={<PrivateMarket />}></Route>
        {/* <Route path="/private-market" element={<MarketFunds />}></Route> */}
        <Route path="/funds" element={<Funds />}></Route>
        <Route path="/investor-letters" element={<InvestorLetter />}></Route>
        <Route path="/our-impact" element={<OurImpact />}></Route>
        <Route path="/Insights" element={<Insights />}></Route>
        <Route path="/public-funds" element={<PublicFund />}></Route>
        <Route path="/news-article" element={<NewsArticle />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/blog-details" element={<BlogDetails />}></Route>
        <Route path="/disclaimer" element={<Disclaimer />}></Route>
        <Route path="/disclosure" element={<Disclosure />}></Route>
        <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
