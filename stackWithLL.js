const LinkedList = require('./linkedLists');

function Stack(value) {
this._storage = new LinkedList(value);

}
Stack.prototype.push = function (value) {
this._storage.addElemToLast(value);

// LENGTH CAN BE ADDED (WIP) ########
// return this._storage.length;
}

Stack.prototype.pop = function() {

	return this._storage.removeTail();

}

Stack.prototype.peek = function() {
	return this._storage.tail.value;
}

let myStack = new Stack('one 1');
console.log(myStack.peek());
myStack.push('two 2');
console.log(myStack.peek())
myStack.push('three 3');
console.log(myStack.peek());
console.log(myStack.pop(), 'hah')
console.log(myStack.peek())