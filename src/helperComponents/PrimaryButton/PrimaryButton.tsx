"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./PrimaryButton.module.css";

interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "submit" | "reset" | "button";
  buttonModifierClass?: React.CSSProperties;
  textModifierClass?: React.CSSProperties;
  disabled?: boolean;
}

const PrimaryButton = ({
  children,
  onClick,
  type = "button",
  buttonModifierClass,
  textModifierClass,
  disabled,
}: PrimaryButtonProps) => {
	const [isHovered, setIsHovered] = useState(false);
	const [hoverStyleTop, setHoverStyleTop] = useState(0);
	const [hoverStyleLeft, setHoverStyleLeft] = useState(0);
	const buttonRef = useRef<HTMLButtonElement>(null);
	const hoverBallSize = 80;

	useEffect(() => {
		if (!isHovered) return;

		function handleMouseMove(e: MouseEvent) {
			const currentMouseX = e.clientX;
			const currentMouseY = e.clientY;

			// Getting the button's cordinates
			const buttonCoordinates = buttonRef.current?.getBoundingClientRect();
			if (!buttonCoordinates) return;

			const buttonX = buttonCoordinates.left;
			const buttonY = buttonCoordinates.top;

			setHoverStyleTop(currentMouseY - buttonY - hoverBallSize / 2);
			setHoverStyleLeft(currentMouseX - buttonX - hoverBallSize / 2);
		}

		document.addEventListener("mousemove", handleMouseMove);

		return () => {
			document.removeEventListener("mousemove", handleMouseMove);
		};
	}, [isHovered]);

	return (
		<button
			disabled={disabled}
			ref={buttonRef}
			className={styles.primaryButton}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			onClick={onClick}
			type={type}
			style={buttonModifierClass}
		>
			<div
				className={styles.hoverStyle}
				style={{
					top: hoverStyleTop,
					left: hoverStyleLeft,
					opacity: isHovered ? 1 : 0,
					transformOrigin: "center",
					transform: isHovered ? "scale(1)" : "scale(0)",
				}}
			></div>
			<div style={{ opacity: 0, ...textModifierClass }}>{children}</div>
			{/* This above one has opacity 0 because, it is only to hold the shape of the button. */}

			<div style={textModifierClass} className={styles.children}>
				{children}
			</div>
		</button>
	);
};

export default PrimaryButton;
