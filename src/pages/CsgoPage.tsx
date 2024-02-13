import { useParams } from "react-router-dom";
import useGetFetch from "../hooks/fetch/useGetFetch";
import { testObject } from "../tests/objectTest";
import GameTab from "../components/GameTab/GameTab";

const CsgoPage = () => {
	const { userid } = useParams();
	// const { data } = useGetFetch({
	// 	url: import.meta.env.VITE_ENDPOINT_GETUSERSTATS + userid,
	// });

	return testObject ? (
		<div className="w-screen h-screen bg-default p-10">
			<GameTab />
		</div>
	) : null;
};

export default CsgoPage;
