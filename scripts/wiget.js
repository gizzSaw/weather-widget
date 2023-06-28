import { cityServiceSearch } from './modules/cityServiceSearch.js'
import {startWidget} from './modules/widgetServices.js'

const initWidget = async (app) => {
    const city = 'Воронеж'
    const widget = await startWidget(city)
    app.append(widget)

    cityServiceSearch(widget)
}

initWidget(document.querySelector('#app'))