import { useState, useRef, useEffect } from 'react'
import './Lumberjack.css';

export default function Lumberjack() {
  const [showModal, setShowModal] = useState(false);
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialogElement = dialogRef.current;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setShowModal(false); // Cierra el modal si presiona escape
      }
    };

    if (showModal) {
      dialogElement?.showModal();
      dialogElement?.addEventListener('keydown', handleKeyDown);
    } else {
      dialogElement?.close();
      dialogElement?.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      dialogElement?.removeEventListener('keydown', handleKeyDown);
    };
  }, [showModal]);

  return (
    <>
      <p className="inline-block hover:cursor-pointer text-yellow-500 underline" onClick={() => setShowModal(!showModal)}>
        falopa
      </p>

      <dialog className='fixed  rounded-md' ref={dialogRef}>
        <div className="lumber-jack-container">
          <iframe className="min-h-[calc(100dvh-5rem)] mx-auto" title="Lumber Jack Game" src="https://tbot.xyz/lumber/"></iframe>
        </div>
        <button className="close-btn text-base rounded-md bg-red-600 hover:bg-red-900 transition-colors group" onClick={() => setShowModal(false)}><svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z" fill="#fff"></path> </g></svg></button>
      </dialog>
    </>

  )
}
