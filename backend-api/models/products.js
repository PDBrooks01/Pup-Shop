const db = require('../util/database')

module.exports = class Products{
  constructor(id, name, unit_price, description){
    this.id = id,
    this.name = name,
    this.unit_price = unit_price,
    this.description = description
  }


  static fetchAll(){
    return db.execute(
      //'SELECT name,unit_price AS price FROM products',[name,unit_price]
      'SELECT * FROM products'
    );
  }
  static show (id){
    return db.query(
      "SELECT id,name,unit_price,description FROM products WHERE id = ?",[id]
    );
  }
}
