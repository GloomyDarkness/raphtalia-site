async function tempo(request, response) {
    const dynamicDate = new Date();

    const urlResponse = await fetch('https://neko-love.xyz/api/v1/kiss')
    const urlResponseJson = await urlResponse.json();
    const url = urlResponseJson
    response.json({
        url: url
    })
}

export default tempo;   