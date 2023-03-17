import { useState, useEffect } from "react";

export default function useScrollDirection() {
	const [scrollDirection, setScrollDirection] = useState(null);

	useEffect(() => {
		let lastScrollTop = 0;

		function handleScroll() {
			const scrollTop =
				window.pageYOffset || document.documentElement.scrollTop;
			const direction = scrollTop > lastScrollTop ? "down" : "up";
			setScrollDirection(direction);
			lastScrollTop = scrollTop;
		}

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return scrollDirection;
}
