import { UserApiRepository } from "@data/api/user-api-repository";
import { User } from "@domain/models/user";
import { UserRepository } from "@domain/repositories/user-repository";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useLogin() {
  // repository api
  const userRepo: UserRepository = new UserApiRepository();

  const navigate = useNavigate();

  //input password
  const [isPasswordShow, setIsPasswordShow] = useState(false);

  //input password
  const onPasswordShow = (): void => {
    setIsPasswordShow(!!!isPasswordShow);
  };
  // error flag
  const [error, setError] = useState<boolean>(false);

  const [form, setForm] = useState<User>(
    User.create({
      email: "",
      password: "",
    })
  );
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => {
      return User.create({
        ...prev.unmarshall(),
        [e.target.name]: e.target.value,
      });
    });
  };
  //button login
  const onSubmitLogin = async (e): Promise<void> => {
    e.preventDefault();
    try {
      const auth = await userRepo.login(form.email, form.password);
      await localStorage.setItem("token", auth.token);
      navigate("/admin");
    } catch (error) {
      setError(true);
    }
  };

  const isMe = async () => {
    try {
      await userRepo.check();
      navigate("/admin");
      localStorage.clear();
    } catch (error) {
      await localStorage.clear();
    }
  };

  useEffect(() => {
    // isMe();
  }, []);
  return {
    form,
    error,
    isPasswordShow,
    onPasswordShow,
    onSubmitLogin,
    onChange,
    setError,
  };
}
