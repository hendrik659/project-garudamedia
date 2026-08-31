export interface NavigationItem {
  readonly label: string;
  readonly href: `/${string}`;
}

export const navigation = [
  {
    label: "Beranda",
    href: "/",
  },
  {
    label: "Paket Internet",
    href: "/paket",
  },
  {
    label: "Tentang Kami",
    href: "/tentang",
  },
] as const satisfies readonly NavigationItem[];
