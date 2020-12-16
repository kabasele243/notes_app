const fs = require('fs')

const getNotes = function () {
    return 'Your notes...'
}

const addNote = function (title, body){
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function (note){
        return note.title === title
    })

    if(duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes)
    } else {
        console.log('Note Taken!')
    }
    
}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function () {
    try {   
            const dataBuffer = fs.readFileSync('notes.json')
            const dataJSON = dataBuffer.toString()
            return JSON.parse(dataJSON)
        } catch (e) {
            return []
        }
}

const removeNotes = (title, body) => {
    const notes = loadNotes()
    const keepNotes = notes.filter(function (note){
        return note.title !== title
    })

    saveNotes(keepNotes)

}

module.exports = {
    getNotes,
    addNote,
    removeNotes
}