const mysql = require('../lib/mysql');

class commonModel {
  static get(email, type) {
    return new Promise((resolve, reject) => {
      let q = `Select * from users where type = ${type} and email = '${email}'`;
      mysql
        .query(q)
        .then((data) => resolve(data))
        .catch((e) => reject(e));
    });
  }

  static set(email, hash, privateKey, type) {
    return new Promise((resolve, reject) => {
      let q = `insert into users (email,password,privateKey,type) values ('${email}','${hash}','${privateKey}','${type}')`;
      mysql
        .query(q)
        .then((data) => resolve(data))
        .catch((e) => reject(e));
    });
  }
}

module.exports = commonModel;
