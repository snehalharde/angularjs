(function (){
'use strict'

angular.module('LunchCheck', [])
    .controller('LunchCheckController',LunchCheckController);
 
    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope){
       
        $scope.userInput = "";       
        $scope.message = "";
        $scope.feedback = function(){

            var fb = convertToarray($scope.userInput);            
            $scope.message = fb;
        };
        
    };
    
   
    function convertToarray (string){
        
        var divElm= angular.element(document.querySelector('.message'));
        var inputElm = angular.element(document.querySelector('#input'));        
        var messageValue = "";
        var array = string.split(","); 
        var newarray = [].concat(array).sort().reverse().pop();
        
                if(!Boolean(string)){
                    inputElm.css('border-color','red');
                    divElm.css('color','red');
                    messageValue ="Please enter data first.";
                }
                else if(newarray === ""){

                    messageValue ="Empty Item(s) NOT considered towards count."
                }
                else if(array.length >= 1  && array.length <= 3 ){
                        inputElm.css('border-color','green');
                        divElm.css('color','green');
                        messageValue = "Enjoy!";
                }
                else if(array.length > 3){
                        inputElm.css('border-color','green');
                        divElm.css('color','green');
                        messageValue = "Too much!" ; 

                }
        return messageValue;
        
};


})();