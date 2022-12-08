import React from "react";
import "./styles.css";

function Member({ name, role, image }: { name: string; role: string; image: string }) {
	return (
		<figure className="user">
			<div className="top">
				<img src={image} alt="name" className="user-image" />
				<p className="user-role">{role}</p>
			</div>
			<figcaption>
				<h4 className="user-name">{name}</h4>
			</figcaption>
		</figure>
	);
}

export default Member;
