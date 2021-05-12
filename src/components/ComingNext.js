import React from 'react'
import "./ComingNext.css"
import Artist from "./Artist"

const ComingNext = ({nextArtists}) => {

    const artistList = nextArtists.artists;
    const renderArtists = artistList.map((artist, index) => <Artist key={index} artist={artist}/>)
    return (
        <div>
            <h1 className="coming-title">Artists coming soon to Mars!</h1>
            <>
            {renderArtists}
            </>
        </div>
    )
}

export default ComingNext
