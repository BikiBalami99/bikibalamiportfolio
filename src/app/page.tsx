"use client";

import { useEffect, useState } from "react";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import Footer from "../components/Footer/Footer";
import LoadingScreen from "../helperComponents/LoadingScreen/LoadingScreen";

export default function Home() {
	const [isAppLoaded, setIsAppLoaded] = useState(false);

	useEffect(() => {
		const images = Array.from(document.images);
		const totalImages = images.length;
		let loadedImages = 0;

		// Disable scrolling and hide scrollbar
		document.body.style.overflow = "hidden";

		images.forEach((image) => {
			if (image.complete) {
				loadedImages++;
			} else {
				image.onload = () => {
					loadedImages++;
					if (loadedImages === totalImages) {
						setIsAppLoaded(true);
					}
				};
			}
		});

		if (totalImages === 0) {
			setIsAppLoaded(true);
		}

		if (isAppLoaded) {
			// Re-enable scrolling after loading screen finishes
			setTimeout(() => {
				document.body.style.overflow = "auto";
			}, 3500); // Match this duration with the animation time
		}
	}, [isAppLoaded]);

	return (
		<div className="ultimateWrapper">
			<LoadingScreen isAppLoaded={isAppLoaded} />
			<Navbar />
			<main>
				<Hero />
				<Skills />
				<Projects />
			</main>
			<Footer />
		</div>
	);
}
