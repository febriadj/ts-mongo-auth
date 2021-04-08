export const logout = async (req:any, res:any, next:any) => {
  try {
    const { passport } = req.session;

    // kondisi jika pegguna belum login
    if (!passport) {
      return res.status(301).redirect('/');
    }

    // menghapus session
    req.session.destroy((err:any) => {
      if (err) throw err;

      res.status(301).redirect('/'); // redirect ke halaman awal
    })
  }
  catch(err) {
    console.log(err);
  }
}