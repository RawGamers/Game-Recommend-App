"use client";

import { useRef, useState, useEffect } from "react";
import "./page.scss";

const App = () => {
	const [score] = useState(8.25);
	const circleRef = useRef();
	const waveRef = useRef();
	const progressIndicatorRef = useRef();

	const circleLength = 2 * Math.PI * 40;
	const dashOffset = useRef(circleLength);

	useEffect(() => {
		const normalizedScore = Math.min(Math.max(score / 10, 0), 1);
		const newOffset = circleLength * (1 - normalizedScore);

		if (progressIndicatorRef.current) {
			dashOffset.current = newOffset;
			progressIndicatorRef.current.children[0].style.strokeDashoffset = `${newOffset}px`;
		}

		if (waveRef.current) {
			waveRef.current.style.top = `${100 - normalizedScore * 100}%`;
		}
	}, [circleLength, score]);

	return (
		<div>
			<section>
				<div className="score">
					<svg ref={progressIndicatorRef} width="100" height="100" viewBox="0 0 100 100" fill="#777777" xmlns="http://www.w3.org/2000/svg">
						<circle
							cx="50"
							cy="50"
							r="40"
							stroke="#ff0000"
							strokeWidth="10"
							strokeDasharray={circleLength}
							style={{ strokeDashoffset: `${dashOffset.current}px` }}
						/>
					</svg>
					<p>{score}</p>
					<div ref={circleRef} className="wave_wrapper">
						<div ref={waveRef} className="wave" />
					</div>
				</div>
			</section>
		</div>
	);
};

export default App;
