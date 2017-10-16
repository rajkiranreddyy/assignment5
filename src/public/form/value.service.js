(function()
{
    angular.module("public").service("value",value);
    value.$inject=['$http'];
function value($http)
{
var z1=this;
z1.check=function(k)
{
//    alert("in request 2");
var response=$http({
method:'GET',
url:("https://davids-restaurant.herokuapp.com/menu_items.json?category="+k)
});
return response;

};



}})();