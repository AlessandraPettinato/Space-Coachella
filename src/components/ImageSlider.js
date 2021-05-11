import React, { useState } from 'react'
import "./ImageSlider.css"
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const ImageSlider = ({partyPhotos}) => {
    const [current, setCurrent ] = useState(0);
    const length = partyPhotos.length;
     const helloPhoto = partyPhotos.map((item, index) => {
         return (
            <div className={index === current ? 'slide active' : 'slide'}
            key={index}> 
                    {index === current && (
              <img src={item.img_src} alt='travel image' className='image' />
            )}
            </div>
         )
     })
 
     const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
      };

      const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
      };

      if (!Array.isArray(partyPhotos) || length <= 0) {
        return null;
      }

    return (
        <div>
            <section className="slider">
            <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
            <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
            {helloPhoto}
            </section>
     
        </div>
    )
}

export default ImageSlider;
