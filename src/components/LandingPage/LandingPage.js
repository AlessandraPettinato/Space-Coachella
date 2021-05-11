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
						<span className="pink">S</span>
						<span className="blue">p</span>
						<span className="green">a</span>
						<span className="yellow">c</span>
						<span className="candy">e</span>

						<span className="break">C</span>
						<span className="green">o</span>
						<span className="blue">a</span>
						<span className="pink">c</span>
						<span className="candy">h</span>
						<span className="yellow">e</span>
						<span className="green">l</span>
						<span className="blue">l</span>
						<span className="pink">a</span>
					</div>
				</h1>

				<p className="landing-intro">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
					malesuada gravida metus et volutpat. Phasellus id laoreet lacus. Fusce
					vel sem nisi. Nunc sodales interdum lorem, nec faucibus est volutpat
					id.
				</p>
				<div className="scroll-container">
					<IoMdArrowDown className="scroll" />
				</div>
			</div>
<<<<<<< HEAD
			<div className="landing-container">
			<About />
			<img src={Mars} alt="mars"/>
			</div>
		
=======
			{/* <div className="planet-container">
						{menuList ? <GiRingedPlanet className="planet" /> : null}
					</div> */}
>>>>>>> a3ffa81a5bcfbeb061a830afae42846a5c980f73
		</div>
	);
}
