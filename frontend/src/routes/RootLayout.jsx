import { Outlet } from 'react-router-dom';

export default function RootLayout() {
  return (
    <>
    <div>
      Navbar goes here
    </div>
    <Outlet />
    </>
  )
}