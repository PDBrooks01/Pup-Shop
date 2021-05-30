const db = require('../util/database')

module.exports = class Cart{
  constructor(id,product_name, unit_price){
    this.id = id;
    this.product_name = product_name;
    this.unit_price = unit_price;
  }

  static fetchAll(){
    return  db.execute('SELECT * FROM cart')
  }
  static post(product_name,unit_price){
    return db.query('INSERT INTO cart (product_name,unit_price) VALUES (?,?)',[product_name,unit_price]);
  }
  static delete(id){
    return  db.query('DELETE FROM cart WHERE id = ?',[id]);
  }

}
