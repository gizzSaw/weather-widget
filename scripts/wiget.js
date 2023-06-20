import {startWidget} from './modules/widgetServices.js'

const initWidget = (app) => {
    const widget = startWidget()
    app.append(widget)
}

initWidget(document.querySelector('#app'))