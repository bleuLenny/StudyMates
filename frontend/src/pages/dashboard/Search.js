import { React, useState, useEffect } from "react";
import Header from "./Header";
import axios from "axios";
import Footer from "./Footer";

export default function Search() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    axios.get("/api/list").then((val) => {
      setCourses(val.data);
      console.log(val.data);
    });
  }, []);

  return (
    <div>
      <Header />
      <input type="text" placeholder="Search..." />

      <h1>Hiya</h1>
      <Footer/>
    </div>
  );
}
