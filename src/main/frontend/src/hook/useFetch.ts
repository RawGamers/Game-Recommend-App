import { useState, useEffect } from "react";

export default function useFetch(url: string) {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch(url)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setData(data);
			})
			.catch((error) => console.error("Error fetching the article:", error));
	}, [url]);

	return data;
}
