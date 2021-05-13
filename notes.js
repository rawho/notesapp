const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
    const note = {
        title: title,
        body: body
    }
    
    const notes = loadNotes();
    const duplicateNote = notes.find(note => note.title === title)

    if(!duplicateNote){
        notes.push(note)
        saveNotes(notes)
        console.log(chalk.green('Note added successfully'));
    } else{
        console.log(chalk.red('Title already taken'));
    }

}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter(note => note.title !== title)

    if(notes > notesToKeep){
        console.log(chalk.green('Note removed successfully'));
        saveNotes(notesToKeep)
    } else{
        console.log(chalk.red('No Note found with this title'));
    }
}


const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.blue('Your Notes : '));
    notes.forEach(note => console.log(chalk.green(note.title)))
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find(note => note.title === title)

    if(note){
        console.log(chalk.green(note.title));
        console.log(note.body);
    } else{
        console.log(chalk.red('No note found with this title'));
    }
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const noteJSON = dataBuffer.toString()
        const notes = JSON.parse(noteJSON)
        return notes
    } catch (e) {
        return []
    }
}

const saveNotes = (notes) => {
    const notesJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', notesJSON)
}


module.exports = {
    addNote,
    removeNote,
    listNotes,
    readNote
}