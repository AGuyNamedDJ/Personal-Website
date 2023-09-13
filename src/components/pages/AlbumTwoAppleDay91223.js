import React, { useState, useEffect } from 'react';

// Shuffle an array 
const shuffle = (array) => {
    let currentIndex = array.length, randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
};

const AlbumTwoAppleDay91223 = () => {
    const albumName = 'Apple-Day-9-12-23';
    const imageCount = 95;  // Replace with the actual number of images in the album

    const images = Array.from({ length: imageCount }, (_, i) => 
        `/images/${albumName}/${albumName}-${String(i + 1).padStart(2, '0')}.jpg`
    );

    const [shuffledImages, setShuffledImages] = useState([]);

    useEffect(() => {
        setShuffledImages(shuffle([...images]));
    }, []);
  
    const [selectedImage, setSelectedImage] = useState(null);

    const handleClick = (image) => {
        setSelectedImage(image);
      };
    
      const handleClose = () => {
        setSelectedImage(null);
      };

    return (
        <div>
          <div id="titleSection-template">
            <h1>Apple Day '23-9-12'</h1>
          </div>
          <div className="album">
            <div className="image-grid">
              {shuffledImages.map((image, index) => 
                <div 
                  className="image-container" 
                  key={index}
                  onClick={() => handleClick(image)}
                >
                  <img src={image} alt={`${albumName} ${index + 1}`} />
                </div>
              )}
            </div>
          </div>
          {selectedImage && (
            <div className="albumoverlay" onClick={handleClose}>
              <img src={selectedImage} alt="Enlarged" />
            </div>
          )}
        </div>
      );
    };

export default AlbumTwoAppleDay91223;
