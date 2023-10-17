import CheckIcon from "@common/components/icons-new/CheckIcon";
import PlusIcon from "@common/components/icons-new/PlusIcon";
import { Button, Typography } from "@material-tailwind/react";
import React from "react";
import useDetailBeritaModel from "./DetailBeritaModel";
import ModalConfirm from "@common/components/modals/ModalConfirm";

export default function DetailBerita() {
  const detail = useDetailBeritaModel();
  return (
    <>
      <ModalConfirm
        open={detail.openAprove}
        setOpen={detail.onCancelConfirm}
        cb={detail.confirmApprove}
        title="Confirm Approve"
        text="Apakah anda yakin ingin mengonfirmasi acara ini?"
      />
      <div className="grid grid-cols-2 px-12 py-5">
        <div>
          <table className="w-full">
            <tr className="bg-[#F2F4F5]">
              <td className="py-2 px-4 whitespace-nowrap">Tanggal Dibuat</td>
              <td className="py-2 px-4 font-bold text-[#303437]">
                {detail.data.date}
              </td>
            </tr>
            <tr className="bg-white">
              <td className="py-2 px-4 whitespace-nowrap">Waktu Pembuat</td>
              <td className="py-2 px-4 font-bold text-[#303437]">
                {detail.data.time}
              </td>
            </tr>
            <tr className="bg-[#F2F4F5]">
              <td className="py-2 px-4 whitespace-nowrap">Redaktur</td>
              <td className="py-2 px-4 font-bold text-[#303437]">
                {detail.data.redaktur}
              </td>
            </tr>
            <tr className="bg-white">
              <td className="py-2 px-4 whitespace-nowrap">Headline Berita</td>
              <td className="py-2 px-4 font-bold text-[#303437]">
                {detail.data.headline}
              </td>
            </tr>
            <tr className="bg-[#F2F4F5]">
              <td className="py-2 px-4 whitespace-nowrap">Isi Berita</td>
              <td className="py-2 px-4 text-[#303437]">{detail.data.news}</td>
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
            <Button className="bg-[#F79009] font-bold shadow-none flex items-center gap-2  hover:shadow-[#F79009]/20">
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
        <div className="px-10 py-3 flex flex-col gap-2">
          <Typography variant="h5" className="text-[#514E4E] font-normal pb-5">
            Foto Berita
          </Typography>
          {detail.data.images.map((item) => (
            <img src={item} alt="" />
          ))}
        </div>
      </div>
    </>
  );
}
