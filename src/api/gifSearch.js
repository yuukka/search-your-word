const GIF_API_KEY = `${import.meta.env.VITE_GIF_API_KEY}`;

const gifSearch = async (searchImage) => {
    const searchImageString = JSON.stringify(searchImage)
    // console.log(searchImageString)
    const url =  `https://api.giphy.com/v1/gifs/search?api_key=${GIF_API_KEY}&q=${searchImage}&limit=1`;

    try {
        const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
        // ,
        // body: JSON.stringify({ 
            
        //     // q: searchImageString,
        //     // limit: 1
        // })
        });
        // console.log(response);
        if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        // console.log(json);
        return json;
    } catch (error) {
        console.error(error.message);
    }
};

export { gifSearch };