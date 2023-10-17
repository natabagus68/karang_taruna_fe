import { UserApiRepository } from "@data/api/user-api-repository";
import { UserRepository } from "@domain/repositories/user-repository";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function useAdmin() {
  // user repository api
  const userRepo: UserRepository = new UserApiRepository();
  const navigate = useNavigate();
  //navbar status
  const [isOpenNavbar, setIsOpenNavbar] = useState(false);
  //sidebar status
  const [isOpenSidebar, setIsOpenSidebar] = useState(true);
  //avatar status
  const [isOpenAvatar, setIsOpenavatar] = useState(false);
  // loading state
  const [isLoading, setIsLoading] = useState(false);

  //navbar status click
  const onOpenNavbar = (): void => {
    setIsOpenNavbar(!!!isOpenNavbar);
  };

  //click burger in header
  const onOpenSideBar = (): void => {
    setIsOpenSidebar(!!!isOpenSidebar);
  };

  //click avatar dropdown in header
  const onOpenAvatar = (): void => {
    setIsOpenavatar(!!!isOpenAvatar);
  };

  //set navigate navbar
  const setNavigate = (url: string): void => {
    navigate(url);
  };

  //on logout
  const onLogout = async (): Promise<void> => {
    try {
      await localStorage.clear();
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  //checking me
  const onIsMe = async (): Promise<void> => {
    try {
      setIsLoading(true);
      await userRepo.check();
      setIsLoading(false);
    } catch (error) {
      await localStorage.clear();
      navigate("/login");
    }
  };

  useEffect(() => {
    // onIsMe();
  }, []);

  return {
    isOpenNavbar,
    isOpenSidebar,
    isOpenAvatar,
    isLoading,
    onOpenNavbar,
    onOpenSideBar,
    setNavigate,
    onOpenAvatar,
    onLogout,
  };
}
