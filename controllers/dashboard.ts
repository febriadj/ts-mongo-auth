import Users from '../models/users'

export const dahsboardPage = async (req:any, res:any, next:any) => {
  try {
    // kondisi jika passport tidak ada didalam session
    if (!req.session.passport) {
      return res.status(200).render('index');
    }

    const _id = req.session.passport.user; // mengambil id di session

    // mengambil data pengguna
    await Users.findOne({ _id  }, (err:any, result:any) => {
      if (err) throw err;

      res.status(200).render('dashboard', {
        user: result // me-render data pengguna
      })
    })
  }
  catch(err) {
    console.log(err);
  }
}