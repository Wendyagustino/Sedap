import "./assets/tailwind.css";
import React from "react";
const Dashboard = React.lazy(() => import("./pages/Dashboard"))
import { Routes, Route } from 'react-router-dom';
import { Suspense } from "react";
const Orders = React.lazy(() => import("./pages/Orders"));
const Customers = React.lazy(() => import("./pages/Customers"));
const Form = React.lazy(() => import("./pages/Form"));
const Login = React.lazy(() => import("./pages/Auth/Login"));
const Register = React.lazy(() => import("./pages/Auth/Register"));
const Forgot = React.lazy(() => import("./pages/Auth/Forgot"));
const NotFound = React.lazy(() => import("./components/NotFound"));
const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));
import Loading from "./components/Loading";
const Users = React.lazy(() => import("./pages/Users"));
import Products from "./pages/Products";
const ProductDetail = React.lazy(() => import("./pages/ProductDetail"));

function App() {
  return(
    <Suspense fallback={<Loading />}>
              <Routes>
                <Route element={<MainLayout/>}>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/orders" element={<Orders />} />
                  <Route path="/customers" element={<Customers />} />

                  <Route path="/form" element={<Form />} />
                  <Route path="/users" element={<Users />} />

                  <Route path="products" element={<Products />} />
                  <Route path="/products/:id" element={<ProductDetail />} /> 

                </Route>

                <Route element={<AuthLayout/>}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register/>} />
                    <Route path="/forgot" element={<Forgot/>} />
                </Route>

                {/* error */}
                <Route path="/error400" element={<NotFound image="../img/400.jpg" code="400"
                    title="Bad Request"
                    message="Permintaan tidak dapat diproses. Silakan periksa kembali input atau coba beberapa saat lagi."
                  />} />

                  <Route path="error401" element={<NotFound image="../img/401.jpg" code="401"
                    title="Unauthorized"
                    message="Kamu belum login atau tidak memiliki akses ke halaman ini. Silakan login terlebih dahulu."
                  />} />

                  <Route path="error403" element={<NotFound image="../img/403.jpg" code="403"
                    title="Forbidden"
                    message="Kamu tidak memiliki izin untuk mengakses halaman ini. Hubungi admin jika ini sebuah kesalahan."
                  />} />

                  <Route path="*" element={<NotFound code="404"
                    title="Page Not Found"
                    message="Maaf, halaman yang kamu cari tidak ditemukan atau sudah dipindahkan."
                  />} />
                  {/* error */}

            </Routes>
      </Suspense>
  )
}

export default App
