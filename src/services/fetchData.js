const apiUrl = "https://gateway.marvel.com:443/v1/public/";
const apiKey = process.env.VUE_APP_API_KEY;

export async function fetchData(type, limit = 10, searchQuery) {
  const nameOrTitle = type === "characters" ? "name" : "title";
  const isWithSearch = searchQuery
    ? `${nameOrTitle}StartsWith=${searchQuery}&`
    : "";
  const url = `${apiUrl}${type}?${isWithSearch}limit=${limit}&apikey=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
