import background from './killua-gon.gif';
import './App.css';
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useEffect, useState } from 'react';
import Modal from './Modal';

function App() {

  const [isHover, setHover] = useState(false);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    console.log('isHover', isHover);
  }, [isHover]);

  const handleClick = () => {
    setOpen(true)
  }
  

  return (
    <div className="App">
      <img src={background} alt="background" style={
        { width: '103%', height: '103%', position: 'absolute', left: -23, top: -10, filter: 'brightness(0.6) blur(4px) saturate(1.3) blur(9px)' }} />
      <>
        <CiHeart style={{
          zIndex: 3001,
          position: 'absolute',
          top: '38%',
          left: '45%',
          fontSize: '13rem',
          color: '#f5b3d1',
          transition: 'opacity 0.2s ease-in-out',
          cursor: isHover ? 'pointer' : '',
        }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onClick={handleClick}
        ></CiHeart>

        <FaHeart style={{
          zIndex: 3000,
          position: 'absolute',
          top: '40.8%',
          left: '46.4%',
          fontSize: '9.4rem',
          color: 'rgb(203 98 146)',
          opacity: isHover ? 1 : 0,
          transition: 'opacity 0.2s ease-in-out',

        }}
          onClick={handleClick}

        ></FaHeart>


      </>
    
      <Modal isOpen={isOpen} onClose={() => setOpen(false)}> </Modal>
    </div>


  );
}

export default App;
