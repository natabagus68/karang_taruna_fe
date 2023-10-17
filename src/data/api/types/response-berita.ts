export interface BeritaResponse {
  id: string;
  status: string;
  headLine_berita: string;
  date: string;
  time: string;
  tanggal_dibuat: string;
  waktu_dibuat: string;
  redaktur: string;
  isi_berita: string;
  news_images: string[];
  category_id: string;
  category: string;
  waktu_disetujui: string;
  tanggal_disetujui: string;
  disetujui_oleh: string;
  reasons: string;
}
