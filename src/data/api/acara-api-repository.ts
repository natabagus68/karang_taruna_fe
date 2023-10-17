import { Acara } from "@domain/models/acara";
import { PaginatedData } from "@domain/models/paginated-data";
import {
  AcaraRepository,
  paramsUpdate,
} from "@domain/repositories/acara-repository";
import { TableParam } from "types";
import { api } from "./_api";
import { AcaraResponse, DetailAcaraResponse } from "./types/response-acara";

export class AcaraApiRepository implements AcaraRepository {
  async findAll(
    params: TableParam,
    status: string
  ): Promise<PaginatedData<Acara>> {
    const { data } = await api.get(`web/event`, {
      params: {
        page: params.page,
        limit: params.limit,
        status,
      },
    });

    return PaginatedData.create({
      page: params.page,
      limit: params.limit,
      lastPage: data.totalPage,
      totalRows: data.totalRows,
      data: data.data.map((item: AcaraResponse) => {
        return Acara.create({
          id: item.id,
          dateEvent: item.date,
          timeEvent: item.waktu_acara,
          name: item.nama_acara,
          location: item.location,
          maker: item.pembuat_acara,
          status: item.status,
        });
      }),
    });
  }
  async findOne(id: string): Promise<Acara> {
    const { data } = await api.get(`web/event/${id}`);
    const item: DetailAcaraResponse = data.data;
    return Acara.create({
      id: item.id,
      dateEvent: item.date,
      timeEvent: item.waktu_acara,
      name: item.nama_acara,
      location: item.lokasi_acara,
      maker: item.pembuat_acara,
      sponsor: item.sponsor_name,
      desc: item.deskripsi_acara,
      image: item.poster_acara,
      dateMaked: item.tanggal_dibuat,
      longTime: `${item.start_time} - ${item.end_time}`,
    });
  }
  async update(id: string, params: paramsUpdate): Promise<void> {
    // console.log(id);
    await api.put(`web/event/${id}`, {
      status: params.status,
      reason: params.reason,
    });
  }
  async destroy(id: string): Promise<void> {
    await api.delete(`web/event/${id}`);
  }
}
