import "./LandingPage.css";
import About from "./About"
import "./About.css"
import Mars from './../../assets/Mars.svg'
// import { GiRingedPlanet } from "react-icons/gi";
import { IoMdArrowDown } from "react-icons/io";

export default function LandingPage() {
	return (
		<div>
			<div className="landing-page">
				<h1 className="landing-caption">
					<div className="popout">
						<span className="pink letter">S</span>
						<span className="blue letter">p</span>
						<span className="green letter">a</span>
						<span className="yellow letter">c</span>
						<span className="candy letter">e</span>

						<span className="break letter">C</span>
						<span className="green letter">o</span>
						<span className="blue letter">a</span>
						<span className="pink letter">c</span>
						<span className="candy letter">h</span>
						<span className="yellow letter">e</span>
						<span className="green letter">l</span>
						<span className="blue letter">l</span>
						<span className="pink letter">a</span>
					</div>
				</h1>

				<p className="landing-intro">
				 Welcome to the <p className="green-text"> biggest party </p> in the entire galaxy! <p className="blue-text">What, you thought Mars would be boring?</p> <p className="green-text"> Please! </p> <p className="yellow-text">These 2 dancing legends don't need food or sleep, </p><p> so the party never ends! </p> 
					<p className="candy-text">Meet...</p>
				</p>
				<div className="scroll-container">
					<IoMdArrowDown className="scroll" />
				</div>
			</div>
			<div className="landing-container">
			<About />
			<img className="marsphoto" src={Mars} alt="mars"/>
			</div>
		
		</div>
	);
}
