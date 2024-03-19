import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Draggable from "react-draggable";
import { FaFolder } from "react-icons/fa";
import dataElements from "../data/elements.json";
import {
  windowsXp,
  imgVideo,
  imgX,
  imgCadenas,
  imgDossier,
  imgPage,
  imgPhoto,
  testSVG,
} from "../assets";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedElement, setSelectedElement] = useState(null);
  const [password, setPassword] = useState("");
  const [folders, setFolders] = useState(dataElements);
  const [isOpenVideo, setIsOpenVideo] = useState(false);

  const handleInputChange = (e) => {
    setPassword(e.target.value);
  };

  const handleVerification = () => {
    if (password === selectedElement.code) {
      setPassword("");
      const updatedFolders = folders.map((element) => {
        if (element.id === selectedElement.id) {
          return { ...element, unlocked: true };
        }
        return element;
      });
      setFolders(updatedFolders);
      setIsOpen(false);
      setIsOpenVideo(true); // Ouvre la vidéo dès que le code est vérifié avec succès
    }
  };

  const openPopup = (element) => {
    setSelectedElement(element);
    setIsOpen(!element.unlocked); // Ouvre le popup seulement si le dossier est verrouillé
    setIsOpenVideo(element.unlocked)
    if (element.unlocked) {
      // Si le dossier est déverrouillé, affiche directement la vidéo
      // handleVerification();
    }
  };

  const { id, folderid } = useParams();

  return (
    <section className="w-screen overflow-hidden h-screen flex flex-row-reverse justify-between items-start relative">
      <img
        src={windowsXp}
        alt="fondEcran"
        className="fixed -z-[50] h-screen object-cover w-screen"
      />

      <div className="w-screen h-screen p-10">
        {folders.map((element, index) => (
          <Draggable
            key={index}
            axis="both"
            handle=".handle"
            defaultPosition={{ x: 0, y: 0 }}
            position={null}
            grid={[25, 25]}
            scale={1}
          >
            <div className="max-w-16 h-16 flex m-2">
              <div className="handle" onDoubleClick={() => openPopup(element)}>
                <img
                  src={imgDossier}
                  alt="dossier"
                  draggable="false"
                  className=" text-amber-300 text-6xl folder absolute top-0 left-0 cursor-pointer"
                />
              </div>
            </div>
          </Draggable>
        ))}
      </div>

      {/*POP-UP*/}
      {isOpen && selectedElement && (
        <div className="w-screen h-screen top-0 flex justify-center items-center absolute">
          <div className="relative max-w-64">
            <img
              src={imgPage}
              alt="iconPage"
              draggable="false"
              className="max-w-6 absolute left-1"
            />
            <img
              src={imgX}
              alt="iconX"
              onClick={() => setIsOpen(false)}
              draggable="false"
              className="max-w-6 absolute right-0 cursor-pointer"
            />
            <div className="size-64 bg-amber-50 border-4 border-t-[24px] border-blue-700 rounded">
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
            </div>
          </div>
        </div>
      )}

      {/* Afficher la vidéo si le dossier est déverrouillé */}
      {selectedElement && selectedElement.unlocked && isOpenVideo && (
        <div className="w-screen h-screen top-0 flex justify-center items-center absolute">
          <div className="relative max-w-64">
            <img
              src={imgPage}
              alt="iconPage"
              draggable="false"
              className="max-w-6 absolute left-1"
            />
            <img
              src={imgX}
              alt="iconX"
              onClick={() => setIsOpenVideo(false)}
              draggable="false"
              className="max-w-6 absolute right-0 cursor-pointer"
            />
            <div className="size-64 bg-amber-50 border-4 border-t-[24px] border-blue-700 rounded">
              <p>{selectedElement.video}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
