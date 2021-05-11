import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Credentials } from "./Credentials";
import axios from "axios";
import Header from "./components/Header/Header";
import About from "./components/About";
import LandingPage from "./components/LandingPage/LandingPage";
import SoFar from "./components/SoFar";

function App() {
	const [token, setToken] = useState("");
	const [playlist, setPlaylist] = useState({
		selectedPlaylist: "",
		listOfPlaylistFromAPI: [],
	});
	const spotify = Credentials();

	console.log(playlist);

	const getPartyPhotos = () => {
		fetch(
			"https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=InSUsy3xJAPrf98mrdA34DdNNGVYpkGRbGOYs0jO"
		)
			.then((res) => res.json())
			.then((data) => console.log(data));
	};

	useEffect(getPartyPhotos, []);

	useEffect(() => {
		axios("https://accounts.spotify.com/api/token", {
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				Authorization:
					"Basic " + btoa(spotify.ClientId + ":" + spotify.ClientSecret),
			},
			data: "grant_type=client_credentials",
			method: "POST",
		}).then((tokenResponse) => {
			setToken(tokenResponse.data.access_token);
		});

		axios("https://api.spotify.com/v1/playlists/37i9dQZF1DX4UtSsGT1Sbe", {
			method: "GET",
			headers: { Authorization: "Bearer " + token },
		}).then((res) => setPlaylist(res));
	}, []);

	return (
		<div className="App">
			<Router>
				<div>
					<Header />
					<Switch>
						<Route path="/sofar" component={SoFar} />
						<Route exact path="/" component={LandingPage} />
					</Switch>
					<About />
				</div>
			</Router>
		</div>
	);
}

export default App;
