import React from 'react'
import PercyParty from "./../assets/PercyParty.svg"
import Planet from "./../assets/neon-planet.svg"

const Artist = ({artist}) => {
    console.log(artist)
    return (
    <div className="artist-container">
        <img className="neon-planet" src={Planet} alt="percy"/>
        <div class="wrapper">
         <div class="card">
         <img className="artist" src={artist.images[1].url} alt="artist"/>
            <h1>{artist.name}</h1>
            </div>
        </div>
        <img className="percyPartyArtist" src={PercyParty} alt="percy"/>
    </div>
       

        
            
      
    )
}

export default Artist


{/* <h1>{artist.name}</h1>
<div className="photos-container">
    <img src={artist.images[0].url} alt="artist"/>
    <img src={artist.images[1].url} alt="artist"/>
    <img src={artist.images[2].url} alt="artist"/>
</div> */}