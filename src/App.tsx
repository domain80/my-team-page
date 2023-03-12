import "./App.css";
import Member from "./components/MemberComponent/Member";

function App() {
	return (
		<>
			<div className="App">
				<header>
					<h1>The creative crew</h1>
					<article>
						<h4>Who are we</h4>
						<p>
							We are team of creatively diverse, driven, innovative individuals
							working in various locations from the world.
						</p>
					</article>
				</header>
				<div className="all-members">
					{membersData.map((member, idx) => {
						return (
							<Member
								key={idx}
								{...member}
							/>
						);
					})}
				</div>
			</div>
			<footer>
				created by <a href="github.com/1jack80">1jack80</a> - devChallenges.io{" "}
			</footer>
		</>
	);
}

export default App;

const membersData = [
	{ name: "Bill Mahoney", role: "Product owner", image: "/photo1.png" },
	{ name: "Saba Cabrera", role: "Art Director", image: "/photo2.png" },
	{ name: "Shae Le", role: "Tech Lead", image: "/photo3.png" },
	{ name: "Skylah Lu", role: "UX Designer", image: "/photo4.png" },
	{ name: "Griff Richards", role: "Developer", image: "/photo5.png" },
	{ name: "Stan John", role: "Developer", image: "/photo6.png" },
];
