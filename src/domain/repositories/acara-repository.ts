import { Acara } from "@domain/models/acara";
import { PaginatedData } from "@domain/models/paginated-data";
import { TableParam } from "types";

export type paramsUpdate = {
  status: string;
  reason: null | string;
};

export interface AcaraRepository {
  findAll(params: TableParam, status: string): Promise<PaginatedData<Acara>>;
  findOne(id: Acara["id"]): Promise<Acara>;
  update(id: string, params: paramsUpdate): Promise<void>;
  destroy(id: Acara["id"]): Promise<void>;
}
