import React, { SyntheticEvent, useEffect, useState } from "react";
import { AcaraApiRepository } from "@data/api/acara-api-repository";
import { AcaraRepository } from "@domain/repositories/acara-repository";
import { useNavigate } from "react-router-dom";
import { PaginatedData } from "@domain/models/paginated-data";
import { Acara } from "@domain/models/acara";

export default function useAcaraTableModel() {
  const acaraRepo: AcaraRepository = new AcaraApiRepository();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<PaginatedData<Acara>>(
    PaginatedData.create<Acara>({
      page: 1,
      limit: 5,
      lastPage: 0,
      totalRows: 0,
      data: [],
    })
  );
  const [aprove, setAprove] = useState(false);
  const [disabel, setDeisable] = useState(false);
  const [decline, setDecline] = useState(false);
  const [decision, setDecision] = useState({
    id: "",
    status: "rejected",
    reason: "",
  });
  const navigate = useNavigate();
  const handleDetail = (id) => {
    navigate(`${id}/detail-acara`);
  };

  const handlePagination = (page: number) => {
    setData((prev) => {
      return PaginatedData.create({ ...prev.unmarshall(), page });
    });
  };

  const openDecline = (id: string) => {
    setDecision((prev) => {
      return { ...prev, id };
    });
    setDecline(true);
  };

  const onChangeDecision = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDecision((prev) => {
      return {
        ...prev,
        reason: e.target.value,
      };
    });
  };
  const onSubmitDecision = async (e: SyntheticEvent) => {
    e.preventDefault();
    setDeisable(true);
    await acaraRepo.update(decision.id, decision);
    setDecline(false);
    setDecision({
      id: "",
      status: "rejected",
      reason: "",
    });
    setDeisable(false);
    navigate("declined");
  };

  const onCancelDecision = () => {
    setDecline(false);
    setDecision({
      id: "",
      status: "rejected",
      reason: "",
    });
  };

  // aprove
  const openAprove = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
    e.preventDefault();
    setDecision((prev) => {
      return {
        ...prev,
        id,
        status: "approved",
      };
    });
    setAprove(true);
  };

  const onConfirmApproved = async (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(decision);
    await acaraRepo.update(decision.id, decision);
    setData((prev) => {
      return PaginatedData.create<Acara>({
        ...prev.unmarshall(),
        data: prev.data.filter((item) => item.id !== decision.id),
      });
    });
    setAprove(false);
    setDecision({
      id: "",
      status: "rejected",
      reason: "",
    });
  };

  const onCancelApproved = (e: SyntheticEvent) => {
    e.preventDefault();
    setAprove(false);
    setDecision({
      id: "",
      status: "rejected",
      reason: "",
    });
  };
  const fetchData = async () => {
    setLoading(true);
    const result = await acaraRepo.findAll(
      {
        page: data.page,
        limit: data.limit,
      },
      "waiting"
    );
    setData(result);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [data.page, data.limit]);

  return {
    data,
    loading,
    decline,
    disabel,
    decision,
    aprove,
    openAprove,
    onConfirmApproved,
    onCancelApproved,
    setDecline,
    handleDetail,
    handlePagination,
    openDecline,
    onChangeDecision,
    onSubmitDecision,
    onCancelDecision,
  };
}
