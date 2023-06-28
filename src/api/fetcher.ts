import config from "../config";

export const fetcher = async (url: string, options: RequestInit) => {
  const apiURL = `${config.ENDPOINT}${url}`;
  const fetchOptions = {
    method: "GET",
    ...options,
  };

  const response = await fetch(apiURL, fetchOptions);
  return response.json();
};
