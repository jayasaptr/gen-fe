import {
  BookUser,
  Box,
  Container,
  Mail,
  MessageSquare,
  MonitorDot,
  PackageCheckIcon,
  PackageMinusIcon,
  PictureInPicture2,
  User,
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
];

export { menuData };
