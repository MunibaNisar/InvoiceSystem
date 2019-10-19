var app =angular.module('mod',[]);
app.controller('ctr',function($scope) {
  $scope.products = [
    {name: "sumsung" , price:500, active:false},
    { name: "Iphone" , price:600,active:false},
    {name: "Nokia" , price:700,active:false},
    {  name: "Lenove" ,price:800,active:false},
      {name: "oopo" , price:900,active:false  }
  ];

  $scope.addToList= function (p) {
    p.active = !p.active;

  }

  $scope.total= function () {
    var total= 0;
    angular.forEach( $scope.products , function (p) {
      if(p.active==true)
      {
        total = total+ p.price;
      }


    });
    return total;

  }

});
