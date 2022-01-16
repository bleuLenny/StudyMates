import React from "react";
import WelcomeNav from "../components/WelcomeNav";
import WelcomeContent from "../components/WelcomeContent";
import Footer from "../components/logged_in\\dashboard/Footer.js"

export const WelcomePage = () => {
  return (
    <div>
      <WelcomeNav />
      <WelcomeContent />
      <Footer />
    </div>
  );
};

export default WelcomePage;
