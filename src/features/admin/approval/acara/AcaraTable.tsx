import { ArrowIcon } from "@common/components/icons";
import CheckIcon from "@common/components/icons-new/CheckIcon";
import InfoIcon from "@common/components/icons-new/InfoIcon";
import PlusIcon from "@common/components/icons-new/PlusIcon";
import { Button, IconButton, Spinner } from "@material-tailwind/react";
import React from "react";
import useAcaraTableModel from "./AcaraTableModel";
import ModalConfirm from "@common/components/modals/ModalConfirm";
import { ModalDecline } from "@common/components/modals/ModalDecline";

export default function AcaraTable() {
  const table = useAcaraTableModel();
  return (
    <>
      <ModalDecline
        disabled={table.disabel}
        form={table.decision.reason}
        onCancel={table.onCancelDecision}
        onChange={table.onChangeDecision}
        onOpen={() => table.setDecline(false)}
        onSubmit={table.onSubmitDecision}
        open={table.decline}
      />
      <ModalConfirm
        open={table.aprove}
        setOpen={table.onCancelApproved}
        cb={table.onConfirmApproved}
        setOpenSuccess={""}
        title="Confirm Approved"
        text="Apakah anda yakin ingin mengonfirmasi acara ini?"
      />
      <div className="overflow-x-auto">
        <table className="w-full ">
          <thead className="border border-y-[#D0D3D9] bg-[#FAFAFB]">
            <th className="py-5 pl-12 text-start text-[40446] font-semibold">
              Tanggal Acara
            </th>
            <th className="py-5 pl-12 text-start text-[40446] font-semibold">
              Waktu Acara
            </th>
            <th className="py-5 pl-12 text-start text-[40446] font-semibold">
              Nama Acara
            </th>
            <th className="py-5 pl-12 text-start text-[40446] font-semibold">
              Lokasi Acara
            </th>
            <th className="py-5 pl-12 text-start text-[40446] font-semibold">
              Pembuat Acara
            </th>
            <th className="py-5 pl-12 text-start text-[40446] font-semibold">
              Action
            </th>
          </thead>
          <tbody>
            {!table.loading &&
              table.data.data.map((item) => {
                return (
                  <tr className="border border-y-[#D0D3D9]">
                    <td className="py-5 pl-12">{item.dateEvent}</td>
                    <td className="py-5 pl-12">{item.timeEvent}</td>
                    <td className="py-5 pl-12">{item.name}</td>
                    <td className="py-5 pl-12">{item.location}</td>
                    <td className="py-5 pl-12">{item.maker}</td>
                    <td className="py-5 pl-12 flex gap-2">
                      <Button
                        onClick={() => table.handleDetail(item.id)}
                        className="bg-[#20519F] font-bold shadow-none flex items-center gap-2 hover:shadow-[#20519F]/20"
                      >
                        <InfoIcon />
                        Detail
                      </Button>
                      <Button
                        onClick={(e) => table.openAprove(e, item.id)}
                        className="bg-[#12B569] font-bold shadow-none flex items-center gap-2 hover:shadow-[#12B569]/20"
                      >
                        <CheckIcon />
                        Approve
                      </Button>
                      <Button
                        onClick={() => table.openDecline(item.id)}
                        className="bg-[#F79009] font-bold shadow-none flex items-center gap-2  hover:shadow-[#F79009]/20"
                      >
                        <PlusIcon className="rotate-45" />
                        Decline
                      </Button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        {table.loading && (
          <>
            <div className="w-full flex justify-center items-center mt-6">
              <Spinner className="w-4 h-4" />
            </div>
          </>
        )}
      </div>
      <div className="flex flex-row justify-between items-center px-12 py-6 border-b border-[#D0D3D9]">
        <span className="font-bold">
          {table.data.page} - {table.data.lastPage} of {table.data.totalRows}{" "}
          Approval Acara
        </span>
        <div className="flex justify-between gap-5">
          <Button
            onClick={() =>
              table.handlePagination(
                table.data.page > 1 ? table.data.page - 1 : table.data.page
              )
            }
            className={`flex items-center gap-3 bg-transparent shadow-none focus:outline-none border border-[#B8B6B6] text-[#B8B6B6] hover:shadow-none`}
          >
            <ArrowIcon className="-rotate-90" fill={`#B8B6B6`} />
            Prev
          </Button>
          <IconButton
            itemProp="1"
            className="bg-[#2980DE] shadow-none hover:shadow-none"
          >
            {table.data.page}
          </IconButton>
          <Button
            onClick={() =>
              table.handlePagination(
                table.data.page < table.data.lastPage
                  ? table.data.page + 1
                  : table.data.page
              )
            }
            className={`flex items-center gap-3 bg-transparent shadow-none focus:outline-none border border-[#2980DE] text-[#2980DE] hover:shadow-none`}
          >
            Next
            <ArrowIcon className="rotate-90" fill={`#2980DE`} />
          </Button>
        </div>
      </div>
    </>
  );
}
