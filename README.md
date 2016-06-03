[![Latest Stable Version](https://img.shields.io/npm/v/ng-sweet-alert.svg?style=flat-square)](https://www.npmjs.com/package/ng-sweet-alert)
[![NPM Downloads](https://img.shields.io/npm/dm/ng-sweet-alert.svg?style=flat-square)](https://www.npmjs.com/package/ng-sweet-alert)
[![Latest Stable Version](https://img.shields.io/bower/v/ng-sweet-alert.svg?style=flat-square)](http://bower.io/search/?q=ng-sweet-alert)
[![Build Status](https://img.shields.io/github/forks/tushariscoolster/ng-sweet-alert.svg?style=flat-square)](https://github.com/tushariscoolster/ng-sweet-alert)
[![Build Status](https://img.shields.io/github/stars/tushariscoolster/ng-sweet-alert.svg?style=flat-square)](https://github.com/tushariscoolster/ng-sweet-alert)


# ng-sweet-alert

ng-sweet-alert is an directive for sweet alert [sweetalert]. Integration of sweet alert becomes very easy with angular js. There is no need to write a single line of javascript code. Only few html attribute is enough to use sweetalert.

## Getting Started

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

## Demo

Have a look at the [DEMO](http://tushariscoolster.github.io/ng-sweet-alert) or the [plunkr](http://plnkr.co/edit/OBhogm1ZfaGKN466Dijv?p=preview)! Edit and Fork :)


## Configure

```html
<input sweetalert sweet-options="{title: 'Are you sure?',text: 'You will not be able to recover this imaginary file!',type: 'warning',showCancelButton: true,confirmButtonColor: '#DD6B55',confirmButtonText: 'Yes, delete it!',cancelButtonText: 'No, cancel plx!'}" sweet-confirm-option="{title: 'Deleted!',text: 'Your imaginary file has been deleted.',type: 'success'}" sweet-cancel-option="{title: 'Cancelled!',text: 'Your imaginary file is safe',type: 'error'}" type="submit" name="login-submit" sweet-on-cancel="checkCancel()" sweet-on-confirm="checkConfirm()" id="login-submit" tabindex="4" class="form-control btn btn-login" value="Log In">
```

## Documentation


|                  | Option| 
 ----------------- | ---------------------------- | ------------------
| sweet-options | `'{title: 'Are you sure?',text: 'You will not be able to recover this imaginary file!',type: 'warning',showCancelButton: true,confirmButtonColor: '#DD6B55',confirmButtonText: 'Yes, delete it!',cancelButtonText: 'No, cancel plx!'}'` 
| sweet-confirm-option| `"{title: 'Deleted!',text: 'Your imaginary file has been deleted.',type: 'success'}"`            
| sweet-cancel-option| `{title: 'Cancelled!',text: 'Your imaginary file is safe',type: 'error'}` 
| sweet-on-cancel| `checkCancel()` 
| sweet-on-confirm| `checkConfirm()` 


----------

## Use SweetAlert as service
  
  swal() gets two arguments;
  first argument is parameters Objects (with default values).
  second argument is Callback function when clicking on "OK"/"Cancel", which is a promise.
  register to the promise (using 'then') and handle the resolve / reject according to your business logic.
  
  Add 'SweetAlert' to your directive / controller / ect)
  Use SweetAlert.confirm(msg, options) / SweetAlert.alert(msg, options) / SweetAlert.info(msg, options) / SweetAlert.success(msg, options)
  pass arguments:
  
  msg; String - The message to be displayed in the alert / confirm box (mandatory).
  options; Object (optinal):
    title: String - the title of the box.
    type: String - "warning" / "info" / "error" / "success" / "" (empty string will not display a graphic icon).
    showCancelButton: Boolean - shows the "cancel" button (true will behave like confirm dialog, false will behave like alert dialog).
  
  Use returned promise;
  
  ```javascript
  SweetAlert.confirm("Are you sure?", {title : "Careful now!"})
            .then(function(p) { do something on success },
                  function(p) { do something on fail }
            );
  
  SweetAlert.success("You have successfully completed our poll!", {title: "Good job!"});
```


## Documentation: SweetAlert as a service 


|                  | Option| 
 ----------------- | ---------------------------- | ------------------
| msg (mandatory)| `"Are you sure you want to do that.."` 
| options| `"{title: 'Delete this?', type: 'warning' showCancelButton: true}"`            


----------

## Contributing

Open an issue first to discuss potential changes/additions. If you have questions with the guide, feel free to leave them as issues in the repository. If you find a typo, create a pull request. The idea is to keep the content up to date and use github’s native feature to help tell the story with issues and PR’s, which are all searchable via google. Why? Because odds are if you have a question, someone else does too! You can learn more here at about how to contribute.

*By contributing to this repository you are agreeing to make your content available subject to the license of this repository.*

### Process
    1. Discuss the changes in a GitHub issue.
    2. Open a Pull Request, reference the issue, and explain the change and why it adds value.
    3. The Pull Request will be evaluated and either merged or declined.

## License

 Use this guide. Attributions are appreciated._

### Copyright

Copyright (c) 2014-2015 [Tushar Borole](http://www.tusharborole.com)

### (The MIT License)
Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

##Last but not least
This is made in India with love and passion  ʕ´•ᴥ•`ʔ

<a href="../../" target="_blank"><img src="http://lonamowers-hrd.appspot.com/images/made_india.jpg" height="200"></a>
