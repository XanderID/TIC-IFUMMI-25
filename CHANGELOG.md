# Catatan Perubahan — CIMOL Hub

Semua perubahan versi tercatat di sini. Format mengikuti [Keep a Changelog](https://keepachangelog.com/id/1.0.0/).

---

## [1.0.0] — 2026-05-05 — Rilis Pertama

### Ditambahkan
- **Sistem notifikasi berlapis tiga (Triple Redundancy)**: WorkManager (15 menit) + AlarmManager + PersistentForegroundService — notifikasi tetap berjalan meski aplikasi di-kill oleh sistem.
- **Sapaan otomatis berbasis waktu**: Pagi / Siang / Sore dengan ringkasan matkul hari ini.
- **Pengingat deadline bertahap**: Threshold 7 hari, 3 hari, 1 hari, dan <1 jam dengan format teks yang akurat hingga menit.
- **Notifikasi kelompok yang dipersonalisasi**: Hanya anggota kelompok yang bersangkutan yang mendapat notifikasi presentasi.
- **Weekly cache reset**: Seen notification IDs dibersihkan tiap Minggu secara otomatis; dead keys dan weekly keys dipertahankan.
- **Per-notification reset** dari Debug Panel admin.
- **Push Notification kustom dari admin**: Tipe `sekali`, `harian`, dan `terus_terusan` dengan dukungan `waktu_tampil` dan `waktu_mati`.
- **Target notifikasi spesifik**: Notif dapat ditargetkan ke nomor absen tertentu, bukan hanya ke semua user.
- **Update Notifier**: Deteksi versi lama otomatis via `/api/version.json`, tampilkan modal dengan changelog dari `/api/changelog/`.
- **Admin Dashboard**: ManagerTugas, ManagerJadwal, ManagerMading, ManagerNotifikasi, ManagerMahasiswa, ManagerStruktur, ManagerInfo, ManagerDebug — semua dengan panel collapsible.
- **Inline profile picker** di halaman Pengaturan — tidak perlu keluar halaman untuk ganti profil.
- **API versioning**: `/api/version.json` + `/api/changelog/{version}.md`.
- Modularisasi package Android: `fetcher/`, `model/`, `parser/`, `receivers/`, `services/`, `utils/`, `workers/`.
- `CimolLogger`: logging ke file `Android/media/{packageId}/logs.log` + Logcat.
- Global type `Window.Android` dipusatkan di `src/types/android.d.ts`.

### Diperbaiki
- `NotifikasiParser`: mismatch key `judul/pesan/tipe/aktif` vs `title/message/type/isActive` — semua notifikasi Android sebelumnya tidak pernah terkirim.
- `TugasParser`: mismatch key `kelompok` vs `kelompok_detail` — data kelompok Android selalu kosong.
- `waktu_mati` tersimpan di DB tapi tidak pernah dicek — sekarang diimplementasikan di web dan Android.
- `new Date("DD-MM-YYYY")` menghasilkan Invalid Date di kartu pengumuman beranda dan preview admin Mading.
- `PushNotification` target filtering tidak diimplementasikan di web — semua user web menerima notif yang seharusnya spesifik.
- Notifikasi persistent muncul kembali jika di-dismiss di Android 14+.
- Dead time (`waktu_mati`) dipertahankan saat weekly reset.
- `Save` icon di SettingsPage hilang dari import (runtime crash).
- `setIdentityState` deklarasi tanpa penggunaan di SettingsPage (warning TS).
- Unicode checkmark (`✓`) di badge status tugas — diganti `CheckCircle` dari Lucide.

---

> Untuk laporan bug atau saran fitur, buka [Issues](https://github.com/XanderID/CIMOLHub-IFUMMI-25/issues) atau hubungi @XanderID.
