export function eraseResults () {
    localStorage.setItem('allScores', JSON.stringify([]))
    alert('historial borrado')
}

