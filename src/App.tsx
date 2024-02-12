import "./App.css";
import useGetFetch from "./hooks/fetch/useGetFetch";
const App = () => {
	const { data } = useGetFetch({
		url: import.meta.env.VITE_ENDPOINT_GETUSERSTATS + import.meta.env.VITE_EXAMPLE_USER,
	});
	
	return data ? <>{JSON.stringify(data)}</> : null;
};

export default App;
