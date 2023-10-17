import { Dialog } from "@material-tailwind/react";
import { XCircle } from "lucide-react";

export const ModalDecline = ({
  open,
  onOpen,
  form,
  disabled,
  onCancel,
  onSubmit,
  onChange,
}) => {
  return (
    <>
      <Dialog open={open} handler={onOpen} size={"sm"}>
        <div className="bg-white p-6 flex flex-col gap-6">
          {/* head */}
          <div className="w-full pt-6">
            <div className="w-full  flex justify-center items-center">
              <XCircle size={128} color="#F04438" />
            </div>
          </div>
          {/* body  */}
          <div className="w-full text-center mt-4">
            <h1 className="text-[24px] font-[600] text-[#313030]">Decline</h1>
            <p className="text-[16px] font-[600] text-[#313030]">
              Apakah anda yakin ingin menolak acara ni?
            </p>
          </div>
          {/* input */}
          <div className="w-full flex flex-col gap-4">
            <label className="text-[16px] font-[400] text-[#404446]">
              Berikan alasan mengapa acara ini ditolak
            </label>
            <textarea
              name=""
              id=""
              onChange={onChange}
              cols={20}
              rows={10}
              className="border border-[#979C9E] rounded-md outline-none p-4 "
            >
              {form}
            </textarea>
          </div>

          {/* buttons*/}
          <div className="mt-4 w-full flex justify-center items-center gap-3">
            <button
              onClick={onCancel}
              className="border border-[#6F6C6C] w-[202px] py-3 px-5 flex justify-center items-center rounded-[4px] text-[#6F6C6C]"
            >
              Batal
            </button>
            <button
              disabled={disabled}
              onClick={onSubmit}
              className={`${
                disabled
                  ? "bg-[#B8B6B6] text-[#9A9898]"
                  : "bg-[#F04438] text-white"
              }  w-[202px] py-3 px-5 flex justify-center items-center rounded-[4px] text-[14px] font-[600]`}
            >
              Ya, Tolak
            </button>
          </div>
        </div>
      </Dialog>
    </>
  );
};
