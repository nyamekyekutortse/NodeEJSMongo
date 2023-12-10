projectSetupPlain: 
	npm init -y
	npm install express
	npm install ejs
	npm install mongodb
	npm install mongoose
	npm install body-parser
	npm install --save-dev nodemon

runServer: 
	nodemon server.js