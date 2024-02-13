import React from "react";

type TImageBg = {
	src: string;
	children: React.ReactNode;
};

const ImageBackground = ({ src, children }: TImageBg) => {
	return (
		<section className="relative w-screen h-screen">
			<img
				src={src}
				alt="Home background"
				className="absolute w-screen h-screen bg-cover bg-center bg-no-repeat"
			/>
			<div className="absolute z-50 w-screen h-screen">{children}</div>
		</section>
	);
};

export default ImageBackground;
