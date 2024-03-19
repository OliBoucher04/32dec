// import React, { useEffect, useRef } from "react";
// import { windowsXp } from "../assets";
// import { FaFolder } from "react-icons/fa";
// import "./Home.css";

// const Layout = () => {
//   const folderRef = useRef();
//   const containerRef = useRef();

//   useEffect(() => {
//     if (!folderRef.current || !containerRef.current) return;

//     const folder = folderRef.current;
//     const container = containerRef.current;
    
//     folder.addEventListener('mousedown', () => {
//       console.log('clicked');
//     });

//     return () => {
//       folder.removeEventListener('mousedown', () => {
//         console.log('clicked');
//       });
//     };
//   }, []);

//   return (
//     <section className="w-screen h-screen">
//       <img
//         src={windowsXp}
//         alt="fondEcran"
//         className="fixed -z-[50] h-screen object-cover w-screen"
//       />
//       <div ref={containerRef} className="container relative overflow-hidden border-2 border-black w-screen h-screen">
//         <FaFolder ref={folderRef} className="text-amber-300 text-6xl folder absolute top-0 left-0 cursor-pointer" />
//       </div>
//     </section>
//   );
// };

// export default Layout;

import React, {useState} from 'react';
import Draggable from 'react-draggable';
import { FaFolder } from "react-icons/fa";
import { windowsXp } from "../assets";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(!isOpen); // Inverse la valeur actuelle de isOpen
  }

  return (
    <section className="w-screen h-screen relative">
      <img
        src={windowsXp}
        alt="fondEcran"
        className="fixed -z-[50] h-screen object-cover w-screen"
      />
      <Draggable
        axis="both"
        handle=".handle"
        defaultPosition={{x: 0, y: 0}}
        position={null}
        grid={[25, 25]}
        scale={1}>
        <div>
          <div className="handle" onDoubleClick={openPopup}>
            <FaFolder className="text-amber-300 text-6xl folder absolute top-0 left-0 cursor-pointer" />
          </div>
        </div>
      </Draggable>
      {isOpen &&
        <div className='bg-white text-black absolute top-0 left-0 mt-10 ml-10 p-4'>Popup Content</div>
      }
    </section>
  );
};

export default Home;

