import Textfield from "../components/Textfield/Textfield";
import steamBg from "../assets/img/steambg.jpg";
import ImageBackground from "../components/Background/ImageBackground";
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
	const [steamId, setSteamId] = React.useState<string>("");
	const navigate = useNavigate();

	const handleInput = (data: React.ChangeEvent<HTMLInputElement>): void => {
		console.log(data.target.value);
		setSteamId(data.target.value);
	};

	const handleUserKeyPress = React.useCallback(
		(event: KeyboardEvent) => {
			if (event.key === "Enter") {
				navigate("/csgo/" + steamId);
			}
		},
		[navigate, steamId],
	);

	React.useEffect(() => {
		document
			.getElementById("steamidInputField")
			?.addEventListener("keypress", handleUserKeyPress);
		return () => {
			document
				.getElementById("steamidInputField")
				?.removeEventListener("keypress", handleUserKeyPress);
		};
	}, [handleUserKeyPress]);

	return (
		<ImageBackground src={steamBg}>
			<div className="w-screen h-screen bg-gradient-to-t from-black to-[#111]/90 text-white flex flex-col justify-center items-center">
				<h1 className="m-2 text-4xl -translate-y-16">Steam games stat displayer</h1>
				<Textfield
					id="steamidInputField"
					style={{
						width: "40rem",
					}}
					placeholder="Steam ID"
					aria-label="steamId"
					onChange={handleInput}
					endComponent={
						<button
							className="w-full h-full"
							onClick={() => {
								navigate("/csgo/" + steamId);
							}}
						>
							<svg
								className="w-6 h-6 text-gray-800 dark:text-white"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
							>
								<path
									stroke="currentColor"
									stroke-linecap="round"
									stroke-width="2"
									d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
								/>
							</svg>
						</button>
					}
				/>
			</div>
		</ImageBackground>
	);
};

export default Home;
