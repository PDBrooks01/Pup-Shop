const db = require('../util/database')

module.exports = class Products{
  constructor(product_id, name, unit_price, description){
    this.product_id = product_id,
    this.name = name,
    this.unit_price = unit_price,
    this.description = description
  }


  static fetchAll(){
    return db.query(
      //'SELECT name,unit_price AS price FROM products',[name,unit_price]
      'SELECT * FROM products'
    );
  }
  static show (product_id){
    return db.query(
      "SELECT product_id,name,unit_price,description FROM products WHERE product_id = ?",[product_id]
    );
  }
}
