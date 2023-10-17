import { Berita } from "@domain/models/berita";
import { PaginatedData } from "@domain/models/paginated-data";
import {
  BeritaRepository,
  UpadateBerita,
} from "@domain/repositories/berita-repository";
import { TableParam } from "types";
import { api } from "./_api";
import { BeritaResponse } from "./types/response-berita";

export class BeritaApiRepository implements BeritaRepository {
  async findAll(
    params: TableParam,
    status: "" | "approved" | "rejected" | "waiting"
  ): Promise<PaginatedData<Berita>> {
    const { data } = await api.get(`web/news/`, {
      params: {
        page: params.page,
        limit: params.limit,
        status,
      },
    });

    return PaginatedData.create<Berita>({
      page: params.page,
      limit: params.limit,
      lastPage: data.totalPage,
      totalRows: data.totalRows,
      data: data.data.map((item: BeritaResponse) => {
        return Berita.create({
          id: item?.id ?? "",
          date: item?.date ?? "",
          time: item?.time ?? "",
          redaktur: item?.redaktur ?? "",
          headline: item?.headLine_berita ?? "",
          news: item?.isi_berita ?? "",
          images: item?.news_images?.map((el) => el) ?? [],
        });
      }),
    });
  }
  async findOne(id: string): Promise<Berita> {
    const { data } = await api.get(`web/news/${id}`);
    return Berita.create({
      id: data?.data?.id ?? "",
      date: data?.data?.date ?? "",
      time: data?.data?.time ?? "",
      redaktur: data?.data?.redaktur ?? "",
      headline: data?.data?.headLine_berita ?? "",
      news: data?.data?.isi_berita ?? "",
      images: data?.data?.news_images?.map((el) => el) ?? [],
    });
  }
  async update(params: UpadateBerita): Promise<void> {
    await api.put(`web/news/${params.id}`, {
      reason: params.reason,
      status: params.status,
    });
  }
}
