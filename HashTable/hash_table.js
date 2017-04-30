var hash = function(key, max){
var hashIndex = 0;

key = key.toString().toLowerCase();
for (var i = 0, len = key.length; i < len; i++) {
  value = key.charCodeAt(i).toString().concat(i);
  value = parseInt(value);
  hashIndex += value;
}
return hashIndex % max;

}

function HashTable (max){
  this.storage = [];
  this.max = max;
}

HashTable.prototype.add = function(key, value){
  var index = hash(key, this.max);
   if(this.storage[index] == undefined){
    this.storage[index] = [[key,value]];
   }
   else{
    var inserted = false;
    for(var i = 0; i < this.storage[index].length; i++){
      
      if(this.storage[index][i][0] === key){
        this.storage[index][i][1] = value;
        inserted = true;
      }
    }
    if(inserted == false){
      this.storage[index].push([key, value]);
    }
   }
}

HashTable.prototype.lookUp = function(key){
  var index = hash(key, this.max);
  if(this.storage[index] == undefined){
    return undefined;
  }
  for(var i = 0; i < this.storage[index].length; i++){
  if(this.storage[index][i][0] === key){
  return this.storage[index][i][1];
  }
}

}
HashTable.prototype.remove = function(key){
  var index = hash(key, this.max);
  if(this.storage[index] == undefined){
    return;
  }

  if(this.storage[index].length === 1 && this.storage[index][0][0] === key){
    delete this.storage[index];
    return;
  }
  else{
    for(var i = 0; i < this.storage[index].length; i++){
      if(this.storage[index][i][0] === key){
        this.storage[index].splice(i, 1);
        return ;
      }
    }
  }


}


var ht = new HashTable(10);

ht.add("hello", "world");
ht.add("sha", "ary");
ht.add("Mr", "Fyn");
ht.add("qwert", 10);
ht.add("james1995", "Shashank");
ht.add("myName", "Arya")
console.log(ht.lookUp("hello"));
console.log(ht.lookUp("james1995"));
console.log(ht.lookUp("qwert"));
ht.remove("qwert");
console.log(ht.lookUp("qwert"));

