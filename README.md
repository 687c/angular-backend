# node-mongo teswt

to run

`npm run dev`

to see all the tasks go to `http://localhost:3040/api/v1/task/`

to see all the categories go to `http://localhost:3040/api/v1/category/`

to create a task use the route `http://localhost:3040/api/v1/task/create` and POST the body object containing the title and message
`{ title: "<YOUR TITLE HERE>", message: "<YOUR MESSAGE HERE>", category: "<YOUR CATEGORY HERE>" }`
the categories consists of `todo` `priority` `cooking` and `maybe`

to list all categories use the route `http://localhost:3040/api/v1/category`

to create a category use the route `http://localhost:3040/api/v1/task/create` and POST the body object consisting a title field
`{ title: <YOUR TITLE HERE> } `

to update a task, `http://localhost:3040/api/v1/task/update` with the title and the message you want updated

to delete a task, use `http://localhost:3040/api/v1/task/remove` with the title of the task you want removed

to count the number of tasks in a particular category, `http://localhost:3040/api/v1/task/count`
