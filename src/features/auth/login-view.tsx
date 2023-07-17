import EmailIcon from "@common/components/icons-new/EmailIcon";
import EyeHideIcon from "@common/components/icons-new/EyeHideIcon";
import EyeShowIcon from "@common/components/icons-new/EyeShowIcon";
import LockIcon from "@common/components/icons-new/LockIcon";
import EyesShowHide from "@common/components/icons/ShowHideIcon";
import useLogin from "./login-model";
import { EyeIcon } from "@common/components/icons";
import myLogo from "../../assets/my-logo.svg";
import maintenanceLogo from "../../assets/maintenance-logo.png";
import poweredByLogo from "../../assets/powered-by-logo.png";
import Background from "../../assets/bg-login.png";
import LogoKR from "../../assets/logo-karang-taruna.png";
import TextLogin from "../../assets/text-login.png";
import { AlertTriangle } from "lucide-react";
export default function LoginView() {
  const login = useLogin();
  return (
    <main className="w-screen h-[100dvh] flex">
      <div
        className="flex-1 bg-cover bg-center flex items-center justify-center relative"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div className="flex flex-col gap-10 justify-center items-center w-[80%]">
          <img src={LogoKR} alt="My Logo" width={150} />
          <img src={TextLogin} alt="logo text login" />
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <form
          className="w-[479px] h-[616px] bg-white rounded-xl border border-[#20519F] shadow-[#20519F] shadow-md px-[72px] py-[92px] flex flex-col justify-between"
          onSubmit={login.onSubmitLogin}
        >
          <div className="flex flex-col">
            <div className="flex gap-3 items-center mb-5">
              <img src={LogoKR} alt="My Logo" width={59} />
              <h1 className="font-bold text-2xl font-monst">
                Karang Taruna Digital
              </h1>
            </div>
            <span className="font-extrabold text-[34px] text-[#514E4E]">
              Selamat Datang.
            </span>
            <span className="text-[16px] text-[#514E4E]">
              Masuk dengan akun anda
            </span>
          </div>
          <div className="flex flex-col gap-[25px]">
            <div
              className={`w-full h-[52px] ${
                login.error
                  ? "bg-[#FEECEB] border border-red-500"
                  : "bg-[#EFF1F999]"
              }  px-[18px] flex items-center gap-[16px] rounded-lg`}
            >
              <EmailIcon />
              <input
                type="text"
                name="email"
                value={login.form.email}
                onChange={login.onChange}
                onClick={() => login.setError(false)}
                placeholder="Email Address"
                className=" bg-transparent w-full h-full outline-none"
              />
            </div>
            <div
              className={`w-full h-[52px] ${
                login.error
                  ? "bg-[#FEECEB] border border-red-500"
                  : "bg-[#EFF1F999]"
              }  px-[18px] flex items-center gap-[16px] rounded-lg`}
            >
              <LockIcon />
              <input
                type={`${login.isPasswordShow ? "text" : "password"}`}
                name="password"
                value={login.form.password}
                onChange={login.onChange}
                onClick={() => login.setError(false)}
                placeholder="Password"
                className=" bg-transparent w-full h-full outline-none"
              />
              {login.isPasswordShow ? (
                <EyeShowIcon
                  color="#6E7079"
                  className="w-[22px] h-[22px]"
                  onClick={() => login.onPasswordShow()}
                />
              ) : (
                <EyeHideIcon
                  color="#6E7079"
                  className="w-[22px] h-[22px]"
                  onClick={() => login.onPasswordShow()}
                />
              )}
            </div>
          </div>
          {login.error && (
            <span className="text-[#F04438] text-[14px] flex items-center gap-2">
              <AlertTriangle size={24} />
              Your password and Email is not correct
            </span>
          )}

          <button className="w-full h-[44px] py-3 px-5 bg-[#20519F] text-white text-base flex items-center justify-center text-[16px] font-bold ">
            Sign In
          </button>
        </form>
      </div>
    </main>
  );
}
