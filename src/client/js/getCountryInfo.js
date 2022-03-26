
const getCountryInfo = async (fullcountryname) => {
    try {
        const requestBody = {
            BASE_URL: `https://restcountries.com/v3.1/name/${fullcountryname}?fullText=true`,
        };
        const countrynameResponse = await fetch('/country-name-info', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        });
        const countrynameData = await countrynameResponse.json();
        return countrynameData;
    } catch (error) {
        console.log('Error :', error);
    }
};

export { getCountryInfo };