const Promise = require('bluebird')
const AppDAO = require('./dao')
const Stocks = require('./stocks')


function main() {
  const dao = new AppDAO('./database.sqlite3')
  const blogProjectData = [{ p_name: 'Cycles', p_stock: 10 }, { p_name: 'Cars', p_stock: 20 },
  { p_name: 'Toy Gun', p_stock: 15 }, { p_name: 'Dolls', p_stock: 30 },
  { p_name: 'Puzzel Box', p_stock: 10 }, { p_name: 'cars', p_stock: 20 }]
  const stockRepo = new Stocks(dao)
  let productID
  stockRepo.createTable()
    .then(() => stockRepo.createTable())
    .then(() => {
      for(i = 0;i<blogProjectData.length;i++){
        stockRepo.create(blogProjectData[i].p_name, blogProjectData[i].p_stock)
      }
      console.log(dao.getById(3))
    })
    .then((data) => {
      productID = data.p_id
      console.log(data)
    })
    .then(() => stockRepo.getById(productID))
    .then((stock) => {
      console.log(`\nRetreived project from database`)
      console.log(`Stock id = ${stock.p_id}`)
      console.log(`Stock name = ${stock.p_name}`)
      console.log(`Stock count = ${stock.p_stock}`)
      return stockRepo.getAll()
    })
    .catch((err) => {
      console.log('Error: ')
      console.log(JSON.stringify(err))
    })

    dao.all("SELECT * FROM stocks", function(err, rows) {
      rows.forEach(function (row) {
          console.log(row.p_id, row.p_name, row.p_stock);
      })
});	
}

main()