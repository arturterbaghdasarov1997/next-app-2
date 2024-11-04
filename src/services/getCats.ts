export const getCats = async () => {
    const apiKey = process.env.NEXT_PUBLIC_CAT_API;
    const url = `https://api.thecatapi.com/v1/images/search?limit=20&api_key=${apiKey}`;
    console.log("Fetching URL:", url);
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
    }
    const data = await res.json();
    console.log("Fetched Data:", data);
    return data;
};
