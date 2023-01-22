# Node-todo
Simple todo app built with node express. Mongo db used for database.

# Installing
Clone this repo and run npm install

# Endpoints
Note: All endpoints return json. They don't render an ejs or html file. See the todo model for the schema.

- '/' - fetch all todo documents
- '/todo/detail/:id' - fetch single todo document
- '/create/todo' - create todo document
- '/todo/delete/:id' - delete todo document
- '/todo/update/:id' - update todo document
