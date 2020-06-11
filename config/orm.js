var burger_db = require("./connection.js");

var orm = {
  selectBurger: function (cb) {
    burger_db.query("SELECT * FROM burgers", function (err, data) {
      if (err) throw err;

      cb(data);
    });
  },

  insertBurger: function (newBurger, cb) {
    var q = burger_db.query(
      "INSERT INTO burgers (burger_name) VALUES (?)",
      [newBurger],
      function (err, data) {
        if (err) throw err;

        cb(data);
      }
    );

    console.log(q.sql);
  },

  updateBurger: function (burger, cb) {
    burger_db.query(
      "UPDATE burgers SET ? WHERE ?",
      [
        {
          devour: burger.devoured,
        },
        {
          id: burger.id,
        },
      ],
      function (err, data) {
        if (err) throw err;

        cb(data);
      }
    );
  },
};

module.exports = orm;
