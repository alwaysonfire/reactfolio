import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./codebox.png"
								alt="TheCodeBox"
								className="work-image"
							/>
							<div className="work-title">The CodeBox Inc.</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">2022 - Present</div>
						</div>

						<div className="work">
							<img
								src="./kyocera.jpg"
								alt="Kyocera"
								className="work-image"
							/>
							<div className="work-title">Kyocera</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">2019 - 2021</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
