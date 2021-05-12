// import {useState, useEffect} from "react";
import ImageSlider from "./ImageSlider";
// import RandomizeComments from "./RandomizeComments";

const SoFar = ({ partyPhotos, playlist, Comments }) => {
	// const [comments, setComments] = useState({});

	// const random = () => {
	// 	if (info !== undefined && comments.length > 0) {
	// 		const foundComments =
	// 			comments[Math.floor(Math.random() * comments.length)];
	// 		setComments(foundComments);
	// 	} else {
	// 		setComments({});
	// 	}
	// }, [];

	// useEffect(random, [])

	return (
		<div className="soFar-container">
			<div>
				{/* <RandomizeComments comments={comments.quote}/> */}
				<iframe
					src="https://open.spotify.com/embed/playlist/2sjNT7udCWklujkW3ipMj0"
					width="300"
					height="380"
					frameborder="0"
					allowtransparency="true"
					allow="encrypted-media"
				></iframe>
			</div>
			<div>
				<ImageSlider partyPhotos={partyPhotos} />
			</div>
		</div>
	);
};

export default SoFar;
