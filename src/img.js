import React, { useState, useCallback } from 'react';
import ImageViewer from 'react-simple-image-viewer';
import Img1 from './img/img/img1.jpeg';
import Img2 from './img/img/img2.jpeg';
import Img3 from './img/img/img3.jpeg';
import Img4 from './img/img/img4.jpeg';
import Img5 from './img/img/img5.jpeg';
import Img6 from './img/img/img6.jpeg';
import Img7 from './img/img/img7.jpeg';
import Img8 from './img/img/img8.jpeg';
import Img9 from './img/img/img9.jpeg';
import Img10 from './img/img/loader1.jpg';
import Img11 from './img/img/loader2.jpg';
import Img12 from './img/img/loader3.jpg';
import Img13 from './img/img/loader4.jpg';
import Img14 from './img/img/pellet1.jpg';
import Img15 from './img/img/pellet2.jpg';
import Img16 from './img/img/pellet3.jpg';
function App() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [Img14,Img15,Img16,Img1,Img2,Img3,Img4,Img5,Img7,Img10,Img11,Img12,Img13,Img6,Img8,Img9
  ];

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div>
      {images.map((src, index) => (
        <img
          src={ src }
          onClick={ () => openImageViewer(index) }
          width="300"
          key={ index }
          style={{ margin: '2px' }}
          alt=""/>
      ))}

      {isViewerOpen && (
        <ImageViewer
          src={ images }
          currentIndex={ currentImage }
          onClose={ closeImageViewer }
        />
      )}
    </div>
  );
}


export default App