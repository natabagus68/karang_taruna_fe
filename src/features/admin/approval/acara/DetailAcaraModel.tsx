import { config } from "@common/utils";
import { AcaraApiRepository } from "@data/api/acara-api-repository";
import { Acara } from "@domain/models/acara";
import { AcaraRepository } from "@domain/repositories/acara-repository";
import React, { SyntheticEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function useDetailAcaraModel() {
  const { id } = useParams();
  const navigate = useNavigate();
  const acaraRepo: AcaraRepository = new AcaraApiRepository();
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<Acara>(
    Acara.create({
      id: "",
      dateEvent: "",
      timeEvent: "",
      name: "",
      location: "",
      maker: "",
      sponsor: "",
      desc: "",
      image: "",
      dateMaked: "",
      longTime: "",
    })
  );
  const [confirm, setConfirm] = useState(false);
  const [disable, setDesable] = useState(false);
  const [decline, setDecline] = useState(false);
  const [decision, setDecision] = useState({
    id: "",
    reason: "",
    status: "",
  });

  // declined
  const openModalDecline = (id: string) => {
    setDecline(true);
    setDecision((prev) => {
      return {
        ...prev,
        id,
        status: "rejected",
      };
    });
  };
  const handleDeclienChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDecision((prev) => {
      return {
        ...prev,
        reason: e.target.value,
      };
    });
  };

  const closeModaleDecline = () => {
    setDecline(false);
    setDecision({ id: "", reason: "", status: "" });
  };

  const submitDecline = async (e: SyntheticEvent) => {
    e.preventDefault();
    setDesable(true);
    await acaraRepo.update(decision.id, decision);
    setDecline(false);
    setDecision({ id: "", reason: "", status: "" });
    navigate(`${config.pathPrefix}admin/approval/declined`);
    setDesable(false);
  };
  // ====akhir Decline====

  // aprove

  const openConfirm = () => {
    setConfirm(true);
    setDecision((prev) => {
      return {
        ...prev,
        status: "approved",
      };
    });
  };

  const closeConfirm = () => {
    setConfirm(false);
    setDecision((prev) => {
      return {
        ...prev,
        status: "",
      };
    });
  };

  const submitApprove = async (e: SyntheticEvent) => {
    e.preventDefault();
    setDesable(true);
    await acaraRepo.update(id, decision);
    setDecision((prev) => {
      return {
        ...prev,
        status: "",
      };
    });
    setDesable(false);
    navigate(-1);
  };

  // ====akhir approve====
  const handleBack = () => {
    navigate(-1);
  };

  const aproval = async () => {
    await acaraRepo.update(id, { status: "approved", reason: "" });
    navigate(-1);
  };

  const fetchData = async () => {
    setLoading(true);
    const result = await acaraRepo.findOne(id);
    setData(result);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return {
    data,
    loading,
    decline,
    decision,
    disable,
    confirm,
    openModalDecline,
    handleDeclienChange,
    closeModaleDecline,
    submitDecline,
    handleBack,
    aproval,
    setDecline,
    openConfirm,
    closeConfirm,
    submitApprove,
  };
}
