const url = "http://api.openweathermap.org/data/2.5/weather"
const apiKey = "a3d7c5fc38b1204dd62a403fe6631173"

let HTTPHeaders = new Headers()
let init = {
    method : "GET",
    headers: HTTPHeaders,
    cache: "default",
    mode: "cors"
};

class MeteoService {
    getMeteoByVille = async (ville) => {
        return await fetch(`${url}?q=${ville}&appid=${apiKey}&lang=fr&units=metric`, init)
                    .then(res => res.json())
    }
}

export const meteoService = Object.freeze(new MeteoService)