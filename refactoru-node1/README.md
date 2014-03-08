refactoru-node1
===============

your first server

Part I: Simple Web Server

Create a new directory for your project
Add a single file server.js
Add the following code to server.js:
var http = require('http');
http.createServer(function (req, res) {
 res.writeHead(200, {'Content-Type': 'text/plain'});
 res.end('Hello World\n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
Save the file
Navigate to the directory that contains server.js in terminal
Confirm that your file is working correctly by starting it in node:
Type node server.js in terminal and run the command
Navigate your browser to http://localhost:1337
Confirm that it shows Hello World
Here's What Happened By creating a js file that contains the code for running an http server and calling it via the node terminal command, you are allowing node to serve the file and route any requests to the 1337 port through your file. In this case, every request receives the "Hello World" text as text/plain encoded.

Part II: Adjusting your Server

End the server by hitting control+c in the terminal tab that is running the node process.
Edit your server.js file by changing the content sent to the client in res.end(...) from "Hello World" to <h1>Hello World</h1>
Restart the node process in terminal by running node server.js
Reload the page http://localhost:1337 in the browser.
What is the output? Is it what you expected?
End the server with control+c and edit server.js again
Change the Content-Type from 'text/plain' to 'text/html'
Restart the node server and request the localhost url again
How did the output change from the previous request?
Part III: Serving Files

End the server process
Add a data.txt file to your directory (you can name it whatever you'd like)
Enter some "Hello World from a File" into the text file and save it
In server.js, tell node to utilize the File System library by adding var fs = require('fs'); at the very top of the file. This allows you to read and write files.
Inside of the http.createServer(function (req, res) {...} anonymous function, update the code to utilize the fs.readFileSync function:
At the top of the function, load in the text file you created by typing var fileContents = fs.readFileSync('data.txt');
Adjust the res.end(...) call to send the fileContents variable instead of the string it is currently sending.
Adjust the 'Content-Type' again by changing it back to 'text/plain'
Restart your node server and request the localhost url again
You should now see the contents of your text file written out to the page!
readFileSync is Synchronous The problem with readFileSync is that it is considered a blocking method. This means that the server has to wait for the file to be loaded before moving on to the next instruction in your code. This is bad! It slows down the server and prevents it from running smoothly. Especially in this case since reading from the file system is an expensive and slow process. Node is asynchronous in nature and we should take advantage of that using callbacks!

Part IV: Make it Asynchronous

We're going to redo PART III using fs.readFile and callbacks
Adjust var fileContents = fs.readFileSync('data.txt'); to use readFile: var fileContents = fs.readFile('data.txt', function(){});
Right now your createServer callback should have var fileContents..., res.writeHead..., and res.end...
Move the "res.writeHead" line and "res.end" line into the callback you created for "fs.readFile"
Because of the scope of the declaration of "fileContents", it will still be accessible inside of the callback for "readFile" so you shouldn't need to change anymore of the code.
Restart your node server and request the localhost url again
You should see the same result as in PART III!
Success! So what's different? This time we utilized the asynchronous nature of node by passing a callback to the readFile function. This allows our code to move along normally without being blocked. Once the file has been loaded and the content is ready, node will invoke our callback and allow us to continue on with sending content back to the server.

