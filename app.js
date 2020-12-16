const fs = require('fs');
const yargs = require('yargs')
const chalk = require('chalk');
const { argv } = require('process');
const notes = require('./notes.js')

// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOptions: true,
            type: 'string'
        },
        body: {
            describe: "Note description",
            demandOptions: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.addNote(argv.title, argv.body)
        
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOptions: true,
            type: 'string'
        },
        body: {
            describe: 'Note description',
            demandOptions: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.removeNotes(argv.title, argv.body)
    }
})

// List command
yargs.command({
    command: 'list',
    describe: 'list notes',
    handler: function(){
        console.log('list notes')
    }
})

// Read command
yargs.command({
    command: 'read',
    describe: 'read a note',
    handler: function(){
        console.log('read a note')
    }
})

yargs.parse()
