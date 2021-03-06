// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/5.5.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.5.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
  'messagingSenderId': 'AAAAuf-XyPo:APA91bH63TYrTXKVF1lJH-ICB7C53IZJJrNvXiqgohLlEgoVBSlX-OISdxpLmb9gj7kC2allc9YTOkmeXHIRa5JYAIbJv_G4z540sUwQU7Qw6OHQ2JAharbMmPS1b9z1yMDPbVnjZkzu'
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();