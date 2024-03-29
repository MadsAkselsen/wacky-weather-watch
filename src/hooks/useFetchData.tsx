import { useWeatherContext } from "context/weatherContext";
import { useCallback } from "react";

export const useFetchData = () => {
	const { useMockData } = useWeatherContext();

	// A general fetch function that accepts any function (fn) and its arguments (...args)
	// Note: The first argument of the function to be called is expected to be useMockData
	const generalFetch = useCallback(
		async (fn: (...args: any) => Promise<any>, ...args: any[]) => {
			return await fn(useMockData, ...args);
		},
		[useMockData],
	);

	return generalFetch;
};