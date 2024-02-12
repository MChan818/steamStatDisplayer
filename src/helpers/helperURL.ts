export const getEndpointURL = (url:string): string => {
	return url + "?key=" + import.meta.env.VITE_STEAM_API_KEY;
};
