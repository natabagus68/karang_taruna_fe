import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import { Error404 } from "../common/components";
import LoginView from "@features/auth/login-view";
import AdminLayout from "@features/admin/admin-layout/admin-layout";
import TraceabilityView from "@features/admin/traceability/traceability-view";
import TraceabilityDetail from "@features/admin/traceability/traceability-detail";
import { KarangTaruna } from "@features/admin/master-data/karang-taruna/front-page/karang-taruna-view";
import Dashboard from "@features/admin/dashboard/dashboard";
import LeaderBoard from "@features/admin/leaderboard/leaderboard";
import { KarangTarunaForm } from "@features/admin/master-data/karang-taruna/form/karang-taruna-form-view";
import { DaftarLokasi } from "@features/admin/master-data/daftar-lokasi/front-page/daftar-lokasi-view";
import { KeanggotaanMasterData } from "@features/admin/master-data/keanggotaan/keanggotaan-view";
import { UserAdmin } from "@features/admin/User/admin/front-page/user-admin-view";
import { UserAdminForm } from "@features/admin/User/admin/form/user-admin-form-view";
import ApprovalLayout from "@features/admin/approval/approval-layout/ApprovalLayout";
import ApprovalTable from "@features/admin/approval/approval-layout/ApprovalTable";
import DetailAcara from "@features/admin/approval/acara/DetailAcara";
import DetailBerita from "@features/admin/approval/berita/DetailBerita";
import DeclinedTable from "@features/admin/approval/declined/DeclinedTable";
import Updatelayout from "@features/admin/update/update-layout/Updatelayout";
import UpdateTable from "@features/admin/update/update-layout/UpdateTable";

const Root = () => {
  return <Outlet />;
};

export default createBrowserRouter([
  // {
  //   path: "",
  //   element: <Navigate to="../admin" />,
  // },
  {
    path: "login",
    element: <LoginView />,
  },
  {
    path: "admin",
    element: <AdminLayout />,
    children: [
      {
        path: "traceability",
        element: <Root />,
        children: [
          {
            path: "",
            element: <TraceabilityView />,
          },
          {
            path: "detail",
            element: <TraceabilityDetail />,
          },
        ],
      },
      {
        path: "approval",
        element: <ApprovalLayout />,
        children: [
          {
            path: "",
            element: <ApprovalTable />,
          },
          {
            path: "declined",
            element: <Root />,
            children: [
              {
                path: "",
                element: <DeclinedTable />,
              },
            ],
          },
          {
            path: ":id/detail-acara",
            element: <DetailAcara />,
          },
          {
            path: ":id/detail-berita",
            element: <DetailBerita />,
          },
        ],
      },
      {
        path: "updates",
        element: <Updatelayout />,
        children: [
          {
            path: "",
            element: <UpdateTable />,
          },
          {
            path: ":idAcara/detail",
            element: <UpdateTable />,
          },
          {
            path: ":idBerita/berita",
            element: <UpdateTable />,
          },
        ],
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "leaderboard",
        element: <LeaderBoard />,
      },
      {
        path: "master-data",
        element: <Root />,
        children: [
          {
            path: "karang-taruna",
            element: <Root />,
            children: [
              {
                path: "",
                element: <KarangTaruna />,
              },
              {
                path: "form",
                element: <KarangTarunaForm />,
              },
              {
                path: "form/:id",
                element: <KarangTarunaForm />,
              },
            ],
          },
          {
            path: "daftar-lokasi",
            element: <DaftarLokasi />,
          },
          {
            path: "keanggotaan",
            element: <KeanggotaanMasterData />,
          },
        ],
      },
      {
        path: "user",
        element: <Root />,
        children: [
          {
            path: "admin",
            element: <Root />,
            children: [
              {
                path: "",
                element: <UserAdmin />,
              },
              {
                path: "form",
                element: <UserAdminForm />,
              },
              {
                path: ":id/form",
                element: <UserAdminForm />,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);
