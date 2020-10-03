function Stack(initialSize = 10){
    this.items = Array(initialSize);
    this.index = 0;
};
Stack.prototype.size = function() {
    return this.index;
};
Stack.prototype.push = function(val){
    return this.items[this.index++]=val;
};

Stack.prototype.pop = function(){
    return this.items[--this.index];
};
Stack.prototype.pushArray = function(array){
    for (let i in array) {
        this.push(array[i]);
        
    }
};
// salam chetori?


module.exports = Stack;