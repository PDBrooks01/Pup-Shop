const db = require('../util/database')

module.exports = class Pets{
  constructor(pet_name,pet_type,age,weight,play_style){
    this.pet_name = pet_name;
    this.pet_type= pet_type;
    this.age = age;
    this.weight = weight;
    this.play_style = play_style;
  }
  //Static methods so no instantiation
  //Finding pets in DB and adding them to their owner
  static find(pet){
    return db.execute(
      'SELECT * FROM pets p JOIN users u USING (customer_id)'
    );
  }

  //Saving a Pet
  static  save(pet){
    return db.execute(
      'INSERT INTO pets (pet_name,pet_type,age,weight,play_style) VALUES (?,?,?,?)',
      [pet.pet_name,pet.pet_type,pet.age,pet.weight,pet.play_style]
    );
  }
}
