import CheckIcon from "@common/components/icons-new/CheckIcon";
import InfoIcon from "@common/components/icons-new/InfoIcon";
import PlusIcon from "@common/components/icons-new/PlusIcon";
import { Button, Typography } from "@material-tailwind/react";
import React from "react";
import useDetailAcaraModel from "./DetailAcaraModel";
import { ModalDecline } from "@common/components/modals/ModalDecline";
import ModalConfirm from "@common/components/modals/ModalConfirm";

export default function DetailAcara() {
  const detail = useDetailAcaraModel();
  return (
    <>
      <ModalDecline
        form={detail.decision.reason}
        onChange={detail.handleDeclienChange}
        open={detail.decline}
        onCancel={detail.closeModaleDecline}
        onOpen={() => detail.setDecline(false)}
        onSubmit={detail.submitDecline}
        disabled={detail.disable}
      />
      <ModalConfirm
        open={detail.confirm}
        cb={detail.submitApprove}
        setOpen={detail.closeConfirm}
        title="Confirm Approved"
        text="Apakah anda yakin ingin mengonfirmasi acara ini?"
      />
      <div className="grid grid-cols-2 px-12 py-5">
        <div>
          <table className="w-full">
            <tr className="bg-[#F2F4F5]">
              <td className="py-2 px-4 whitespace-nowrap">Tanggal Dibuat</td>
              <td className="py-2 px-4 font-bold text-[#303437]">
                {detail.data.dateEvent}
              </td>
            </tr>
            <tr className="bg-white">
              <td className="py-2 px-4 whitespace-nowrap">Waktu Pembuat</td>
              <td className="py-2 px-4 font-bold text-[#303437]">
                {detail.data.timeEvent}
              </td>
            </tr>
            <tr className="bg-[#F2F4F5]">
              <td className="py-2 px-4 whitespace-nowrap">Pembuat Acara</td>
              <td className="py-2 px-4 font-bold text-[#303437]">
                {detail.data.maker}
              </td>
            </tr>
            <tr className="bg-white">
              <td className="py-2 px-4 whitespace-nowrap">Nama Acara</td>
              <td className="py-2 px-4 font-bold text-[#303437]">
                {detail.data.name}
              </td>
            </tr>
            <tr className="bg-[#F2F4F5]">
              <td className="py-2 px-4 whitespace-nowrap">
                Sponsor/Donatur Acara
              </td>
              <td className="py-2 px-4 font-bold text-[#303437]">
                {detail.data.sponsor}
              </td>
            </tr>
            <tr className="bg-white">
              <td className="py-2 px-4 whitespace-nowrap">Tanggal Acara</td>
              <td className="py-2 px-4 font-bold text-[#303437]">
                {detail.data.dateEvent}
              </td>
            </tr>
            <tr className="bg-[#F2F4F5]">
              <td className="py-2 px-4 whitespace-nowrap">Lokasi Acara</td>
              <td className="py-2 px-4 font-bold text-[#303437]">
                {detail.data.location}
              </td>
            </tr>
            <tr className="bg-white">
              <td className="py-2 px-4 whitespace-nowrap">Waktu Acara</td>
              <td className="py-2 px-4 font-bold text-[#303437]">
                {detail.data.longTime}
              </td>
            </tr>
            <tr className="bg-[#F2F4F5]">
              <td className="py-2 px-4 whitespace-nowrap">Deskripsi Acara</td>
              <td className="py-2 px-4 text-[#303437]">{detail.data.desc}</td>
            </tr>
          </table>

          <div className="flex flex-row gap-3 pt-6">
            <Button
              onClick={detail.openConfirm}
              className="bg-[#12B569] font-bold shadow-none flex items-center gap-2 hover:shadow-[#12B569]/20"
            >
              <CheckIcon />
              Approve
            </Button>
            <Button
              onClick={() => detail.openModalDecline(detail.data.id)}
              className="bg-[#F79009] font-bold shadow-none flex items-center gap-2  hover:shadow-[#F79009]/20"
            >
              <PlusIcon className="rotate-45" />
              Decline
            </Button>
            <Button
              onClick={detail.handleBack}
              className="border border-[#20519F] text-[#20519F] bg-transparent font-bold shadow-none flex items-center gap-2  hover:shadow-[#20519F]/20"
            >
              Batal
            </Button>
          </div>
        </div>
        <div className="px-10 py-3">
          <Typography variant="h5" className="text-[#514E4E] font-normal pb-5">
            Poster Acara
          </Typography>
          <img src={detail.data.image} alt="" />
        </div>
      </div>
    </>
  );
}
