export function saveScore(count) {
    if (!localStorage.allScores) {
        localStorage.setItem('allScores', JSON.stringify([]))
    }

    let allScores = JSON.parse(localStorage.getItem('allScores'))
    // Fecha de la partida
    let date = new Date()
    let month = date.getMonth()
    let day = date.getDate()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let time = day + '/' + month + ' at ' + hours + ':' + minutes

    // objeto que recoge la puntuacion y la fecha de la partida
    let result = {
        date: time,
        score: count
    }
    // guardamos en local storage
    allScores.push(result)
    localStorage.setItem('allScores', JSON.stringify(allScores))
}