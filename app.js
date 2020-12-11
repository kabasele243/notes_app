const fs = require('fs');
const yargs = require('yargs')
const chalk = require('chalk');
const { argv } = require('process');

// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title'
        }
    },
    handler: function(){
        console.log("Adding a new note", argv.title)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function(){
        console.log('Deleting a note')
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

console.log(process.argv)
console.log(yargs.argv)
