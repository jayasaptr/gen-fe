import {
  BookUser,
  Box,
  BoxesIcon,
  ClipboardEditIcon,
  Container,
  LucideBox,
  Mail,
  MessageSquare,
  MonitorDot,
  PackageCheckIcon,
  PackageMinusIcon,
  PictureInPicture2,
  PieChart,
  User,
  UserMinus2,
  UserPlus2Icon,
} from "lucide-react";

const menuData: any = [
  {
    label: "menu",
    isTitle: true,
  },
  {
    id: "dashboard",
    label: "Dashboards",
    link: "/#",
    icon: <MonitorDot />,
  },
  {
    label: "Data Master",
    isTitle: true,
  },
  {
    id: "User",
    label: "User",
    icon: <User />,
    link: "/master-user",
    parentId: 1,
  },
  {
    id: "barang",
    label: "Barang",
    icon: <Box />,
    link: "/master-barang",
    parentId: 2,
  },
  {
    id: "pemasok",
    label: "Pemasok",
    icon: <Container />,
    link: "/pemasok",
    parentId: 3,
  },
  {
    id: "pelanggan",
    label: "Pelanggan",
    icon: <BookUser />,
    link: "/pelanggan",
    parentId: 4,
  },
  {
    label: "Data Lainnya",
    isTitle: true,
  },
  {
    id: "barang_masuk",
    label: "Barang Masuk",
    icon: <PackageCheckIcon />,
    link: "/barang-masuk",
    parentId: 1,
  },
  {
    id: "barang_keluar",
    label: "Barang Keluar",
    icon: <PackageMinusIcon />,
    link: "/barang-keluar",
    parentId: 2,
  },
  {
    label: "Laporan",
    isTitle: true,
  },
  {
    id: "laporan_pemasok",
    label: "Laporan Pemasok",
    icon: <UserPlus2Icon />,
    link: "/barang-keluar",
    parentId: 1,
  },
  {
    id: "laporan_pelanggan",
    label: "Laporan Pelanggan",
    icon: <UserMinus2 />,
    link: "/barang-keluar",
    parentId: 2,
  },
  {
    id: "mutasi_barang",
    label: "Laporan Mutasi Barang",
    icon: <PieChart />,
    link: "/barang-keluar",
    parentId: 3,
  },
  {
    id: "barang_tersedia",
    label: "Laporan Stok Barang Tersedia",
    icon: <BoxesIcon />,
    link: "/barang-keluar",
    parentId: 4,
  },
  {
    id: "barang_habis",
    label: "Laporan Stok Barang Kosong",
    icon: <LucideBox />,
    link: "/barang-keluar",
    parentId: 5,
  },

];

export { menuData };
