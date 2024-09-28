"use client";

import { useEffect, useRef } from "react";
import useSidebarStore from "@/store/sidebarStore";
import gsap from "gsap";

export const BurgerBtn = () => {
	const { sidebarOpen } = useSidebarStore();
	const firstRectRef = useRef();
	const secondRectRef = useRef();
	const thirdRectRef = useRef();
	const btnTL = useRef(gsap.timeline({ paused: true }));

	useEffect(() => {
		btnTL.current.to(firstRectRef.current, {
			y: 4,
			duration: 0.2,
		});
		btnTL.current.to(
			thirdRectRef.current,
			{
				y: -8,
				duration: 0.2,
			},
			"<"
		);
		btnTL.current.to(
			secondRectRef.current,
			{
				opacity: 0,
				duration: 0.2,
			},
			">"
		);
		btnTL.current.to(
			firstRectRef.current,
			{
				x: 4,
				rotate: -45,
				duration: 0.3,
			},
			"<"
		);
		btnTL.current.to(
			thirdRectRef.current,
			{
				x: -4,
				rotate: 45,
				duration: 0.3,
			},
			"<"
		);
	}, []);

	useEffect(() => {
		sidebarOpen ? btnTL.current.reverse() : btnTL.current.play();
	}, [sidebarOpen]);

	return (
		<svg style={{ cursor: "pointer" }} width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect ref={firstRectRef} style={{ transformOrigin: "center" }} width="16" height="2" fill="#fff" />
			<rect ref={secondRectRef} style={{ transformOrigin: "center" }} y="6" width="16" height="2" fill="#fff" />
			<rect ref={thirdRectRef} style={{ transformOrigin: "center" }} y="12" width="16" height="2" fill="#fff" />
		</svg>
	);
};
