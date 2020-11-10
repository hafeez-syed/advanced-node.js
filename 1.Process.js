/**
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

 Author: Hafeez Syed
 File: 1.Process.js
 Created on 21/2/17 11:53 PM
 Project: PLS-Advanced-Node.js
 Description: < DESCRIPTION HERE >

 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */

// process is an event emitter

process.on('exit', (code) => {
	// can't use event loop or asynchronous operation here

	// do one final synchronous operation
	// before the node process terminates

	console.log(`EXIT HANDLER ::: About to exit with code ${code}`);

});

process.on('uncaughtException', (err) => {
	// when an exception is not handled then it bubbles all the way to event loop,
	// in that case node will print the stack trace an exit.

	// BUT

	// if we handle the exception here inside the `uncaughtException`, node will not exit

	// so do a cleanup and then exit.

	console.error(`UNCAUGHT EXCEPTION HANDLER ::: ${err}`);

	// FORCE exit the process too.
	process.exit(1); // -> RECOMMENDED
});

// to restart the exiting process and
// register handler for both events
process.stdin.resume();


//trigger a TypeError exception
console.dog();