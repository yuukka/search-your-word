
const jotabaSearch = async (searchWord) => {
    const url = "https://jotoba.de/api/search/words";
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ query: searchWord})
        });
        
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        return json;
    } catch (error) {
        console.error(error.message);
    }
};

export { jotabaSearch };