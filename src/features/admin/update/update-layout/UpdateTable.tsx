

import { Tab, TabPanel, Tabs, TabsBody, TabsHeader } from '@material-tailwind/react'
import React, { useState } from 'react'
import AcaraUpdateTable from '../acara/AcaraUpdateTable'
import BeritaUpdateTable from '../berita/BeritaUpdateTable'

export default function UpdateTable() {
  const [activeTab, setActiveTab] = useState(1)

  return (
    <div className=" flex items-end w-full justify-between bg-white border-b-2">
      <Tabs className="w-full" value={activeTab}>
        <div className='w-full py-3 border-b border-[#D0D3D9]'>
          <TabsHeader
            className="rounded-none bg-transparent px-12 py-3 w-fit gap-4"
            indicatorProps={{
              className: "bg-transparent border-b-2 border-[#20519F] shadow-none rounded-none",
            }}
          >

            <Tab key={1} value={1} onClick={() => setActiveTab(1)} className={`${activeTab === 1 ? 'text-[#20519F] font-semibold' : ''}`} >Acara</Tab>
            <Tab key={2} value={2} onClick={() => setActiveTab(2)} className={`${activeTab === 2 ? 'text-[#20519F] font-semibold' : ''}`} >Berita</Tab>

          </TabsHeader>

        </div>
        <TabsBody>

          <TabPanel value={1} className='p-0'>
            <AcaraUpdateTable/>
          </TabPanel>
          <TabPanel value={2} className='p-0'>
            <BeritaUpdateTable/>
          </TabPanel>

        </TabsBody>
      </Tabs>
    </div>
  )
}
