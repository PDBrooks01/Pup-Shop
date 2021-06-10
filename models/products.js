const db = require('../util/database')

module.exports = class Products{
  constructor(id, name,img, unit_price, description){
    this.id = id,
    this.name = name,
    this.img = img,
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
      "SELECT id,name,img,unit_price,description FROM products WHERE id = ?",[id]
    );
  }

  // static delete(id){
  //   return db.execute(
  //     "DELETE FROM products WHERE id=?",[id]
  //   );
  // }
  // static add(id,name,img,unit_price,description){
  //   return db.execute(
  //     "INSERT INTO products (id,name,img,unit_price,description) VALUES (?,?,?,?)",[id,name,img,unit_price,description]
  //   );
  // }
}
