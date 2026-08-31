export interface InternetPackage {
  readonly name: string;
  readonly speed: `${number} Mbps`;
  readonly price: string;
  readonly description: string;
  readonly popular: boolean;
}

export const packages = [
  {
    name: "Starter",
    speed: "15 Mbps",
    price: "122.000",
    description: "Cocok untuk kebutuhan internet ringan sehari-hari.",
    popular: false,
  },
  {
    name: "Basic",
    speed: "20 Mbps",
    price: "145.000",
    description: "Paket favorit pelanggan untuk aktivitas digital keluarga.",
    popular: true,
  },
  {
    name: "Favorite",
    speed: "30 Mbps",
    price: "183.000",
    description: "Koneksi seimbang untuk kebutuhan keluarga modern.",
    popular: false,
  },
  {
    name: "Family",
    speed: "50 Mbps",
    price: "222.000",
    description: "Nyaman untuk banyak perangkat sekaligus.",
    popular: false,
  },
  {
    name: "Premium",
    speed: "100 Mbps",
    price: "272.000",
    description: "Performa tinggi untuk rumah dan bisnis kecil.",
    popular: false,
  },
  {
    name: "Ultra",
    speed: "200 Mbps",
    price: "388.000",
    description: "Kecepatan maksimal untuk kebutuhan berat.",
    popular: false,
  },
  {
    name: "Business",
    speed: "500 Mbps",
    price: "495.000",
    description: "Internet besar untuk kebutuhan profesional.",
    popular: false,
  },
] as const satisfies readonly InternetPackage[];

export const featuredPackages = packages.filter(
  (internetPackage) =>
    internetPackage.speed === "15 Mbps" ||
    internetPackage.speed === "20 Mbps" ||
    internetPackage.speed === "100 Mbps",
);
