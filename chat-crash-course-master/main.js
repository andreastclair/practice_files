'use strict';
Parse.initialize("b1vJxODKeikf774DQsI1oYCBK4awXkcuK10WS9vY", "Epc1u39Gr5jqK7fE9dOHxWrBxDcfJkoIDihLKFVd");
var Message = Parse.Object.extend('Message');
var query = new Parse.Query(Message);

// function sayHello(name) {

// 	console.log(name);

// 	name = name + 'rocks';
// }

// sayHello('Van');

//----------

// function add(a, b) {

// 	console.log(a+b);
	
// }

// add(7, 3);

// var c = 23;

//----------

// function increment(a) {
	
// 	a = a + 1;
// 	console.log(a);
// }

// increment(0);
// console.log(c);

// function max(a, b) {
// 	// console.log(a > b);
// 	// console.log(a == 4);
// 	// console.log(true == 1);

// 	if(a > b) {
// 		console.log(a);
// 	}
// 	else {
// 		console.log(b);
// 	}
// }

// max(7, 5);

// function tick() {
// 	var currentDate = new Date();
	
// 	var messagesElement = document.getElementById('messages');
// 	messages.innerHTML = messages.innerHTML + '<div>' + currentDate; + '</div>';
// }

//----------

// function tick() {
// 	var textBox = document.getElementById('text-box');
// 	var messagesElement = document.getElementById('messages');

// 	messages.innerHTML = messages.innerHTML + '<div>' + textBox; + '</div>';

// 	console.log(textBox.value);
// }

// setInterval(tick, 1000);

//----------

var messagesElement = document.getElementById('messages');
var chatButton = document.getElementById('chat-button');
var textBox = document.getElementById('text-box');
var lastMessagePosted = new Date();

// console.log(messages);
// console.log(chatButton);
// console.log(textBox);

function addMessage() {
	var currentMessage = new Message();
	currentMessage.save({message: textBox.value, username: 'seemore'});
}

chatButton.addEventListener('click', addMessage);

function tick() {
	query.greaterThan('createdAt', lastMessagePosted).find().then(addNewMessages);
	// console.log('tick');
}

function addNewMessages(messages) {
	console.log(messages.length + 'messages');
	messages.forEach(addSingleMessageToPage);
}

function addSingleMessageToPage(message) {
	var currentMessage = message.get('message');
	if(typeof currentMessage === 'string') {
		messagesElement.innerHTML = messagesElement.innerHTML + '<div>' + currentMessage; + '</div>';
	}	
	if(message.get('createdAt') > lastMessagePosted) {
		lastMessagePosted = message.get('createdAt');
	}
}

setInterval(tick, 2000);

















