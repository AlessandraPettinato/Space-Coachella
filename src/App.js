import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import LandingPage from "./components/LandingPage/LandingPage";
import SoFar from "./components/SoFar/SoFar.js";
import ComingNext from "./components/ComingNext/ComingNext.js";

function App() {
	const [partyPhotos, setPartyPhotos] = useState([]);

	const getPartyPhotos = () => {
		fetch(
			"https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=900&camera=pancam&api_key=InSUsy3xJAPrf98mrdA34DdNNGVYpkGRbGOYs0jO"
		)
			.then((res) => res.json())
			.then((data) => setPartyPhotos(data.photos));
	};

	useEffect(getPartyPhotos, []);


	return (
		<div className="App">
			<Router>
				<div>
					<Header />
					<Switch>
						<Route
							path="/sofar"
							render={() => (
								<SoFar partyPhotos={partyPhotos} />
							)}
						/>
						<Route
							path="/comingup"
							render={() => <ComingNext />}
						/>

						<Route exact path="/" component={LandingPage} />
					</Switch>
				</div>
			</Router>
		</div>
	);
}

export default App;
