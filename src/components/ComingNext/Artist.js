import React from 'react'
import PercyParty from "./../../assets/PercyParty.svg"
import Planet from "./../../assets/neon-planet.svg"

const Artist = ({name, img}) => {
    return (
    <div className="artist-container">
        <img className="neon-planet" src={Planet} alt="percy"/>
        <div class="wrapper">
         <div class="card">
         <img className="artist" src={img} alt="artist"/>
            <h1 className="artist-name">{name}</h1>
            </div>
        </div>
        <img className="percyPartyArtist" src={PercyParty} alt="percy"/>
    </div>
       

        
            
      
    )
}

export default Artist
