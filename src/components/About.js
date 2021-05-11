import "./About.css";
import {useSpring, animated } from "react-spring";

const About = () => {

    return (
        <> 
            <div className="robo-container">
        
                <img className="pic-ginny"
                    src="https://images2.imgbox.com/c3/97/0ltuiBp2_o.png"
                    alt="robot-ginny"
                />
                <img className="pic-percy"
                    src="https://images2.imgbox.com/94/04/cF0bLZeX_o.png"
                    alt="robot-percy"  
                />
        </div>
        </>
    )
       
}

export default About; 