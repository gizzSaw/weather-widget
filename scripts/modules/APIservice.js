const API_URL = 'https://api.openweathermap.org/data/2.5/'
const API_KEY = '75ed6fb157c4ddd9f41704b5fc5f39fa'

export const fetchWeather = async (city) => {
    try {
        const response = await fetch(`${API_URL}weather?q=${city}&appid=${API_KEY}&lang=ru`)
        if (!response.ok) {
            throw new Error("Ошибка запроса")
        }
        const data = await response.json()
        return { succcess: true, data}
    } catch (err) {
        return { succcess: false, err}
    }
}