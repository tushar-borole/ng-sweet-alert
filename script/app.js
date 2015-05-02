(function () {
    'use strict';
    var app = angular.module("ngSweetAlert", ['ng-sweet-alert'])
    app.directive('jsonText', function () {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, element, attr, ngModel) {
                function into(input) {
                    return JSON.parse(input);
                }

                function out(data) {
                    return JSON.stringify(data);
                }
                ngModel.$parsers.push(into);
                ngModel.$formatters.push(out);

            }
        };
    });
    app.controller('MainCtrl', function ($scope) {
        
        $scope.htmlSweet='<a sweetalert sweet-options="{{sweet.option}}" sweet-confirm-option="{{sweet.confirm}}" sweet-cancel-option="{{sweet.cancel}}"  name="login-submit" sweet-on-cancel="checkCancel()" sweet-on-confirm="checkConfirm()" style="background-color:blue"  class="btn" >Try It</a>'
        $scope.htmlSweetOption='<a sweetalert sweet-options='
         $scope.htmlSweetConfirm=' sweet-confirm-options='
         $scope.htmlSweetCancel=' sweet-cancel-options='
         $scope.htmlSweetOnConfirmCancel=' sweet-on-confirm="checkConfirm()" sweet-on-cancel="checkCancel()">Try It</a>'
        $scope.sweet = {};
        $scope.sweet.option = {
            title: "Are you sure?",
            text: "You will not be able to recover this imaginary file!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel plx!",
            closeOnConfirm: false,
            closeOnCancel: false
        }
        $scope.sweet.confirm = {
            title: 'Deleted!',
            text: 'Your imaginary file has been deleted.',
            type: 'success'
        };

        $scope.sweet.cancel = {
            title: 'Cancelled!',
            text: 'Your imaginary file is safe',
            type: 'error'
        }
        
        $scope.checkCancel=function(){
        console.log("check cancel")
        }
        
         $scope.checkConfirm=function(){
          console.log("check confrim")
        }
        
        
        
    });
})();