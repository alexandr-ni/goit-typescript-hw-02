/*
  Створіть новий тип даних, який підходить для цих двох об'єктів.
*/

const page1 = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: new Date("2021-01-01"),
    updateAt: new Date("2021-05-01"),
  },
};

const page2 = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};

type CombinePages = typeof page1 & typeof page2;

const combinePages: CombinePages = {
  title: "Cool site",
  likes: 20,
  accounts: ["Sam", "Adam"],
  status: "open",
  details: {
    createAt: new Date("2022-01-01"),
    updateAt: new Date("2022-05-01"),
  },
};

export {};
