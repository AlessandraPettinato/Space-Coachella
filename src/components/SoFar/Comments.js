import "./Comments.css";

export default function Comments() {
	return (
		<div className="comment-section">
			<div className="main-caption">
				<h1>
					<span className="pink">R</span>
					<span className="blue">e</span>
					<span className="yellow">v</span>
					<span className="green">i</span>
					<span className="candy">e</span>
					<span className="blue">w</span>

					<span className="green">s</span>
				</h1>
			</div>

			<div className="comment-section">
				<div className="comment-card">
					<h5>
						I spent the whole night replicating the dance of Britney Spears' 'Ops
						I Did It Again'. It was amazing! #freebritney
					</h5>
					<h3>- Melinda</h3>
				</div>
				<div className="comment-card">
					<h5>
						You'll have a transformative experience for the lower price of 3
						mars rocks! Can't wait to be here again next year!
					</h5>
					<h3>- Bill</h3>
				</div>
				<div className="comment-card">
					<h5>
						I got very wasted. It was very difficult going back to my orbit, but
						I loved it! Mars rulez.
					</h5>

					<h3>- Elon</h3>
				</div>
				<div className="comment-card">
					<h5>
						Percy and Ginny are the best! Thanks to them I've found the most
						amazing rocks to add to my collection!
					</h5>

					<h3>- Wall-E</h3>
				</div>
			</div>
		</div>
	);
}
