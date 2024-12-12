// dashboard
import Ecommerce from "pages/Dashboards/Ecommerce";

import UserProfile from "pages/Authentication/UserProfile";
import Login from "pages/Authentication/Login";
import Logout from "pages/Authentication/LogOut";
import Register from "pages/Authentication/Register";
import MasterBarang from "pages/MasterBarang";
import MasterUser from "pages/MasterUser";
import Pemasok from "pages/Pemasok";
import Pelanggan from "pages/Pelanggan";
import BarangMasukPage from "pages/BarangMasuk";
import BarangKeluarPage from "pages/BarangKeluar";

interface RouteObject {
  path: string;
  component: React.ComponentType<any>; // Use React.ComponentType to specify the type of the component
  exact?: boolean;
}

const authProtectedRoutes: Array<RouteObject> = [
  // Dashboard
  { path: "/", component: Ecommerce },
  { path: "/dashboard", component: Ecommerce },
  
  // profile
  { path: "/user-profile", component: UserProfile },
  { path: "/master-user", component: MasterUser },
  { path: "/master-barang", component: MasterBarang },
  { path: "/pemasok", component: Pemasok },
  { path: "/pelanggan", component: Pelanggan },
  { path: "/barang-masuk", component: BarangMasukPage },
  { path: "/barang-keluar", component: BarangKeluarPage },
];

const publicRoutes = [

  // authentication
  { path: "/login", component: Login },
  { path: "/logout", component: Logout },
  { path: "/register", component: Register },

]

export { authProtectedRoutes, publicRoutes };
