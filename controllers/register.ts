import Users from '../models/users';

class RegisterRoute {
  registerPage = async (req: any, res: any, next: any) => {
    try {
      const result = await Users.find().sort({ createdAt: - 1 });

      if (!result) res.status(204).json({
        status: 'success',
        code: 204,
        message: 'berhasil mengirim request, tetapi data masih kosong'
      });

      res.status(200).json(result);
    }
    catch(err) {
      console.log(err);
    }
  }
}

const register = new RegisterRoute;
export default register;