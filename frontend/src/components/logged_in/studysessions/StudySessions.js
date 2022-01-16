import "bootstrap/dist/css/bootstrap.min.css";
import "./StudySessions.css";
import React from "react";
import Carousel from "react-bootstrap/Carousel";


const StudySessions = ({ groupname, groupclass, grouptime, groupday, groupinfo, groupnumbers }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://c4.wallpaperflare.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-preview.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Study Group: {groupname}</h3>
          <p>Class: {groupclass}</p>
          <p>Time: {grouptime}</p>
          <p>Day: {groupday}</p>
          <p>Info: {groupinfo}</p>
          <p>Current number of members: {groupnumbers}</p>
 
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.lifewire.com/thmb/g2jva4iFBaG5vBXNpzEs8wEVYJY=/1920x1080/filters:no_upscale():max_bytes(150000):strip_icc()/passage_wallpaper_by_trenchmaker-d4pp3zd-5919d0673df78cf5fa42884c.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
        <h3>Study Group: {groupname}</h3>
          <p>Class: {groupclass}</p>
          <p>Time: {grouptime}</p>
          <p>Day: {groupday}</p>
          <p>Info: {groupinfo}</p>
          <p>Current number of members: {groupnumbers}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.hovia.com/app/uploads/Green-Tropical-Plant-Wallpaper-Mural-Plain-820x532.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3>Study Group: {groupname}</h3>
          <p>Class: {groupclass}</p>
          <p>Time: {grouptime}</p>
          <p>Day: {groupday}</p>
          <p>Info: {groupinfo}</p>
          <p>Current number of members: {groupnumbers}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

StudySessions.defaultProps = {
  groupname: "Some Math Class",
  groupclass: "Math",
  groupday: "Fridays",
  grouptime: "04:30 PM",
  groupinfo: "Here is some info about our group.",
  groupnumbers: "6",
};
export default StudySessions;
