import React from 'react'
import "./ComingNext.css"
import Artist from "./Artist"

const ComingNext = ({nextArtists}) => {
    return (
        <div>
            <h1 className="coming-title">Artists coming soon to Mars!</h1>
            <Artist name={"Britney Spears"} img={"https://i.pinimg.com/564x/ec/c8/4f/ecc84f532ca4e060db224b54f74c1ebd.jpg"}/>
            <Artist name={"Thirty Seconds to Mars"} img={"https://data.whicdn.com/images/80374887/original.png"}/>
            <Artist name={"Billie Eilish"} img={"https://www.austinchronicle.com/binary/0d03/gm-Billie-Eilish-_7_.jpg"}/>
        </div>
    )
}

export default ComingNext
