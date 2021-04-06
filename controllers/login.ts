export const loginPost = (req:any, res:any, next:any) => {
  try {
    res.status(200).json(req.session)
  }
  catch(err) {
    console.log(err);
  }
}