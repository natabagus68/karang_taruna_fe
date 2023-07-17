import { Outlet } from "react-router-dom";
import my_logo from "../../../assets/my-logo.svg";
import FullscreenIcon from "@common/components/icons-new/FullscreenIcon";
import BurgerIcon from "@common/components/icons-new/BurgerIcon";
import DashboardIcon from "@common/components/icons-new/DashboardIcon";
import ChevronIcon from "@common/components/icons-new/ChevronIcon";
import useAdmin from "./admin-layout-model";
import LogoutIcon from "@common/components/icons-new/LogoutIcon";
import { NavItem } from "@common/components";
import LoadingIcon from "@common/components/icons-new/LoadingIcon";
import SearchIcon from "@common/components/icons-new/SearchIcon";
import MasterDataIcon from "@common/components/icons-new/MasterDataIcon";
import LogoKR from "../../../assets/logo-karang-taruna.png";
import AprovalIcon from "@common/components/icons/AprovalIcon";
import DocumentsIcon from "@common/components/icons/DocumentsIcon";
import ArrowTrading from "@common/components/icons/ArrowTrading";
import { CubeIcon } from "@common/components/icons";
import UserIcon from "@common/components/icons/UserIcon";
export default function AdminLayout() {
  const admin = useAdmin();
  return admin.isLoading ? (
    <main className="w-screen h-screen flex bg-gray-200 items-center justify-center">
      <LoadingIcon className="animate-spin w-[80px] h-[80px]" />
    </main>
  ) : (
    <main className="relative">
      <header
        className={`${
          admin.isOpenSidebar ? "pl-[265px]" : "pl-[25px]"
        } fixed w-full h-[70px] bg-[#20519F] shadow-lg z-30 flex items-center justify-between pr-[25px] transition-all ease-in-out delay-100`}
      >
        <div className="flex gap-6 items-center">
          <BurgerIcon
            className="cursor-pointer"
            onClick={() => admin.onOpenSideBar()}
          />
        </div>
        <div className="relative">
          <div
            className="flex gap-2 items-center cursor-pointer"
            onClick={() => admin.onOpenAvatar()}
          >
            <div className="w-6 h-6 rounded-full bg-white"></div>
            <span className="text-white font-semibold">Admin</span>
            <ChevronIcon color="white" />
          </div>
          <div
            className={`${
              admin.isOpenAvatar ? "flex" : "hidden"
            } absolute top-[35px] bg-white rounded-md overflow-hidden right-0 flex-col gap-2 min-w-[190px] border border-gray-400`}
            onMouseLeave={() => admin.onOpenAvatar()}
          >
            <div
              className="flex items-center gap-3 cursor-pointer px-4 py-2 hover:bg-gray-100"
              onClick={() => admin.onLogout()}
            >
              <LogoutIcon />
              <span>Logout</span>
            </div>
          </div>
        </div>
      </header>
      <div
        className={`${
          admin.isOpenSidebar ? null : "-translate-x-[240px]"
        } fixed w-[240px] h-full bg-white shadow-lg z-30 flex flex-col gap-[20px] transition-all ease-in-out delay-100`}
      >
        <div className="w-full h-[70px] shadow-sm flex items-center justify-center">
          <div className="flex gap-3 items-center pl-4">
            <img src={LogoKR} alt="Logo Ragdalion" className="h-[50px]" />
            <h1 className="font-monst text-sm">KARANG TARUNADIGITAL</h1>
          </div>
        </div>
        <div className="flex flex-col px-4 gap-[12px]">
          <span className="font-semibold text-[#5C5C5C]">Menu</span>
          <div className="flex flex-col gap-2">
            <NavItem
              label={`Dashboard`}
              to={"dashboard"}
              icon={<DashboardIcon className="w-[24px] h-[24px]" />}
            />
            <NavItem
              label={`Aproval`}
              icon={<AprovalIcon className="w-[24px] h-[24px]" />}
              to={`approval`}
            />
            <NavItem
              label={`Updates`}
              icon={<DocumentsIcon className="w-[24px] h-[24px]" />}
              to={"updates"}
            />
            <NavItem
              label={`Leaderboard`}
              to={"leaderboard"}
              icon={<ArrowTrading className="w-[24px] h-[24px]" />}
            />

            <NavItem
              label={`Master Data`}
              icon={<CubeIcon className="w-[24px] h-[24px]" />}
            >
              <NavItem label="Karang Taruna" to={"master-data/karang-taruna"} />
              <NavItem label="Daftar Lokasi" to={"master-data/daftar-lokasi"} />
              <NavItem label="Keanggotaan" to={"master-data/keanggotaan"} />
            </NavItem>

            <NavItem
              label={`User`}
              icon={<UserIcon className="w-[24px] h-[24px]" />}
            >
              <NavItem label="Admin" to={"user/admin"} />
              <NavItem label="Pengguna" to={"master-data/mesin/mesin"} />
            </NavItem>
          </div>
        </div>
      </div>
      <div
        className={`${
          admin.isOpenSidebar ? "pl-[265px]" : "pl-[25px]"
        } flex-1 pt-[95px] p-[25px] transition-all ease-in-out delay-100`}
      >
        <Outlet />
      </div>
    </main>
  );
}
