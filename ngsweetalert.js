(function () {
    'use strict';

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
            var sweetElement = angular.element(element)
            console.log(sweetElement)
            sweetElement.click(function () {
                var sweetOptions = scope.$eval(attrs.sweetOptions);
                var sweetConfirmOption = scope.$eval(attrs.sweetConfirmOption);
                var sweetCancelOption = scope.$eval(attrs.sweetCancelOption);


                swal(sweetOptions,
                    function (isConfirm) {
                        if (isConfirm) {
                            if (sweetConfirmOption) swal(sweetConfirmOption);
                            if (attrs.sweetOnConfirm) scope.$evalAsync(attrs.sweetOnConfirm);
                        } else {
                            if (sweetCancelOption) swal(sweetCancelOption);
                            if (attrs.sweetOnCancel) scope.$evalAsync(attrs.sweetOnCancel);
                        }
                    });

            })

        }
    }

})();