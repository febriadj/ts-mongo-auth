import Users from '../models/users';
import bcrypt from 'bcryptjs';

export const registerPage = async (req:any, res:any, next:any) => {
  try {
    // kondisi jika pengguna sudah login
    if (req.session.passport) {
      return res.status(301).redirect('/');
    }

    res.status(200).render('register', {
      message: undefined
    })
  }
  catch (err) {
    console.log(err);
  }
}

export const registerPost = async (req:any, res:any, next:any) => {
  try {
    const { username, email, password, confirmPassword } = req.body;
    
    // kondisi jika pengguna sudah login
    if (req.session.passport) {
      return res.status(301).redirect('/');
    }

    // menambahkan script regex
    const 
      usernameRegex = /[A-Z0-9_-]{8,24}/i
    , emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    , passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]){8,24}/

    // kondisi jika username bernilai false
    // username hanya boleh diisi dengan huruf kecil, besar, angka, underscore, dan tanda penghubung
    if (usernameRegex.test(username) == false) {
      return res.status(400).render('register', {
        message: 'Username Hanya Boleh Menggunakan Huruf Angka Underscore dan Tanda Penghubung'
      })
    }

    // kondisi jika alamat email tidak valid
    if (emailRegex.test(email) == false) {
      return res.status(400).render('register', {
        message: 'Email Tidak Valid'
      })
    }

    // kondisi jika password bernilai false
    // password harus diisi dengan gabungan huruf kecil, besar, angka, dan simbol
    if (passwordRegex.test(password) == false) {
      return res.status(400).render('register', {
        message: 'Panjang Password Harus Lebih Dari 8 dan Kurang Dari 24, Harus Berupa Huruf Kecil, Huruf Besar, Angka, Dan Simbol'
      })
    }

    // kondisi jika inputan password dan konfirmasi password tidak sesuai
    if (password !== confirmPassword) {
      return res.status(400).render({
        message: 'Password Tidak Sessuai'
      })
    }

    const hashPass = await bcrypt.hashSync(password, 10); // meng-enkripsi password pengguna
    const newUsers = new Users({ username, email, password: hashPass });

    await newUsers.save((err, result) => {
      if (err) throw err;

      res.status(301).redirect('/login'); // redirect ke halaman login jika sudah berhasil membuat akun
    })
  }
  catch(err) {
    console.log(err);
  }
}