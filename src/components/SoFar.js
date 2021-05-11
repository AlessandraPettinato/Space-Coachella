<<<<<<< HEAD
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
=======
export default function SoFar({ playlist }) {
	return (
		<div>
			<h1>{playlist}</h1>
		</div>
	);
>>>>>>> a3ffa81a5bcfbeb061a830afae42846a5c980f73
}

export default SoFar;
