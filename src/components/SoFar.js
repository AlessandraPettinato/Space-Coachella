import React from 'react';
import ImageSlider from './ImageSlider'

const SoFar = ({partyPhotos, playlist}) => {
   
    return(
        <div className="soFar-container">
          <div> Spotify Thingy </div>
          <div>
            <ImageSlider partyPhotos={partyPhotos} />
          </div>
     </div>
    )
}

export default SoFar;
