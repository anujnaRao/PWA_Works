const mysql = require('mysql');

// First you need to create a connection to the database
// Be sure to replace 'user' and 'password' with the correct values
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  databse : 'stockdatabse'
});

con.connect((err) => {
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');


});

let displayStock = document.getElementById('btnDisplay');
displayStock.addEventListener('click', stockDisplay);

let addStock = document.getElementById('btnAdd');
addStock.addEventListener('click', stockIncrement);

let removeStock = document.getElementById('btnRemove');
removeStock.addEventListener('click', stockDecrement);


con.end((err) => {
    // The connection is terminated gracefully
    // Ensures all remaining queries are executed
    // Then sends a quit packet to the MySQL server.
  });
  

function stockDisplay(){
    //Display query

    con.query('SELECT * FROM stocks', (err,rows) => {
        if(err) throw err;
    
        console.log('Data received from Db:');
        console.log(rows);
           //To display each row
        rows.forEach( (row) => {
            console.log(`${row.pid} ${row.p_name}`);
            //Displaying in the index page
            document.getElementById("stockTable").innerHTML = row
        });
    });
}
 


// function fillingData(){
//      //Insert query
//     const author = { name: 'Craig Buckler', city: 'Exmouth' };
//     con.query('INSERT INTO authors SET ?', author, (err, res) => {
//         if(err) throw err;

//         console.log('Last insert ID:', res.insertId);
//     });
// }
 let pid = document.getElementById('stockId').value;
 let stockN = document.getElementById('stockNumber').value;


function stockIncrement(){
    //Updating the query
con.query(
    'UPDATE stocks SET stock = ? Where pid = ?',
    [stockN, pid],
    (err, result) => {
      if (err) throw err;
  
      console.log(`Changed ${result.changedRows} row(s)`);
    }
  );
}

let pid = document.getElementById('stockId').value;
 let stockN = document.getElementById('stockNumber').value;
function stockDecrement(){
    //Updating the query
con.query(
    'UPDATE stocks SET stock = ? Where pid = ?',
    [stockN, pid],
    (err, result) => {
      if (err) throw err;
  
      console.log(`Changed ${result.changedRows} row(s)`);
    }
  );
}
