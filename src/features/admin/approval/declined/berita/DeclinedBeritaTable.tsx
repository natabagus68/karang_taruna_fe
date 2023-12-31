import { ArrowIcon } from '@common/components/icons'
import InfoIcon from '@common/components/icons-new/InfoIcon'
import { Button, IconButton } from '@material-tailwind/react'
import React from 'react'

export default function DeclinedBeritaTable() {
  return (
    <>
      <div className='overflow-x-auto'>
        <table className='w-full '>
          <thead className='border border-y-[#D0D3D9] bg-[#FAFAFB]'>
            <th className='py-5 pl-12 text-start text-[40446] font-semibold'>Tanggal Dibuat</th>
            <th className='py-5 pl-12 text-start text-[40446] font-semibold'>Waktu Dibuat</th>
            <th className='py-5 pl-12 text-start text-[40446] font-semibold'>Headline Berita</th>
            <th className='py-5 pl-12 text-start text-[40446] font-semibold'>Redaktur</th>
            <th className='py-5 pl-12 text-start text-[40446] font-semibold'>Action</th>
          </thead>
          <tbody >
            <tr className='border border-y-[#D0D3D9]'>
              <td className='py-5 pl-12'>12/12/2022</td>
              <td className='py-5 pl-12'>12:38</td>
              <td className='py-5 pl-12'>Percepat Vaksinasi</td>
              <td className='py-5 pl-12'>Bramantra Putra</td>
              <td className='py-5 pl-12 flex gap-2'>
                <Button onClick={()=>{ }} className='bg-[#20519F] font-bold shadow-none flex items-center gap-2 hover:shadow-[#20519F]/20'>
                  <InfoIcon />
                  Detail</Button>
              </td>
            </tr>
           
          </tbody>
        </table>
      </div>
      <div className='flex flex-row justify-between items-center px-12 py-6 border-b border-[#D0D3D9]'>
        <span className='font-bold'>1 - 20 of 60 Approval Berita</span>
        <div className='flex justify-between gap-5'>
          <Button onClick={()=> {}} className={`flex items-center gap-3 bg-transparent shadow-none focus:outline-none border border-[#B8B6B6] text-[#B8B6B6] hover:shadow-none`}>
            <ArrowIcon className="-rotate-90" fill={`#B8B6B6`} />
            Prev
          </Button>
          <IconButton itemProp='1' className='bg-[#2980DE] shadow-none hover:shadow-none'>1</IconButton>
          <Button className={`flex items-center gap-3 bg-transparent shadow-none focus:outline-none border border-[#2980DE] text-[#2980DE] hover:shadow-none`}>
            Next
            <ArrowIcon className="rotate-90" fill={`#2980DE`} />
          </Button>
        </div>
      </div>
    </>
  )
}
