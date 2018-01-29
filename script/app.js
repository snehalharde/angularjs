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
        }   
    };
    
   
    function convertToarray (string){
        var messageValue = "";
        var divElm= angular.element(document.querySelector('.message'));
        var inputElm = angular.element(document.querySelector('#input'));
        var stringToarray = string.split(",");
        const result = stringToarray.filter(word => word.length == 0);
        const result2 = stringToarray.includes("");
        const str = string.indexOf('');
        console.log(str);
        console.log("result2 :" +result2);
        var arrayLength = stringToarray.length;
            if(result){
                console.log("going into undefined")
                
                inputElm.css('border-color','red');
                //messageValue = "t";

           }
            else
             if(stringToarray == 0){            
                    
                    inputElm.css('border-color','red');
                    divElm.css('color', 'red');
                    messageValue = "Please enter data first";
            }
            else if(arrayLength >= 1  && arrayLength <= 3 ){
                    inputElm.css('border-color','green');
                    divElm.css('color','green');

                    messageValue = "Enjoy!";
            }
            else if(arrayLength > 3){
                    inputElm.css('border-color','green');
                    divElm.css('color','green');
                    messageValue = "Too much!" ; 
                    
            }
        return messageValue;
};
    

})();