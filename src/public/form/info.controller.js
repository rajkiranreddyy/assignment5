(function(){
angular.module('public').controller('info',info);
info.$inject=['$cookies','value','$scope'];
function info($cookies,value,$scope)
{

    
    
    $scope.c=0;
    $scope.name6="no description";$scope.name7="no description";
    $scope.name1;$scope.name2;
    $scope.name3;$scope.name4;
    $scope.name5;
    $scope.set;
    $scope.set=false;
    var x;

    //var z=$cookies.getObject('obj');
    $scope.name1=" ";$scope.name2=" ";$scope.name3=" ";$scope.name4=" ";$scope.name5="not yet registered ";
    var f=$cookies.getObject('obj');
     if(f==undefined)
     {$scope.set=false}
     else{$scope.set=true}    


    if(f==undefined){}
    else
    {
        $scope.name1=f.name1;
        $scope.name2=f.name2;
        $scope.name3=f.name3;
        $scope.name4=f.name4;
        $scope.name5=f.name5;$scope.a=$scope.name5.charAt(0);
        //$cookies.remove('obj');
       // $scope.name6="vvvvvv";
       
    var promise=value.check($scope.a);
    promise.then(function(response){
        //$scope.name6="lllllll";
        
x=response.data.menu_items;
var y=0;
for(;y<x.length;++y)
{

if($scope.name5==x[y].short_name){
$scope.c=1;
$scope.name6=x[y].name+"-"+x[y].description;

}
if($scope.c==0){$scope.name6="Not found Anything of your choice"}

}


$scope.name7=response.data.menu_items.name;
});

if($scope.name7==undefined)
{$scope.name7="no item found of your choice";}
}}


})();