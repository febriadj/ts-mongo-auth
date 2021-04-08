# TypeScript MongoDb Autentikasi
![GitHub repo size](https://img.shields.io/github/repo-size/febriadj/tsc-mongo-auth?color=bcb8b1&label=repo%20size&logo=github&style=for-the-badge)
![GitHub top language](https://img.shields.io/github/languages/top/febriadj/tsc-mongo-auth?color=bcb8b1&style=for-the-badge)
<br>

Ini adalah proyek sistem autentikasi saya yang sudah kesekian kali, diproyek ini saya membuat <u>autentikasi</u> pengguna pada lokal strategi menggunakan <u>passport</u> dan <u>passport-local</u> pada aplikasi yang dibuat dengan TypeScript dan Nodejs.
<br>

# Contoh Tampilan Aplikasi

![login](public/images/login-page.png)
![register](public/images/register-page.png)
![register](public/images/register-page-failed.png)

# Penjelasan Singkat
Fokus dan tujuan utama dalam proyek ini adalah keamanan dan kestabilan dari sistem autentikasi aplikasi ini.
<br>

Package dan Teknologi yang saya gunakan :
- [TypeScript](https://www.npmjs.com/package/typescript)
- [Tslint](https://www.npmjs.com/package/tslint) (membuat file tslint.json)
- [Passport](https://www.npmjs.com/package/passport) (package utama untuk meng-handle login pengguna)
- [Passport Local](https://www.npmjs.com/package/passport-local)
- [Bcrypt](https://www.npmjs.com/package/bcryptjs) (mengenkripsi password pengguna)

# Menjalankan Aplikasi
<b>npm start</b> <u>'mengkonversi script ts ke js dan menjalankan aplikasi'<br></u>
<b>npm run start:dev</b> <u>'menjalankan aplikasi untuk tahap pengembangan'</u> <br>
<b>npm run build</b> <u>'mengkonversi script ts ke js'<u>