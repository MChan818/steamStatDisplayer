/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";

interface TApiProps {
	url: string;
	parameters?: string;
}

interface TApiResponse {
	data: any;
	error: AxiosError | undefined;
}

const useGetFetch = ({ url }: TApiProps): TApiResponse => {
	const [data, setData] = useState<any>();
	const [error, setError] = useState<AxiosError>();

	useEffect(() => {
		const fetchData = async () => {
			await axios
				.get(url, {
					headers: {
						"Content-Type": "application/json",
					},
				})
				.then((res: AxiosResponse) => {
					setData(res.data);
				})
				.catch((err: AxiosError) => {
					setError(err);
				});
		};
		fetchData();
	}, [url]);

	return { data, error };
};

export default useGetFetch;
