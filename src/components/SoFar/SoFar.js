import ImageSlider from "./ImageSlider";
import Comments from "./Comments";
import "./SoFar.css"

const SoFar = ({ partyPhotos }) => {
	return (
		<div className="soFar-container">
			<div>
				<div className="embed-player">
					<h1 className="so-far-title1"> <p className="candy-text">Take a look at </p> <p className="pink-text">our </p> <p className="green-text"> alien </p>  <p className="blue-text">playlist...</p></h1>
					<iframe
						src="https://open.spotify.com/embed/playlist/2sjNT7udCWklujkW3ipMj0"
						width="300"
						height="380"
						frameborder="0"
						allowtransparency="true"
						allow="encrypted-media"
					></iframe>
				</div>
			</div>
			<div>
				<div className="main-caption">
				
					<h1>
					<p className="candy-text">...and checkout </p>
					<br></br>
						<span className="pink">P</span>
						<span className="blue">e</span>
						<span className="yellow">r</span>
						<span className="green">c</span>
						<span className="candy">y</span> '
						<span className="blue">s</span>

						<br classaName="hide" />
						<span className="break">I</span>
						<span className="pink">n</span>
						<span className="blue">s</span>
						<span className="yellow">t</span>
						<span className="green">a</span>
						<span className="candy">g</span>
						<span className="candy">r</span>
						<span className="green">a</span>
						<span className="candy">m</span>
						<span className="blue">!</span>
					</h1>
				</div>
				<ImageSlider partyPhotos={partyPhotos} />
				<Comments />
			</div>
		</div>
	);
};

export default SoFar;
