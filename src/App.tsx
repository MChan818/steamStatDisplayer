import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import CsgoPage from "./pages/CsgoPage";
const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/csgo/:userid" element={<CsgoPage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
