/**
 *  * @description directive for sweet alert 
    * @author Tushar Borole
    * @createDate 18/04/2015
    * @version 1.0.3
    * @lastmodifiedDate 06/18/2015
    */



(function () {
    'use strict';
    
    
	// Check we have sweet alert js included
	if (angular.isUndefined(window.swal)) {
		throw "Please inlcude sweet alert js and css from http://t4t5.github.io/sweetalert/";
	}

    angular
        .module('ng-sweet-alert',[])
        .directive('sweetalert', sweetalert);

    sweetalert.$inject = ['$parse'];

    /* @ngInject */
    function sweetalert($parse) {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            link: link
        };
        return directive;

        function link(scope, element, attrs, controller) {
            var sweetElement = angular.element(element);
            sweetElement.click(function () {
                var sweetOptions = scope.$eval(attrs.sweetOptions);
                var sweetConfirmOption = scope.$eval(attrs.sweetConfirmOption);
                var sweetCancelOption = scope.$eval(attrs.sweetCancelOption);


                swal(sweetOptions,
                    function (isConfirm) {
                        if (isConfirm) {
                            if (sweetConfirmOption) swal(sweetConfirmOption);
                            if (attrs.sweetOnConfirm) scope.$evalAsync(attrs.sweetOnConfirm);
                               sweetElement.trigger("click");
                        } else {
                            if (sweetCancelOption) swal(sweetCancelOption);
                            if (attrs.sweetOnCancel) scope.$evalAsync(attrs.sweetOnCancel);
                        }
                    });

            })

        }
    }

})();
