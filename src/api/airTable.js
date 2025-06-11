const AIRTABLE_BASE_URL = `${import.meta.env.VITE_AIRTABLE_BACK_END_SERVER_URL}`;
const AIRTABLE_TOKEN = `${import.meta.env.VITE_AIRTABLE_TOKEN}`;

const airTableAPI = async (requestPayload, requestType, recordID, userNotes) => {
    let url = ""; 
    if (requestType === "DELETE" && recordID !== null) {
        url = `${AIRTABLE_BASE_URL}/${recordID}`;
    }
    else if (requestType === "PATCH" && recordID !== null) {
        url = `${AIRTABLE_BASE_URL}/${recordID}`;
    } else {
        url = `${AIRTABLE_BASE_URL}`
    }

    // console.log(requestPayload);
    // console.log(userNotes);
    let requestObj;
    // let requestArray = [];
    // let glossesRaw = requestPayload.senses[0].glosses;

    if (requestPayload !== null && requestType !== "PATCH" ) {
        requestObj = {
            fields: {
                id: requestPayload.reading.kana + ', '+ requestPayload.senses[0].glosses.join(', '),
                kana: requestPayload.reading.kana,
                kanji: requestPayload.reading.kanji,
                furigana: requestPayload.reading.furigana,
                glosses: requestPayload.senses[0].glosses.join().replace(/"/g, ''),
                gif: requestPayload.img
            }
        }
        requestPayload = JSON.stringify(requestObj);
    } else if (requestType === "PATCH" ) {
        requestObj = {
            fields: {
                notes: userNotes
            }
        }
        requestPayload = JSON.stringify(requestObj);
    } else {
        requestPayload = null;
    }

    // console.log(requestPayload);
    try {
        const response = await fetch(url, {
        method: requestType,
        headers: {
            "Authorization": `Bearer ${AIRTABLE_TOKEN}`,
            "Content-Type": "application/json",
        },
        body: requestPayload
        
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

export { airTableAPI };