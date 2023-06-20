export const getCurrentDateTime = () => {
    const months = [
        'янв',
        'фев',
        'март',
        'апр',
        'май',
        'июн',
        'июл',
        'авг',
        'сен',
        'окт',
        'ноя',
        'дек',
    ]

    const weekdays = [
        'воскресенье',
        'понедельник',
        'вторник',
        'среда',
        'четверг',
        'пяятница',
        'суббота',
    ]

    const date = new Date()
    const dayOfMonth = date.getDate()
    const month = months[date.getMonth()]
    const year = date.getFullYear()
    const dayOfWeek = weekdays[date.getDay()]

    let hours = date.getHours()
    let minutes = date.getMinutes()

    if (hours < 10) {
        hours = `0${hours}`
    }

    console.log('dayOfWeek', dayOfWeek)
    console.log('dayOfMonth', dayOfMonth)
    console.log('month', month)
    console.log('year', year)
    console.log('hours', hours)
    console.log('minutes', minutes)

    return{ dayOfWeek, dayOfMonth, month, year, hours, minutes }
}