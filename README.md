[![Bower version](https://badge.fury.io/bo/ng-sweet-alert.png)](http://badge.fury.io/bo/ng-sweet-alert)
[![npm version](https://badge.fury.io/js/ng-sweet-alert.png)](http://badge.fury.io/js/ng-sweet-alert)

# ng-sweet-alert

ng-sweet-alert (angular sweetalert) is an directive for sweet alert 

# Getting Started

Install via bower

```sh
bower install ng-sweet-alert
```

Install via npm

```sh
npm install ng-sweet-alert
```

Add dependency in your module

```javascript
angular.module('yourApp',[   'ng-sweet-alert' ]); 
```

# Configure

```html
<input sweetalert sweet-options="{title: 'Are you sure?',text: 'You will not be able to recover this imaginary file!',type: 'warning',showCancelButton: true,confirmButtonColor: '#DD6B55',confirmButtonText: 'Yes, delete it!',cancelButtonText: 'No, cancel plx!'}" sweet-confirm-option="{title: 'Deleted!',text: 'Your imaginary file has been deleted.',type: 'success'}" sweet-cancel-option="{title: 'Cancelled!',text: 'Your imaginary file is safe',type: 'error'}" type="submit" name="login-submit" sweet-on-cancel="checkCancel()" sweet-on-confirm="checkConfirm()" id="login-submit" tabindex="4" class="form-control btn btn-login" value="Log In">
```




## ❤ contribute ❤
I'm happy for any [issue or feature request](https://github.com/tushariscoolster/ng-sweet-alert/issues), you might encounter or want to have. Even a one liner is better, than no feedback at all. Pull requests are also highly welcome.  Tell your fellow programmers, [say that you use it on ng-modules](http://ngmodules.org/modules/ng-sweet-alert), tweet or even blog about it.


## (possible)  future features
* [your feature request](https://github.com/tushariscoolster/ng-sweet-alert/issues)!





License
----

MIT


**Free Software, Hell Yeah!**

