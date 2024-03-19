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

import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { FaFolder } from "react-icons/fa";
import { windowsXp, imgVideo, imgX, imgCadenas, imgDossier, imgPage, imgPhoto, testSVG } from "../assets";

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
        defaultPosition={{ x: 0, y: 0 }}
        position={null}
        grid={[25, 25]}
        scale={1}>
        <div>
          <div className="handle" onDoubleClick={openPopup}>
            <FaFolder className="text-amber-300 text-6xl folder absolute top-0 left-0 cursor-pointer" />
          </div>
        </div>
      </Draggable>
      <Draggable
        axis="both"
        handle=".handle"
        defaultPosition={{ x: 0, y: 0 }}
        position={null}
        grid={[25, 25]}
        scale={1}>
        <div>
          <div className="handle" onDoubleClick={openPopup}>
            <img src={imgDossier} alt="dossier" draggable='false' className='max-w-16 text-amber-300 text-6xl folder absolute top-0 left-0 cursor-pointer' />
          </div>
        </div>
      </Draggable>
      <div>
        <Draggable
          axis="both"
          handle=".handle"
          defaultPosition={{ x: 0, y: 0 }}
          position={null}
          grid={[25, 25]}
          scale={1}>
          <div className='handle relative'>
            <div className="handle" onDoubleClick={openPopup}>
              <img src={imgDossier} alt="dossier" draggable='false' className='max-w-16 text-amber-300 text-6xl folder absolute top-0 left-0 cursor-pointer' />
            </div>
            <img src={imgCadenas} alt="cadenas" draggable='false' className='absolute max-w-16' />
          </div>
        </Draggable>
      </div>

      <Draggable
        axis="both"
        handle=".handle"
        defaultPosition={{ x: 0, y: 0 }}
        position={null}
        grid={[25, 25]}
        scale={1}>
        <div className='handle relative'>
          <div className='handle relative max-w-64'>
            <img src={imgPage} alt="iconPage" draggable='false' className='max-w-6 absolute left-1' />
            <img src={imgX} alt="iconX" draggable='false' className='max-w-6 absolute right-0' />
            <div className='size-64 bg-amber-50 border-4 border-t-[24px] border-blue-700 rounded'>
              <p>Je suis une fenêtre!</p>
            </div>
          </div>
        </div>
      </Draggable>


      {/* <img src={imgVideo} alt="video" className='max-w-16' />

      <img src={imgPhoto} alt="photo" className='max-w-16' /> */}
      {isOpen &&
        <div className='relative max-w-64'>
          <img src={imgPage} alt="iconPage" draggable='false' className='max-w-6 absolute left-1' />
          <img src={imgX} alt="iconX" draggable='false' className='max-w-6 absolute right-0' />
          <div className='size-64 bg-amber-50 border-4 border-t-[24px] border-blue-700 rounded'>
            <p>Je suis un popup!</p>
          </div>
        </div>
        // <div className='bg-white text-black absolute top-0 left-0 mt-10 ml-10 p-4'>Popup Content</div>
      }
    </section>
  );
};

export default Home;

