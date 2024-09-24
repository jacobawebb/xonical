import Link from "next/link";
import React from "react";

export default function Button({
	href,
	children,
	className,
	onClick,
	removeMinWidth,
}: {
	href?: string;
	children: React.ReactNode;
	className?: string;
	onClick?: () => void | void;
	removeMinWidth?: boolean;
}) {
	const accentStyles =
		"absolute top-[25%] bg-primary w-[4px] h-[50%] transition-all z-0 opacity-0 group-hover:opacity-100";

	return (
		<Link
			href={href ? href : ""}
			onClick={onClick}
			className={`flex gap-1 bg-primary border-[rgba(0,0,0,0)] border-2 hover:border-primary text-colorBackground hover:text-colorText w-max ${
				!removeMinWidth ? `min-w-[100px]` : ``
			} justify-center rounded-md px-3 py-1 relative group transition ease-in-out h-max ${className}`}
		>
			<span className="flex gap-1 group-hover:gap-3 items-center justify-center transition-all ease-in-out z-50">
				{children}
			</span>
			<div
				className={`${accentStyles} group-hover:left-[-12px] left-[50%] rounded-tr-[0.25rem] rounded-br-[0.25rem]`}
			></div>
			<div
				className={`${accentStyles} group-hover:right-[-12px] right-[50%] rounded-tl-[0.25rem] rounded-bl-[0.25rem]`}
			></div>
		</Link>
	);
}
