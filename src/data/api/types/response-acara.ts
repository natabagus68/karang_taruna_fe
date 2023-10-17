export interface AcaraResponse {
  id: string;
  status: string;
  nama_acara: string;
  date: string;
  start_time: string;
  end_time: string;
  waktu_acara: string;
  pembuat_acara: string;
  tanggal_dibuat: string;
  waktu_dibuat: string;
  location: string;
  sponsor_name: string;
  deskripsi_acara: string;
  poster_acara: string;
  waktu_disetujui: string;
  tanggal_disetujui: string;
  reasons: string;
}

export interface DetailAcaraResponse {
  id: string;
  status: string;
  nama_acara: string;
  date: string;
  start_time: string;
  end_time: string;
  waktu_acara: string;
  tanggal_dibuat: string;
  waktu_dibuat: string;
  lokasi_acara: string;
  sponsor_name: string;
  pembuat_acara: string;
  deskripsi_acara: string;
  poster_acara: string;
  waktu_disetujui: string;
  tanggal_disetujui: string;
  reasons: string;
}
