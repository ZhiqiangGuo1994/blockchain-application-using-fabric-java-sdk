'use strict';

function collectSameElements(collectionA, collectionB) {
  var cn = [];
  console.log(collectionA)
  for(var i=0;i<collectionA.length;i++){
   for(var j=0;j<collectionB['value'].length;j++){
     if(collectionA[i]['key'] == collectionB['value'][j]){
       cn.push(collectionA[i]['key']);
     }
   }
  }
  return cn;
}
