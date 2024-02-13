import React from "react";
import { testGames } from "../../tests/objectTest";

export type TGameTab = {
	title: string;
	url: string;
};

const GameTab = () => {
	return (
		<div className="h-full w-1/6 bg-secondary rounded-3xl">
			<ul>
				<dt className="w-full p-8 text-slate-300 font-bold text-2xl">
					<h2>Games</h2>
				</dt>
				{testGames.map((game: TGameTab) => {
					return (
						<li className="w-full p-6 px-8 text-slate-300 hover:bg-[#22252E]/50 duration-200" key={game.url}>
							{game.title}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default GameTab;
