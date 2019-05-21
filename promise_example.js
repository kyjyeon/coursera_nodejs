var Promise = require('promise');

var asyncfunction1 = function(param){
      return new Promise(function(resolved,rejected){
           setTimeout(
                 function(){
                       console.log('func1');
                       resolved('func 1 success:'+param+'\n');
                 },500);
      });
}
var asyncfunction2 = function(param){
      return new Promise(function(resolved,rejected){
           setTimeout(
                 function(){
                       console.log('func2');
                       rejected(new Error('func 2 error:'+param+'\n'));
                 },500);
      });
}
var asyncfunction3 = function(param){
      return new Promise(function(resolved,rejected){
           setTimeout(
                 function(){
                       console.log('func3');
                       resolved('func 3 success:'+param+'\n');
                 },500);
      });
}

var asyncfunction4 = function(param){
      return new Promise(function(resolved,rejected){
           setTimeout(
                 function(){
                       console.log('func4');
                       rejected(Error('func 4 error:'+param+'\n'));
                 },500);
      });
}

var asyncfunction5 = function(param){
      return new Promise(function(resolved,rejected){
           setTimeout(
                 function(){
                       console.log('func5');
                       resolved('func 5 success:'+param+'\n');
                 },500);
      });
}

 

var promise = asyncfunction1(' terry ');

promise

.then(asyncfunction2)

.then(asyncfunction3)

.catch(console.error) // errorhandler1

.then(asyncfunction4)

.then(asyncfunction5)

.catch(console.error)  // errorhandler2

.then(console.log);



출처: https://bcho.tistory.com/1086 [조대협의 블로그]