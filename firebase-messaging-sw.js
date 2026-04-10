importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDkEWKilk8kjdC7RcK1MJ2ktjhleyu8Ngw",
  authDomain: "lapor-pemadam-630b0.firebaseapp.com",
  databaseURL: "https://lapor-pemadam-630b0-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "lapor-pemadam-630b0",
  storageBucket: "lapor-pemadam-630b0.firebasestorage.app",
  messagingSenderId: "884110818669",
  appId: "1:884110818669:web:8561c7eb950f0603a2ae64"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Notifikasi latar belakang:', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icon.png',
    badge: '/badge.png',
    vibrate: [200,100,200]
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
