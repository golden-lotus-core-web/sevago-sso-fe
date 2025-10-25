importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: 'AIzaSyDXrZ73I7V8SPVt3zBgVj5avaMayzgCCoM',
  authDomain: 'fir-f1106.firebaseapp.com',
  projectId: 'fir-f1106',
  storageBucket: 'fir-f1106.firebasestorage.app',
  messagingSenderId: '813698704964',
  appId: '1:813698704964:web:b122c75c3e48824449fe11',
};

firebase.initializeApp(firebaseConfig);

// Push event khi nhận thông báo
self.addEventListener('push', function (event) {
  if (!event.data) return;

  const data = event.data.json().data;

  const title = data.title;
  const body = data.message;
  const icon = '/images/logo-192x192.png';

  event.waitUntil(
    (async () => {
      const allClients = await self.clients.matchAll({
        type: 'window',
        includeUncontrolled: true,
      });

      const yourDomainClients = allClients.filter((client) => {
        try {
          const url = new URL(client.url);
          return url.origin === 'http://localhost:6003';
        } catch {
          return false;
        }
      });

      // Kiểm tra xem có tab nào cùng domain đang focus không
      // Lưu ý: client.focused có thể không hỗ trợ ở một số trình duyệt, có thể cần workaround ở client
      const hasFocused = yourDomainClients.some((client) => client.focused);

      if (hasFocused) {
        // Nếu có tab focus, gửi message để React UI xử lý
        yourDomainClients.forEach((client) => client.postMessage(data));
        // Không show notification hệ thống
        return;
      } else {
        // Không có tab focus, show notification hệ thống
        await self.registration.showNotification(title, { body, icon, data });

        // Gửi message cho các tab cùng domain (nếu muốn)
        yourDomainClients.forEach((client) => client.postMessage(data));
      }
    })(),
  );
});

// Xử lý khi người dùng click vào thông báo
self.addEventListener('notificationclick', function (event) {
  event.notification.close();

  const { path } = event.notification.data || {};

  if (!path) return;

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      const existingClient = clientList.find((client) => client.url === path && 'focus' in client);
      if (existingClient) return existingClient.focus();
      if (clients.openWindow) return clients.openWindow(path);
    }),
  );
});

// Gửi thông báo về các tab đang mở
function notifyClients(payload) {
  self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clients) => {
    clients.forEach((client) => {
      client.postMessage({
        type: 'NOTIFICATION_RECEIVED',
        title: payload.data?.title || 'Thông báo',
        body: payload.data?.message || '',
        icon: payload.data?.icon || '/images/logo-192x192.png',
        data: payload.data || payload,
      });
    });
  });
}
