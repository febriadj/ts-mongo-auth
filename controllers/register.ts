import Users from '../models/users';

export const registerPage = async (req:any, res:any, next:any) => {
  try {
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
    
    // regex script
    const 
      usernameRegex = /[A-Z0-9_-]{8,24}/i
    , emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    , passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]){8,24}/

    if (usernameRegex.test(username) == false) {
      return res.status(400).render('register', {
        message: 'Username Hanya Boleh Menggunakan Huruf Angka Underscore dan Tanda Penghubung'
      })
    }

    if (emailRegex.test(email) == false) {
      return res.status(400).render('register', {
        message: 'Email Tidak Valid'
      })
    }

    if (passwordRegex.test(password) == false) {
      return res.status(400).render('register', {
        message: 'Panjang Password Harus Lebih Dari 8 dan Kurang Dari 24, Harus Berupa Huruf Kecil, Huruf Besar, Angka, Dan Simbol'
      })
    }

    if (password !== confirmPassword) {
      return res.status(400).render({
        message: 'Password Tidak Sessuai'
      })
    }

    const newUsers = new Users({ username, email, password });
    await newUsers.save((err, result) => {
      if (err) throw err;

      res.status(200).json({
        status: 'success',
        code: 200,
        message: 'akun berhasil dibuat'
      })
    })
  }
  catch(err) {
    console.log(err);
  }
}