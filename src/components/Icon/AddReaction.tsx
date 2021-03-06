import React, { SVGProps, FC } from "react";

const SVG: FC<SVGProps<SVGSVGElement>> = ({
	width = "33",
	height = "16",
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
			d="M24 8H32H24Z"
			fill="#E6E6E6"
		/>
		<path
			d="M24 8H32"
			stroke="#E6E6E6"
			strokeWidth="2"
			strokeLinecap="square"
			strokeLinejoin="round"
		/>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M28 4V12V4Z"
			fill="#E6E6E6"
		/>
		<path
			d="M28 4V12"
			stroke="#E6E6E6"
			strokeWidth="2"
			strokeLinecap="square"
			strokeLinejoin="round"
		/>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M7.95922 10.9765C6.8033 10.9765 5.80386 10.3085 5.3245 9.33789H3.28418C3.8521 11.3869 5.7293 12.8916 7.95922 12.8916C10.1891 12.8916 12.0663 11.3869 12.6343 9.33789H10.5939C10.1145 10.3085 9.11506 10.9765 7.95922 10.9765Z"
			fill="#E6E6E6"
		/>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M7.9592 14.011C4.61688 14.011 1.90744 11.3014 1.90744 7.9592C1.90744 4.6168 4.61688 1.90736 7.9592 1.90736C10.8556 1.90736 13.2754 3.94264 13.8698 6.66072H15.8123C15.1923 2.88264 11.9126 0 7.9592 0C3.56344 0 0 3.56344 0 7.9592C0 12.3549 3.56344 15.9183 7.9592 15.9183C11.9126 15.9183 15.1923 13.0356 15.8123 9.2576H13.8698C13.2754 11.9757 10.8556 14.011 7.9592 14.011Z"
			fill="#E6E6E6"
		/>
	</svg>
);

export default SVG;
