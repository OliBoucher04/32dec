import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Draggable from 'react-draggable';
import { FaFolder } from "react-icons/fa";
import dataElements from '../data/elements.json'
import { windowsXp, imgVideo, imgX, imgCadenas, imgDossier, imgPage, imgPhoto, testSVG } from "../assets";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedElement, setSelectedElement] = useState(null);
  const [passwordValid, setPasswordValid] = useState(false);


  const [password, setPassword] = useState("");
  const [lock, setlock] = useState(true);

  const handleInputChange = (e) => {
    setPassword(e.target.value);
  };


  const handleVerification = () => {
    setPasswordValid(password === selectedElement.code);
    if (passwordValid) {
      // setIsOpen(false);
      setPassword("");
      setlock(false); // Mettre à jour le verrouillage si le mot de passe est valide
    } else {
      setlock(true); // Remettre à false si le mot de passe est invalide
    }
    console.log('le password est', passwordValid);
    console.log('le lock du folder folder est', lock);
  }

  const openPopup = (element) => {
    console.log('le password est au départ' + passwordValid);
    setSelectedElement(element)
    setIsOpen(!isOpen);
    // handleVerification();
  }

  const { id, folderid } = useParams();

  return (
    <section className="w-screen overflow-hidden h-screen flex flex-row-reverse justify-between items-start relative">
      <img
        src={windowsXp}
        alt="fondEcran"
        className="fixed -z-[50] h-screen object-cover w-screen"
      />
      <div className='handle relative p-10'>
        <div className='handle relative max-w-64'>
          <img src={imgPage} alt="iconPage" draggable='false' className='max-w-6 absolute left-1' />
          <img src={imgX} alt="iconX" draggable='false' className='max-w-6 absolute right-0' />
          <div className='size-64 bg-amber-50 border-4 border-t-[24px] border-blue-700 rounded'>
            <p>*******</p>
          </div>
        </div>
      </div>

      <div className='w-screen h-screen p-10'>
        {dataElements.map((element, index) => (
          <Draggable
            key={index}
            axis="both"
            handle=".handle"
            defaultPosition={{ x: 0, y: 0 }}
            position={null}
            grid={[25, 25]}
            scale={1}>
            <div className='max-w-16 h-16 flex m-2'>
              <div className="handle" onDoubleClick={() => openPopup(element)}>
                <img src={imgDossier} alt="dossier" draggable='false' className=' text-amber-300 text-6xl folder absolute top-0 left-0 cursor-pointer' />
              </div>
            </div>
          </Draggable>
        ))}
        {/* <div>
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
        </div> */}
      </div>


      {/* <img src={imgVideo} alt="video" className='max-w-16' />

<img src={imgPhoto} alt="photo" className='max-w-16' /> */}

      {/*POP-UP*/}
      {isOpen && selectedElement && (
        <div className='w-screen h-screen top-0 flex justify-center items-center absolute'>
          <div className='relative max-w-64'>
            <img src={imgPage} alt="iconPage" draggable='false' className='max-w-6 absolute left-1' />
            <img src={imgX} alt="iconX" onClick={openPopup} draggable='false' className='max-w-6 absolute right-0 cursor-pointer' />
            <div className='size-64 bg-amber-50 border-4 border-t-[24px] border-blue-700 rounded'>
              {/* <p>{selectedElement.video}</p>*/}
              <div className="input-container mb-8 mt-12">
                <input
                  onChange={handleInputChange}
                  value={password}
                  type="text"
                  name="text"
                  className="input"
                  placeholder="***************"
                />
              </div>
              <button onClick={handleVerification}>Verifier</button>
              {passwordValid && (
                <div>
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
                          <p>{selectedElement.video}</p>
                        </div>
                      </div>
                    </div>
                  </Draggable>
                </div>
              )}

            </div>
          </div>
        </div>
      )
      }
    </section>
  );
};

export default Home;

