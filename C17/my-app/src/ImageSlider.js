import React, { useCallback, useState } from "react";




const ImageSlider = ({ slides }) => {
    console.log('lalala');
  const [imageIndex, setImageIndex] = useState(0);
  const length = slides.length;

  const prevSlide = useCallback(() => {
    setImageIndex(imageIndex === 0 ? length - 1 : imageIndex-1);
  }, [setImageIndex, imageIndex])



  const nextSlide = () => {
    setImageIndex(imageIndex === length - 1 ? 0 : imageIndex+1)
  };

  return (
    <div className="Container">
      <div className="Buttons">
        <button className="Buttonleft" onClick={prevSlide}>Prev</button>
        <button className="Buttonright" onClick={nextSlide}>Next</button>
      </div>
      <div>
        <img className="Image" src={slides[imageIndex].image} alt="travel image"/>
        
      </div>
    </div>
  );
};

export default ImageSlider ;
