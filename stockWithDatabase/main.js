const Promise = require('bluebird')
const AppDAO = require('./dao')
const Stocks = require('./stocks')


function main() {
  const dao = new AppDAO('./database.sqlite3')
  const blogProjectData = [ {p_name: 'Cycles',  p_stock: 10},}, {p_names}]
  const stockRepo = new Stocks(dao)
  
  let productId

  stockRepo.createTable()
    .then(() => stockRepo.createTable())
    .then(() => stockRepo.create(blogProjectData.p_name,blogProjectData.p_stock))
    .then((data) => {
      productId = data.p_id
      const tasks = [
        {
          name: 'Outline',
          description: 'High level overview of sections',
          isComplete: 1,
          projectId
        },
        {
          name: 'Write',
          description: 'Write article contents and code examples',
          isComplete: 0,
          projectId
        }
      ]
      return Promise.all(tasks.map((task) => {
        const { name, description, isComplete, projectId } = task
        return taskRepo.create(name, description, isComplete, projectId)
      }))
    })
    .then(() => projectRepo.getById(projectId))
    .then((project) => {
      console.log(`\nRetreived project from database`)
      console.log(`project id = ${project.id}`)
      console.log(`project name = ${project.name}`)
      return projectRepo.getTasks(project.id)
    })
    .catch((err) => {
      console.log('Error: ')
      console.log(JSON.stringify(err))
    })
}

main()