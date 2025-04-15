import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/user/Home";
import About from "./pages/user/About";
import Investor from "./pages/user/Investor";
import MarketFunds from "./pages/user/MarketFunds";
import Funds from "./pages/user/Funds";
import InvestorLetter from "./pages/user/InvestorLetter";
import OurImpact from "./pages/user/OurImpact";
import Insights from "./pages/user/Insights";
import PublicFund from "./pages/user/PublicFund";
import NewsArticle from "./pages/user/NewsArticle";
import Contact from "./pages/user/Contact";
import BlogDetails from "./pages/user/BlogDetails";
import Disclaimer from "./pages/user/Disclaimer";
import PrivateMarket from "./pages/user/PrivateMarket";
import Disclosure from "./pages/user/Disclosure";
import PrivacyPolicy from "./pages/user/PrivacyPolicy";
import Career from "./pages/user/Career";
import Startup from "./pages/user/Startup";
import NRIInvestor from "./pages/user/NRIInvestor";
import FamilyOffice from "./pages/user/FamilyOffice";
import LeaderPortfolio from "./pages/user/LeaderPortfolio";
import Videos from "./pages/user/Videos";

function App() {
  return (
    // <Router basename="/piperserica-frontend">
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/foreign-investor" element={<Investor />} />
        <Route path="/nri-investor" element={<NRIInvestor />} />
        <Route
          path="/family-office-and-indian-investor"
          element={<FamilyOffice />}
        />
        <Route path="/startup-founder-entrepreneur" element={<Startup />} />
        <Route path="/careers" element={<Career />}></Route>
        <Route path="/public-market-funds" element={<MarketFunds />}></Route>
        <Route path="/private-market-funds" element={<PrivateMarket />}></Route>
        {/* <Route path="/private-market" element={<MarketFunds />}></Route> */}
        <Route path="/investor-letters" element={<InvestorLetter />}></Route>
        <Route path="/our-impact" element={<OurImpact />}></Route>
        <Route path="/Insights" element={<Insights />}></Route>
        <Route
          path="/public-market/piper-serica-nemero-uno-india-fund"
          element={<PublicFund />}
        ></Route>
        <Route path="/news-and-more" element={<NewsArticle />}></Route>

        <Route path="/videos" element={<Videos />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/blog-details" element={<BlogDetails />}></Route>
        <Route path="/disclaimer" element={<Disclaimer />}></Route>
        <Route path="/disclosure" element={<Disclosure />}></Route>
        <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
        <Route
          path="/public-market/piper-serica-leader-portfolio"
          element={<LeaderPortfolio />}
        ></Route>
        <Route
          path="/private-market/piper-serica-angel-fund"
          element={<Funds />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
