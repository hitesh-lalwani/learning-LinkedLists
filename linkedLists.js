class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
		this.prev = null;
	}
}

let hitesh = new Node('hitesh');

class LinkedList {
	constructor(value) {
		this.value = new Node(value);
		this.head = this.value;
		this.tail = this.value;

	}
	addElemToLast(value) {
		this.value = new Node(value);
		this.tail.next = this.value;
		this.value.prev = this.tail;
		this.tail = this.tail.next;


		return this.tail;

	}
	
	forEach(cb) {
		let curr = this.head;
		cb(curr);
		while(curr.next !== null) {
			
			cb(curr.next);
			curr = curr.next;
		}
	}

	print() {
		this._toPrint = "";
		this.forEach(ele => this._toPrint += ele.value.toString() + ' ')
		console.log(this._toPrint);
		delete this._toPrint;
	}

	search(value) {
		let curr = this.head;
		while(curr.next !== null) {
			if(curr.value == value) {
				return curr;
			}
			curr = curr.next;
		}
		return 'not found';
	}

	// ##### NEEDS MORE WORK ######
	// searchAndinsertAfter(val, value) {
	// 	this.value = new Node(value);
	// 	let curr = this.head
	// 	while(curr.next !== null) {
	// 		if(curr.value === val) {
	// 			var temp = curr.next;
	// 			curr.next = this.value;
	// 			curr.next.next = temp;
	// 		}
	// 		curr = curr.next;
	// 	}

	// }

	insertAfter(refNode, value) {

		this.value = new Node(value);
		// var temp = refNode.next;
		// refNode.next = this.value;
		// this.value.next = temp;
		var temp = refNode.next;
		refNode.next = this.value;
		this.value.prev = refNode;
		this.value.next = temp;
		temp.prev = this.value;


	}

	removeAfter(refNode) {
		var temp = refNode.next.next;
		refNode.next = temp;
		temp.prev = refNode;


	}
	insertHead(value) {
		this.value = new Node(value);
		let prevHead = this.head;
		this.head = this.value;
		this.head.next = prevHead;
	}

	removeHead() {
		let temp = this.head.value;
		this.head = this.head.next;
		this.head.prev = null;
		return temp;
	}
	removeTail() {
	var val = this.tail.value;
	this.tail = this.tail.prev;
	this.tail.next = null;
	return val;
	}
	insertBefore(refNode, value) {
		var temp = refNode.prev;
		this.value = new Node(value);
		this.value.prev = temp;
		this.value.next = refNode;
		refNode.prev = this.value;
		temp.next = this.value;
	}
	removeBefore(refNode) {
		var temp = refNode.prev.prev;
		refNode.prev = temp;
		temp.next = refNode;
	}


}



// let hit = new LinkedList('one');
//  let refNodee = hit.addElemToLast('two');
//   hit.print();
//  hit.addElemToLast('three');
//   hit.print();
//  hit.addElemToLast('four');
//   hit.print();
//  hit.addElemToLast('five');
 
//   hit.print();
//   hit.removeTail();
//     hit.print();
//     hit.removeTail();
//     hit.print();
//     hit.removeTail();
//     hit.print();
// console.log('========')
//   let h = new LinkedList('one');
//   // console.log(h);
//   let ref = h.addElemToLast('two');
//     // console.log(h);
//     h.print();
//  var refer =  h.addElemToLast('three');
//     // console.log(h);
//     h.print();
//   h.insertAfter(ref, 'six');
//   h.print();
//   h.insertBefore(ref, 'hahah');
//   h.print();
//   h.removeBefore(refer);
//   h.print();

    // console.log(h);





//  let arr = [];

// hit.forEach(ele => {
// arr.push(ele.value);
// })
// hit.searchAndinsertAfter('three', 'six');
// hit.insertAfter(refNodee, 'sab');
// hit.print();
// hit.removeAfter(refNodee);
// console.log('aha');
// hit.print();
// hit.insertHead('zero')
// console.log('aha');
// hit.print();
// hit.removeHead();
// console.log('aha');
// hit.print();
// hit.removeHead();
// console.log('aha');
// hit.print();
// hit.removeHead();
// console.log('aha');
// hit.print();
// hit.removeTail();
// console.log('aha');
// hit.print();
// console.log('aha');
// hit.print();



// console.log(hit.search('six'));

// console.log(hit);
// console.log(arr);

module.exports = LinkedList;