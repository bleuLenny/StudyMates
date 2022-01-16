import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import axios from "axios";
const PersonalGroups = () => {
  const [auth, setAuth] = useState(false);
  const [username, setUsername] = useState("");
  useEffect(() => {
    axios.get("/api/").then((val) => {
      setUsername(val.data[1].username);
      if (val.data[0].passport.user !== undefined) {
        setAuth(true);
      }
    });
  });
  return (
    <div>
      <Header />
      <h1>Your groups</h1>
      <Footer />
    </div>
  );
};

export default PersonalGroups;
