var orm = require("./orm.js");

var burger = {
  select: function (cb) {
    orm.selectBurger(function (data) {
      cb(data);
    });
  },

  insert: function (burger, cb) {
    orm.insertBurger(burger, function (data) {
      cb(data);
    });
  },

  update: function (burger, cb) {
    orm.updateBurger(burger, function (data) {
      cb(data);
    });
  },
};

module.exports = burger;
