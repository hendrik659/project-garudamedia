export type ProcessIcon =
  | "file"
  | "clipboard"
  | "map"
  | "calendar"
  | "wrench"
  | "wifi";

export interface ProcessStep {
  readonly step: `${number}${number}`;
  readonly icon: ProcessIcon;
  readonly title: string;
  readonly description: string;
}

export const processSteps = [
  {
    step: "01",
    icon: "file",
    title: "Ajukan Pemasangan",
    description:
      "Pelanggan mengajukan pemasangan WiFi Garuda Media Telematika 2.0 Jombang dan mengisi data pemasangan.",
  },
  {
    step: "02",
    icon: "clipboard",
    title: "Verifikasi Data",
    description:
      "Admin memeriksa kelengkapan data pelanggan sebelum proses pemasangan.",
  },
  {
    step: "03",
    icon: "map",
    title: "Cek Ketersediaan Jaringan",
    description:
      "Tim Garuda Media Telematika 2.0 Jombang melakukan pengecekan ketersediaan jaringan di lokasi pelanggan.",
  },
  {
    step: "04",
    icon: "calendar",
    title: "Penjadwalan Instalasi",
    description:
      "Admin mengatur jadwal pemasangan dan mengirimkan informasi kepada teknisi.",
  },
  {
    step: "05",
    icon: "wrench",
    title: "Instalasi & Konfigurasi",
    description:
      "Teknisi melakukan pemasangan perangkat, konfigurasi, dan pengujian koneksi.",
  },
  {
    step: "06",
    icon: "wifi",
    title: "Internet Aktif",
    description:
      "Pelanggan menerima edukasi penggunaan, SPK, dan layanan WiFi siap digunakan.",
  },
] as const satisfies readonly ProcessStep[];
