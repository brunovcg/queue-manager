const baseURL = {
    prod : "https://queue-manager-fake-api.herokuapp.com/api/",
    dev: "http://localhost:8000/api/",
    prodMedia : "https://queue-manager-fake-api.herokuapp.com/api/", 
    devMedia : "http://localhost:8000/"
}

export const enviroment = baseURL.dev

export const enviromentMedia = baseURL.devMedia
