// TODO: Belum Kepikiran ( Paling nanti Buat Aplikasi Webview Android )
/*
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyAe8QU4KiYM4NKtMplc601ZOeEQLTsLop8",
  authDomain: "ifummi25.firebaseapp.com",
  projectId: "ifummi25",
  storageBucket: "ifummi25.firebasestorage.app",
  messagingSenderId: "526954641750",
  appId: "1:526954641750:web:e9964c9fd1d9692a70fef7",
  measurementId: "G-EG651DVH1D"
});

const messaging = firebase.messaging();

// Intercept push notification saat browser di background / mati
messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Menerima Background Notification Khusus ",
    payload
  );
  
  const notificationTitle = payload.notification ? payload.notification.title : "Notifikasi Baru BUMMITIC25";
  const notificationOptions = {
    body: payload.notification ? payload.notification.body : "Buka aplikasi untuk melihat rincian",
    icon: "/vite.svg", 
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
*/
