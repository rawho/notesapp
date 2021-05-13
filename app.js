const { command } = require('yargs');
const yargs = require('yargs');
const {addNote, removeNote, listNotes, readNote} = require('./notes')


// Add comamnd 
yargs.command({
    command: 'add',
    describe: 'Add a Note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        addNote(argv.title, argv.body)
    }
})

// Remove command 
yargs.command({
    command: 'remove',
    describe: 'Remove note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        removeNote(argv.title)
    }
})

// list command 
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler(){
        listNotes()
    }
})

// read command 
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        readNote(argv.title)
    }
})

yargs.parse()