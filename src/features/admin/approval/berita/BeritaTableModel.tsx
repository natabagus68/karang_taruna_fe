import { BeritaApiRepository } from "@data/api/berita-api-repository";
import { Berita } from "@domain/models/berita";
import { PaginatedData } from "@domain/models/paginated-data";
import {
  BeritaRepository,
  UpadateBerita,
} from "@domain/repositories/berita-repository";
import React, { SyntheticEvent, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApprovalContex } from "../approval-layout/aproval-contex";

export default function useBeritaTableModel() {
  const { tab } = useContext(useApprovalContex);
  const navigate = useNavigate();
  const beritarRepo: BeritaRepository = new BeritaApiRepository();
  const [data, setData] = useState<PaginatedData<Berita>>(
    PaginatedData.create<Berita>({
      page: 1,
      limit: 5,
      lastPage: 0,
      totalRows: 0,
      data: [],
    })
  );
  const [disabel, setDisable] = useState(false);
  const [decline, setDecline] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [decision, setDecision] = useState<UpadateBerita>({
    id: "",
    reason: "",
    status: "",
  });

  const handleDetail = (id: string) => {
    navigate(`${id}/detail-berita`);
  };
  const handlePagination = (page: number) => {
    setData((prev) => {
      return PaginatedData.create<Berita>({
        ...prev.unmarshall(),
        page,
      });
    });
  };
  const fetchData = async () => {
    setLoading(true);
    const temp = await beritarRepo.findAll(
      { page: data.page, limit: data.limit },
      "waiting"
    );
    setData(temp);
    setLoading(false);
  };

  const handleOpenConfirm = (id: string) => {
    setOpenConfirm(true);
    setDecision((prev) => {
      return {
        ...prev,
        id,
        status: "approved",
      };
    });
  };
  const closeConfirm = () => {
    setOpenConfirm(false);
    setDecision({
      id: "",
      reason: "",
      status: "",
    });
  };
  const confirm = (e: SyntheticEvent) => {
    setDisable(true);
    beritarRepo.update(decision).then(() => {
      setOpenConfirm(false);
      setDecision({
        id: "",
        reason: "",
        status: "",
      });
      setDisable(false);
    });
  };

  const openDecline = (id: string) => {
    setDecline(true);
    setDecision((prev) => {
      return {
        ...prev,
        id,
        status: "rejected",
      };
    });
  };

  const onChangeDecline = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDecision((prev) => {
      return {
        ...prev,
        reason: e.target.value,
      };
    });
  };
  const onCancelDecline = () => {
    setDecline(false);
    setDecision({
      id: "",
      reason: "",
      status: "",
    });
  };

  const confirmDecline = (e: SyntheticEvent) => {
    e.preventDefault();
    beritarRepo.update(decision).then(() => {
      setDecline(false);
      setDecision({
        id: "",
        reason: "",
        status: "",
      });
      fetchData();
    });
  };
  useEffect(() => {
    fetchData();
  }, [data.page]);
  return {
    data,
    loading,
    openConfirm,
    disabel,
    decline,
    handleDetail,
    handlePagination,
    handleOpenConfirm,
    closeConfirm,
    confirm,
    setOpenConfirm,
    openDecline,
    onChangeDecline,
    onCancelDecline,
    confirmDecline,
    decision,
  };
}
