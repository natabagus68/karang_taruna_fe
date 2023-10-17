import { BeritaApiRepository } from "@data/api/berita-api-repository";
import { Berita } from "@domain/models/berita";
import {
  BeritaRepository,
  UpadateBerita,
} from "@domain/repositories/berita-repository";
import React, { SyntheticEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function useDetailBeritaModel() {
  const { id } = useParams();
  const navigate = useNavigate();
  const beritaRepo: BeritaRepository = new BeritaApiRepository();
  const [disabel, setDisable] = useState(false);
  const [decline, setDecline] = useState(false);
  const [openAprove, setopenAprove] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [decision, setDecision] = useState<UpadateBerita>({
    id: "",
    reason: "",
    status: "",
  });
  const [data, setData] = useState<Berita>(
    Berita.create({
      date: "",
      time: "",
      redaktur: "",
      headline: "",
      news: "",
      images: [],
    })
  );

  const fetchData = () => {
    beritaRepo
      .findOne(id)
      .then((result) => {
        setData(result);
      })
      .catch((error) => console.log(error));
  };
  const handleBack = () => {
    navigate(-1);
  };

  const openConfirm = () => {
    setopenAprove(true);
    setDecision((prev) => {
      return {
        ...prev,
        id,
        status: "approved",
      };
    });
  };
  const onCancelConfirm = () => {
    setopenAprove(false);
    setDecision({
      id: "",
      reason: "",
      status: "",
    });
  };
  const confirmApprove = async (e: SyntheticEvent) => {
    e.preventDefault();
    setDisable(true);
    await beritaRepo.update(decision);
    setopenAprove(false);
    setDisable(false);
    setDecision({
      id: "",
      reason: "",
      status: "",
    });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return {
    data,
    disabel,
    openAprove,
    decision,
    decline,
    handleBack,
    openConfirm,
    onCancelConfirm,
    confirmApprove,
  };
}
