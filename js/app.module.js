var app = angular.module("app", []);
app.controller("HeaderController", function ($scope) {
  var ctrl = this;
  ctrl.appNameFirst = "Bareilly";
  ctrl.appNameLast = "Highway King";
  ctrl.appName = "Bareilly Highway King";
  ctrl.imgs = {
    banner: {
      src: "img/banner.jpg",
      alt: "banner",
    },
  };
});
app.controller("ProfilesController", function ($scope) {

  this.profiles = [
    {
      name: "Sher Dada",
      designation: "Partner",
      pic: "img/pics/p1.jpg",
    },
    {
      name: "Dharmendra Da",
      designation: "Brother",
      pic: "img/pics/p2.jpg",
    },
    {
      name: "Third Party",
      designation: "Berozgar",
      pic: "img/pics/p3.jpg",
    },
    {
        name: "Unknown Person",
        designation: "Waiter",
        pic: "img/pics/p4.jpg",
      },
  ];
});
app.controller("MainController", function () {
  var ctrl = this;

  ctrl.todos = [
    { text: "learn AngularJS", done: true },
    { text: "build an AngularJS app", done: false },
  ];

  ctrl.addTodo = function () {
    ctrl.todos.push({ text: ctrl.todoText, done: false });
    ctrl.todoText = "";
  };

  ctrl.remaining = function () {
    var count = 0;
    angular.forEach(ctrl.todos, function (todo) {
      count += todo.done ? 0 : 1;
    });
    return count;
  };

  ctrl.archive = function () {
    var oldTodos = ctrl.todos;
    ctrl.todos = [];
    angular.forEach(oldTodos, function (todo) {
      if (!todo.done) ctrl.todos.push(todo);
    });
  };
});
