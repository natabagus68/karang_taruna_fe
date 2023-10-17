import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export default function useApprovalLayoutModel() {
  let { id } = useParams();
  const path = useLocation();
  const navigate = useNavigate();

  const handleDecline = () => {
    navigate("declined");
  };

  const handleBack = () => {
    navigate(-1);
  };
  return {
    id,
    path,
    handleBack,
    handleDecline,
  };
}
