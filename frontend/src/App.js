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
import Login from "./pages/admin/Login";
import AdminRoutes from "./routes/AdminRoutes";
import DashBoard from "./pages/admin/Dashboard";
import AddFactsheetPresentation from "./pages/admin/FactsheetPresentation/AddFactsheetPresentation";
import FactsheetPresentation from "./pages/admin/FactsheetPresentation/FactsheetPresentation";
import FundNumber from "./pages/admin/FundNumber/FundNumber";
import AddFundNumber from "./pages/admin/FundNumber/AddFundNumber";
import EditFundNumber from "./pages/admin/FundNumber/EditFundNumber";
import FundCompanyPortfolio from "./pages/admin/FundCompanyPortfolio/FundCompanyPortfolio";
import SvgComponent from "./pages/user/svgcomponent";
import AddFundCompanyPortfolio from "./pages/admin/FundCompanyPortfolio/AddFundCompanyPortfolio";
import EditFundCompanyPortfolio from "./pages/admin/FundCompanyPortfolio/EditFundCompanyPortfolio";
import News from "./pages/admin/News/News";
import AddNews from "./pages/admin/News/AddNews";
import EditNews from "./pages/admin/News/EditNews";

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

        <Route path="/svg" element={<SvgComponent />} />

        <Route path="/login" element={<Login />}></Route>
        <Route path="/admin" element={<AdminRoutes />}>
          <Route path="dashboard" element={<DashBoard />} />
          <Route
            path="add/factsheet-presentation"
            element={<AddFactsheetPresentation />}
          />
          <Route
            path="edit/factsheet-presentation"
            element={<AddFactsheetPresentation />}
          />
          <Route
            path="factsheet-presentation"
            element={<FactsheetPresentation />}
          />

          <Route path="fund-number" element={<FundNumber />} />
          <Route path="add/fund-number" element={<AddFundNumber />} />
          <Route path="edit/fund-number" element={<EditFundNumber />} />

          <Route path="company" element={<FundCompanyPortfolio />} />
          <Route path="add/company" element={<AddFundCompanyPortfolio />} />
          <Route path="edit/company" element={<EditFundCompanyPortfolio />} />

          <Route path="news" element={<News />} />
          <Route path="add/news" element={<AddNews />} />
          <Route path="edit/news" element={<EditNews />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
