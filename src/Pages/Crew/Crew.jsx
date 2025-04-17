// src/components/CrewSlider.jsx
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../assets/crew/image-douglas-hurley.png";
import img2 from "../../assets/crew/image-mark-shuttleworth.png";
import img3 from "../../assets/crew/image-victor-glover.png";
import img4 from "../../assets/crew/image-anousheh-ansari.png";
import Loading from "../../Components/Loading/Loading";

const crewData = [
  {
    role: "Commander",
    name: "Douglas Hurley",
    description:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    image: img1,
  },
  {
    role: "Mission Specialist",
    name: "Mark Shuttleworth",
    description:
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system He became the first South African to travel to space as a space tourist",
    image: img2,
  },
  {
    role: "Pilot",
    name: "Victor Glover",
    description:
      " Victor Glover served as the pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. He is a commander in the U.S. Navy and flies the F/A-18 aircraft. Glover was also a crew member of Expedition 64.",
    image: img3,
  },
  {
    role: "Flight Engineer",
    name: "Anousheh Ansari",
    description:
      "Anousheh Ansari is an Iranian-American engineer and the co-founder of Prodea Systems. She became the fourth self-funded space tourist, the first self-funded woman to travel to the International Space Station, and the first Iranian to journey into space.",
    image: img4,
  },
];

export default function Crew() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [loading, setLoading] = useState(false);

  if (loading) {
    <Loading />;
  }

  return (
    <section className="crew-page text-white min-h-screen p-6 md:p-16">
      <div className="text-center ps-5  md:text-left relative top-4 md:top-12">
        <h2 className="text-sm md:text-lg relative top-10 tracking-widest text-gray-400 mb-4 uppercase">
          02 Meet Your Crew
        </h2>
      </div>
      <Slider {...settings}>
        {crewData.map((crew, index) => (
          <div
            key={index}
            className="flex flex-col display  lgg:flex-row  items-center gap-8 lgg:gap-0"
          >
            <div className="text-center content md:text-right md:w-1/2">
              <h3 className="uppercase center text-gray-400 text-[13px]  mb-2">
                {crew.role}
              </h3>
              <h1 className="text-[15px]  center md:text-5xl font-serif uppercase mb-4">
                {crew.name}
              </h1>
              <p className="text-gray-300 center leading-relaxed max-w-md mx-auto md:mx-0">
                {crew.description}
              </p>
            </div>

            <div className="md:w-1/2 image flex justify-center">
              <img
                src={crew.image}
                alt={crew.name}
                className="max-h-[400px] object-cover"
              />
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
