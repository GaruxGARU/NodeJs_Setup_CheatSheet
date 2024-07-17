# NodeJs_Setup_CheatSheet

## Installation
To set up this project, you will need to install the required npm packages. Run the following commands in your terminal:
```bash
npm install mysql cors dotenv express
npm install nodemon --save-dev
```
## Configuration

### Update `package.json`

To configure the project for development with ES Modules and automated server restarts, make the following updates in your `package.json`:

1. **Enable ES Modules:**
   Add this line to your `package.json` to allow the use of ES6 `import` and `export` statements:

   ```json
   "type": "module"
   ```
2. **Start Script with Nodemon:**
   Include a start script to use nodemon, which restarts the server automatically when files change, enhancing development productivity.
    ```json
    "scripts": {
       "test": "echo \"Error: no test specified\" && exit 1",
       "start": "nodemon server.js"
    },
    ```
3. **Change main:**
   ```json
   "main": "server.js",
   ```

## References
- [Node.js Cheat Sheet - Medium](https://medium.com/@yuvrajkakkar1/node-js-cheat-sheet-essential-quick-reference-f26322ac1189)
- [Node Cheat Sheet - University of Washington](https://courses.cs.washington.edu/courses/cse154/19su/resources/assets/cheatsheets/node-cheatsheet.pdf)
