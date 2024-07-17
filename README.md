# NodeJs_Setup_CheatSheet

## Installation
To set up this project, you will need to install the required npm packages. Run the following commands in your terminal:
```bash
npm install mysql cors dotenv express
npm install nodemon --save-dev
```
## Explanation of Installed Packages

Here's a brief overview of the npm packages installed for this project and what each one does:

- **mysql**: Connects your application to MySQL databases. This is essential for any operations that require storing or retrieving data from a MySQL database.

- **cors**: Enables Cross-Origin Resource Sharing (CORS), allowing your server to accept requests from different domains. This is important for APIs that are accessed from various web applications.

- **dotenv**: Manages environment variables, keeping your configuration separate from your code. This is crucial for protecting sensitive information such as database passwords or API keys.

- **express**: Provides the framework for building web applications and APIs. It simplifies the server creation process by providing a robust set of features to develop both web and mobile applications.

- **nodemon** (development only): Watches for file changes in real time and automatically restarts your server, enhancing development productivity. It is only used in development, not in production environments.


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
