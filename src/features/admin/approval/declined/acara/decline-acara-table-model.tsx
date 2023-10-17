import { AcaraApiRepository } from "@data/api/acara-api-repository";
import { Acara } from "@domain/models/acara";
import { PaginatedData } from "@domain/models/paginated-data";
import { AcaraRepository } from "@domain/repositories/acara-repository";
import { useEffect, useState } from "react";

export const useDeclineAcaraTable = () => {
  const acaraRepo: AcaraRepository = new AcaraApiRepository();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<PaginatedData<Acara>>(
    PaginatedData.create<Acara>({
      page: 0,
      limit: 0,
      lastPage: 0,
      totalRows: 0,
      data: [],
    })
  );

  // fetch
  const fecthData = async () => {
    setLoading(true);
    const result = await acaraRepo.findAll(
      { page: data.page, limit: data.limit },
      "rejected"
    );
    setData(result);
    setLoading(false);
  };

  useEffect(() => {
    fecthData();
  }, [data.page, data.limit]);

  return {
    data,
  };
};
