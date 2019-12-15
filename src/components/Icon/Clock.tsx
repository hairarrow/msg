import React, { FC, SVGProps } from "react";

const SVG: FC<SVGProps<SVGSVGElement>> = ({
	width = "24",
	height = "24",
	className
}) => (
	<svg
		className={className}
		width={width}
		height={height}
		viewBox={`0 0 ${width} ${height}`}
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z"
			stroke="white"
		/>
		<path d="M4 6H6L8 4" stroke="white" strokeLinecap="square" />
	</svg>
);

export default SVG;
