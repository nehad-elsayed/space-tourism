// import React, { useState } from "react";
// import img1 from "../../assets/technology/image-launch-vehicle-portrait.jpg";
// import img2 from "../../assets/technology/image-spaceport-portrait.jpg";
// import img3 from "../../assets/technology/image-space-capsule-portrait.jpg";
// const technologyData = [
//   {
//     header: "The terminology",
//     vehicleName: "Launch Vehicle",
//     description:
//       " Launch vehicle A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
//     image: img1,
//   },
//   {
//     header: "The terminology",
//     vehicleName: "Spaceport ",
//     description:
//       "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
//     image: img2,
//   },
//   {
//     header: "The terminology",
//     vehicleName: "Space capsule ",
//     description:
//       "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
//     image: img3,
//   },
// ];

// export default function Technology() {
//   const [selectedIndex, setSelectedIndex] = useState(0);

//   return (
//     <div className="min-h-screen technology-page text-white overflow-hidden ">
//       {/* Content Container */}
//       <div className="relative top-20 px-6 md:px-20 lg:px-32 py-10 flex flex-col lg:flex-row items-center justify-between gap-10">
//         {/* LEFT: Text + Buttons */}
//         <div className="flex-1 space-y-8 max-w-xl">
//           <p className="tracking-widest text-sm text-gray-400 uppercase">
//             03 Space Launch 101
//           </p>

//           <div className="flex items-start gap-6">
//             {/* Navigation Buttons */}
//             <div className="flex flex-col gap-4 pt-2">
//               {[1, 2, 3].map((num) => (
//                 <button
//                   key={num}
//                   className={`w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold border ${
//                     num === 1
//                       ? "bg-white text-black"
//                       : "border-white text-white hover:bg-white hover:text-black transition"
//                   }`}
//                 >
//                   {num}
//                 </button>
//               ))}
//             </div>

//             {/* Description Text */}
//             <div>
//               <p className="uppercase text-gray-400 text-sm tracking-widest mb-2">
//                 The terminology...
//               </p>
//               <h1 className="text-4xl md:text-5xl font-serif uppercase">
//                 {technologyData[selectedIndex].vehicleName}
//               </h1>
//               <p className="mt-4 text-gray-300 leading-relaxed">
//                 {technologyData[selectedIndex].description}
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT: Image */}
//         <div className="flex-1">
//           <img
//             src={technologyData[selectedIndex].image}
//             alt={technologyData[selectedIndex].vehicleName}
//             className="w-full max-h-[600px] object-contain"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import img1 from "../../assets/technology/image-launch-vehicle-portrait.jpg";
import img2 from "../../assets/technology/image-spaceport-portrait.jpg";
import img3 from "../../assets/technology/image-space-capsule-portrait.jpg";
import img4 from "../../assets/technology/image-launch-vehicle-landscape.jpg";
import Loading from "../../Components/Loading/Loading";
const technologyData = [
  {
    name: "Launch Vehicle",
    description:
      " Launch vehicle A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    image: img1,
  },
  {
  name: "Spaceport",
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    image: img2,
  },
  {
  name: "Space capsule",
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    image: img3,
  },
];

export default function Technology() {
  const [index, setIndex] = useState(0);
  const tech = technologyData[index];
  const [loading ,setLoading]=useState(false)
  
  if(loading){
    <Loading/>
  }

  return (
    <section className="technology-page text-white min-h-screen p-6 md:p-12 flex flex-col-reverse lgg:flex-row items-center justify-center">
      {/* flex-1 max-w-xl space-y-6 */}
      {/* <div className="header uppercase hidden lgg:block">03 space launch101</div> */}

      <div className=" conttent-text lgg:text-left lgg:justify-start">
        <div  className="just-text">
        <h2 className=" uppercase tracking-widest text-gray-400">
          The Terminology...
        </h2>
        <h1 className=" md:text-5xl  uppercase">{tech.name}</h1>
        <p className="text-gray-300">{tech.description}</p>
      </div>

        <div className="flex nums space-x-4 md:space-y-4 my-3 mx-auto">
          {technologyData.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-10 h-10 rounded-full border  font-semibold ${
                index === i
                  ? "bg-white text-black active"
                  : "bg-transparent border-white text-white"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>

      <div className=" mt-6 flex justify-center">
        <img
          src={tech.image}
          alt={tech.name}
          className={`w-full max-w-md rounded-lg vehicle`}
        />
      </div>
    </section>
  );
}
