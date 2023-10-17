import { Berita } from "@domain/models/berita";
import { PaginatedData } from "@domain/models/paginated-data";
import { TableParam } from "types";
export interface UpadateBerita {
  id?: string;
  reason: string;
  status: string;
}
export interface BeritaRepository {
  findAll(
    params: TableParam,
    status: "approved" | "rejected" | "waiting" | ""
  ): Promise<PaginatedData<Berita>>;
  findOne(id: string): Promise<Berita>;
  update(params: UpadateBerita): Promise<void>;
}
