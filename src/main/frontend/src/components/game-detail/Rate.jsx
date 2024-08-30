"use client";

import { useEffect, useRef } from "react";

import styles from "./Rate.module.scss";

const Rate = () => {
	const waveRef = useRef();

	const rateValue = 82;
	const voteCount = 50000;
	const formattedVoteCount = voteCount.toLocaleString();

	const radius = 20;
	const size = 50;
	const circumference = 2 * Math.PI * radius;
	const offset = circumference - (rateValue / 200) * circumference;

	useEffect(() => {
		if (waveRef.current) {
			const topPosition = 100 - (rateValue / 100) * 94;
			waveRef.current.style.top = `${topPosition}%`;
		}
	}, []);

	return (
		<div className={styles.rate_wrapper}>
			<svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
				<circle stroke="#e2dada" fill="none" strokeWidth="7" r={radius} cx={size / 2} cy={size / 2} />
				<circle
					stroke="#ff0000"
					fill="none"
					strokeWidth="7"
					r={radius}
					cx={size / 2}
					cy={size / 2}
					strokeDasharray={circumference}
					strokeDashoffset={offset}
				/>
				<circle
					stroke="#ff0000"
					fill="none"
					strokeWidth="7"
					r={radius}
					cx={size / 2}
					cy={size / 2}
					strokeDasharray={circumference}
					strokeDashoffset={offset}
				/>
			</svg>
			<div className={styles.wave_wrapper}>
				<div ref={waveRef} className={styles.wave} />
			</div>

			<p className={styles.rate}>{rateValue}</p>

			{/* rate hover 시 노출 */}
			<div className={styles.vote_count}>
				<p>
					{formattedVoteCount}명 중 {rateValue}%가 긍정적으로 투표했습니다.
				</p>
			</div>
		</div>
	);
};

export default Rate;
