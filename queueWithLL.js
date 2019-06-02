const LinkedList = require('./linkedLists');

class Queue {
	constructor(value) {
		this._storage = new LinkedList(value);
		this._length = 0;


	}

	enqueue(value) {
		this._storage.addElemToLast(value);
		this._length++;
	}
	dequeue() {
		this._length--;
		return this._storage.removeHead();
	}
	peek() {
		return this._storage.tail.value;
	}
	count() {
		return this._length;
	}
 
}

let myQueue = new Queue('one');
myQueue.enqueue('two');
console.log(myQueue._storage);
console.log(myQueue.peek())
myQueue.enqueue('three');
console.log(myQueue._storage);
console.log(myQueue.peek())
myQueue.dequeue();
console.log(myQueue._storage);
console.log(myQueue.peek())
