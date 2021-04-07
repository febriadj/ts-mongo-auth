export const loginPage = async (req:any, res:any, next:any) => {
  try {
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
    await res.status(301).redirect('/');
  }
  catch(err) {
    console.log(err);
  }
}