import React from "react";

type TextfieldProps = React.ComponentProps<"input"> & {
	endComponent?: React.ReactNode;
};

const Textfield = ({ endComponent, ...props }: TextfieldProps): React.ReactNode => {
	if (endComponent) {
		return (
			<div className="flex justify-center items-center">
				<input
					className="min-h-[50px] p-2 px-8 border-none rounded-l-3xl bg-[#111] text-slate-300 focus:outline-none"
					{...props}
				/>
				<div className="min-h-[50px] px-8 border-l-slate-300/10 border-l-[1px] rounded-r-3xl bg-[#111] flex justify-center items-center duration-200 hover:bg-[#222] hover:cursor-pointer">
					{endComponent}
				</div>
			</div>
		);
	} else {
		return (
			<span>
				<input
					className="min-h-[40px] rounded-3xl p-2 px-8 border-none focus:outline-none"
					{...props}
				/>
			</span>
		);
	}
};

export default Textfield;
