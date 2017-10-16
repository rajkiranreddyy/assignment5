(function(){
angular.module('public').controller('form',form);
form.$inject=['$cookies','$state','$scope','value'];
function form($cookies,$state,$scope,value)
{
var x=this;
$scope.l=false;
$scope.clicked=function(f)
{
    
    console.log(f);
//$scope.l=true;

$scope.d=false;


{
$cookies.putObject('obj',f);
//$state.go("public.Myinfo");

var x;$scope.c=0;
var promise=value.check(f.name5.charAt(0));
promise.then(function(response){
    //$scope.name6="lllllll";
    
x=response.data.menu_items;
var y=0;
for(;y<x.length;++y)
{

if(f.name5==x[y].short_name){
$scope.c=1;
    $state.go('public.Myinfo');

}


}
if($scope.c==0){alert("No match found");$state.go('public.Myinfo');}


});
}

}

}

})();