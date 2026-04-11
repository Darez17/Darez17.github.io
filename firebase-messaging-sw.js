// firebase-messaging-sw.js
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
  const { title, body } = payload.notification;
  const options = {
    body: body,
    icon: 'https://cdn-icons-png.flaticon.com/512/2913/2913974.png',
    badge: 'https://cdn-icons-png.flaticon.com/512/2913/2913974.png',
    vibrate: [200, 100, 200],
    requireInteraction: true,
    data: { url: payload.data?.clickUrl || '/' }
  };
  self.registration.showNotification(title, options);
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow(event.notification.data.url || '/')
  );
});
