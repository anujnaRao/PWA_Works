class Stocks{
    constructor(dao) {
      this.dao = dao
    }
  
    // The following operations are done with the modified run method
    createTable() {
      const sql = `
      CREATE TABLE IF NOT EXISTS stocks (
        p_id INTEGER PRIMARY KEY AUTOINCREMENT,
        p_name TEXT,
        p_stock INTEGER)`
      return this.dao.run(sql)
    }

    create(p_name, p_stock) {
        return this.dao.run(
          'INSERT INTO stocks (p_name, p_stock) VALUES (?, ?)',
          [p_name, p_stock])
      }

    update(stockCount) {
        const { p_id, p_stock } = stockCount
        return this.dao.run(
          `UPDATE stocks SET p_stock = ? WHERE p_id = ?`,
          [p_stock, p_id]
        )
      }

    delete(p_id) {
        return this.dao.run(
          `DELETE FROM stocks WHERE p_id = ?`,
          [p_id]
        )
      }

      getById(p_id) {
        return this.dao.get(
          `SELECT * FROM stocks WHERE p_id = ?`,
          [p_id])
      }

      getAll() {
        return this.dao.all(`SELECT * FROM stocks`)
      }

  }
  
  
  module.exports = Stocks;