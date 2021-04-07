export const loginPage = async (req:any, res:any, next:any) => {
  try {
    // kondisi jika pengguna sudah login
    if (req.session.passport) {
      return res.status(301).redirect('/');
    }

    await res.status(200).render('login', {
      message: undefined
    })
  }
  catch(err) {
    console.log(err);
  }
}

export const loginPost = async (req:any, res:any, next:any) => {
  try {
    // untuk proses login. semua scriptnya berada di folder middleware/passport.js
    await res.status(301).redirect('/'); // redirect ke halaman dashboard jika sudah berhasil login
  }
  catch(err) {
    console.log(err);
  }
}