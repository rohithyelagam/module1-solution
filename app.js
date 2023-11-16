(function(){

angular.module("LunchCheck",[])
.controller("LunchCheckController",myController);

myController.inject = ['%scope'];

function myController($scope){

    $scope.checkItems = function(){
        if(!$scope.fooditems){
            $scope.message = "Please enter data first";
            return;
        }
        var foods = [];
        var n = $scope.fooditems.length;
        var item="";
        for(var i=0;i<n;i++){
            if($scope.fooditems[i]==','){
                if(item!="")foods.push(item);
                item="";
            }else{
                item+=$scope.fooditems[i];
            }
        }
        if(item!="")foods.push(item);
        if(foods.length == 0){
            $scope.message = "Please enter data first";
        }else if(foods.length<=3){
            $scope.message = "Enjoy!";
        }else{
            $scope.message = "Too much!";
        }
    }
}
})();