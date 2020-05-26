var app = angular.module("app", []);
app.controller("HeaderController", function ($scope) {
  var ctrl = this;
  ctrl.appNameFirst = "Bareilly";
  ctrl.appNameLast = "Highway King";
  ctrl.appName = "Bareilly Highway King";
  ctrl.imgs = {
    banner: {
      src: "img/banner-960x400.jpg",
      alt: "banner",
    },
  };
});
app.controller("GalleryController", function ($scope) {
  var ctrl = this;
  
  ctrl.pics = [
    {
      title: "Front Area",
      src: "img/gallery/house1.jpg",
    },
    {
      title: "Lawn",
      src: "img/gallery/house2.jpg",
    },
    {
      title: "Sitting Area",
      src: "img/gallery/house3.jpg",
    },
    {
      title: "Kitchen",
      src: "img/gallery/house4.jpg",
    },
  ];
  // setInterval(() => {
  //   ctrl.pics = ctrl.pics.reverse()
  // }, 2000);
});
app.controller("ProfilesController", function ($scope) {
  this.profiles = [
    {
      name: "Sher Dada",
      designation: "Partner",
      pic: "img/pics/pic1-670x670.jpg",
    },
    {
      name: "PROFILE",
      designation: "Partner",
      pic: "img/pics/profile-670x670.jpg",
    },
    {
      name: "PROFILE",
      designation: "Partner",
      pic: "img/pics/profile-670x670.jpg",
    },
    {
      name: "PROFILE",
      designation: "Partner",
      pic: "img/pics/profile-670x670.jpg",
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
