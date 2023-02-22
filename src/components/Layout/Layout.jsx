import Navbar from "../Navbar/Navbar"

const Layout = ({children}) => {
  return (
    <>
      <Navbar/>
      {children}
      {/* footer */}
    </>
  )
}

export default Layout