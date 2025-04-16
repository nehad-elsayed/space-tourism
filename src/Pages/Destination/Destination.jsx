import { useState } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import img1  from "../../assets/destination/image-moon.png"
import img2  from "../../assets/destination/image-mars.png"
import img3 from "../../assets/destination/image-europa.png"
import img4  from "../../assets/destination/image-titan.png"

const destinations = [
  {
    name: "Moon",
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 KM",
    travelTime: "3 DAYS",
    image: img1 // Add your image 
  },
  {
    name: "Mars",
    description: "Mars description placeholder.",
    distance: "225 MIL. KM",
    travelTime: "9 MONTHS",
    image:img2
  },
  {
    name: "Europa",
    description: "Europa description placeholder.",
    distance: "628.3 MIL. KM",
    travelTime: "6 YEARS",
    image:img3
  },
  {
    name: "Titan",
    description: "Titan description placeholder.",
    distance: "1.6 BIL. KM",
    travelTime: "7 YEARS",
    image:img4
  }
];

export default function Destination() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section className="des-page min-h-screen pt-20 text-white">
      <div className="max-w-6xl mx-auto px-4 py-10">
    

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center  flex-col gap-16">
          <h2 className="ps-3 mx-auto  text-center md:self-start md:text-xl text-sm tracking-widest text-gray-400 uppercase mb-10">
          01 Pick Your Destination
        </h2>
            <img
              src={destinations[selectedIndex].image}
              alt={destinations[selectedIndex].name}
              className=" mx-auto lg:mx-0 self-center w-40 h-40  md:w-60 md:h-60 object-cover"
            />
          </div>

          {/* Content */}
          <div className="text-center lg:text-left">
            <TabGroup selectedIndex={selectedIndex} onChange={setSelectedIndex}>
              {/* we use here TapList from Headlessui/react instead of ul from html tags it's better for the accessability */}
              <TabList className="flex justify-center lg:justify-start space-x-6 mb-6">
                {destinations.map((dest) => (
                  <Tab
                    key={dest.name}
                    className={({ selected }) =>
                      `text-sm md:text-base uppercase tracking-widest pb-2 border-b-2 transition-all duration-300 ${
                        selected ? "text-white" : "text-gray-500 border-b-transparent"
                      }`
                    }
                  >
                    {dest.name}
                  </Tab>
                ))}
              </TabList>

              <TabPanels >
                {destinations.map((dest) => (
                  <TabPanel key={dest.name}>
                    <h1 className="text-5xl font-light uppercase  mb-4">{dest.name}</h1>
                    <p className="text-gray-400 md:text-center mx-auto md:w-[90%] lg:w-[100%] lg:text-left lg:mx-0 mb-8 leading-relaxed max-w-lg">
                      {dest.description}
                    </p>

                    <div className="flex flex-col md:flex-row  md:justify-center items-center lg:justify-start gap-6 border-t border-gray-700 pt-6">
                      <div>
                        <h3 className="text-xs text-gray-400 uppercase tracking-widest">Avg. Distance</h3>
                        <p className="text-lg font-semibold">{dest.distance}</p>
                      </div>
                      <div>
                        <h3 className="text-xs text-gray-400 uppercase tracking-widest">Est. Travel Time</h3>
                        <p className="text-lg font-semibold">{dest.travelTime}</p>
                      </div>
                    </div>
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>
          </div>
        </div>
      </div>
    </section>
  );
}
