import { useRef, useState, useEffect } from 'react';
import './QueHacesPajin.css';

export default function Quehacespajin() {
  const [showDager, setShowDager] = useState(false);
  const [counter, setCounter] = useState(0);

  // Estado para la imagen y el texto
  const [imageSrc, setImageSrc] = useState("");
  const [textContent, setTextContent] = useState("");

  const dagerRef = useRef(null)

  // Función para cambiar la imagen y el texto
  const updateImageAndText = () => {

    const audio = new Audio('/Dot-Dager-Landing-Page/vineboom.m4a'); //se carga el archivo de audio

    if (counter === 0) {
      setImageSrc("/Dot-Dager-Landing-Page/photo-1.webp");
      setTextContent("Que buscabas pajin? volve a la pagina, anda dale, no se te ocurra clickear otra vez");
      audio.play(); // Reproduce el audio cuando se muestra el modal
    } else if (counter === 1) {
      setImageSrc("/Dot-Dager-Landing-Page/photo-5.webp");
      setTextContent("No sigas clickando");
      audio.play(); // Reproduce el audio cuando se muestra el modal
    } else if (counter === 2) {
      const audio = new Audio('/Dot-Dager-Landing-Page/aww.m4a'); //se carga el archivo de audio
      setImageSrc("/Dot-Dager-Landing-Page/dager-gatito.webp");
      setTextContent("Aww un gatito");
      audio.play();
    } else if (counter === 3) {
      setImageSrc("/Dot-Dager-Landing-Page/photo-7.webp");
      setTextContent("Por favor, ya no sigas");
      audio.play(); // Reproduce el audio cuando se muestra el modal
    } else if (counter === 4) {
      setImageSrc("/Dot-Dager-Landing-Page/photo-6.webp");
      setTextContent("Tengo tu IP, espero que tengas un pepino cuando llegue a tu casa...");
      audio.play(); // Reproduce el audio cuando se muestra el modal
    } else if (counter === 5) {
      setImageSrc("/Dot-Dager-Landing-Page/dager-pepinos.webp");
      setTextContent("SI TE VAS AHORA TE REGALOS ESTOS PEPINOS!! TOMA, ANDATE!");
      audio.play(); // Reproduce el audio cuando se muestra el modal
    } else if (counter === 6) {
      setImageSrc("/Dot-Dager-Landing-Page/TOP-SECRET.webp");
      setTextContent("Donde estara el pepino?...");
      audio.play(); // Reproduce el audio cuando se muestra el modal
    } else if (counter === 7) {
      const audio = new Audio('/Dot-Dager-Landing-Page/win.m4a'); //se carga el archivo de audio
      setImageSrc("/Dot-Dager-Landing-Page/pepino-aca.webp");
      setTextContent("Lo encontramos despues de mucho trabajo 🥵🥵🥵");
      audio.play(); // Reproduce el audio cuando se muestra el modal
    }
  };

  useEffect(() => {
    const dialogElement = dagerRef.current;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setShowDager(false); // Cierra el modal si presiona escape
      }
    };

    if (showDager) {
      dialogElement?.showModal();
      setCounter(counter + 1)
      updateImageAndText(); // Llama a la función para actualizar imagen y texto
      dialogElement?.addEventListener('keydown', handleKeyDown);
    } else {
      dialogElement?.close();
      dialogElement?.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      dialogElement?.removeEventListener('keydown', handleKeyDown);
    };
  }, [showDager]);

  return (
    <>

      <div>
        <p className="text-2xl text-red-500 font-semibold mb-4">Proximamente🔥</p>
        <div className={`flex flex-col gap-4 justify-center select-none sm:flex-row hover:cursor-pointer transition-all duration-3000 ${counter === 8 ? 'blur-0 hover:cursor-auto' : 'blur-md'} `} onClick={() => {
          if (counter < 8) {
            setShowDager(!showDager)
          }
        }
        }
        >
          <img
            src="./poringa.webp"
            alt="poringa logo"
            className="h-14 w-40 rounded-md mx-auto select-none"
            draggable="false"
          />
          <img
            src="./onlyfans-logo.webp"
            alt="onlyfans logo"
            className="h-14 w-40 rounded-md mx-auto bg-white object-cover select-none"
            draggable="false"
          />
        </div>
      </div>

      <dialog className='fixed rounded-md dagerModal' ref={dagerRef}>
        <div className={`lumber-jack-container max-w-[700px] ${counter === 5 ? 'w-[1000px] max-w-[1000px]' : ''} flex flex-col `}>
          <img src={imageSrc} className='w-full object-cover' alt="Dager" />
          <p className='pajin-text text-4xl content-center p-4'>{textContent}</p>
        </div>
        <button className="close-btn text-base rounded-md bg-red-600 hover:bg-red-900 transition-colors group" onClick={() => setShowDager(false)}><svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z" fill="#fff"></path> </g></svg></button>
      </dialog>

    </>
  );
}
