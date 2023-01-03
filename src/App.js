// import Redux from "./Tugas-Redux/Redux";
import FormRegistrasi from "./Tugas-FormRegistrasi/FormRegistrasi";

function App() {
  return (
    <div className='vstack align-items-center'>
      {/* <Component/> */}
      {/* <TugasPortofolio/> */}
      {/* <PortalBerita /> */}
      {/* <TugasHooks /> */}
      <FormRegistrasi />
      {/* <div className='py-3'>
        <Link to='home' className='btn btn-outline-primary'>
          Home
        </Link>
        <Link to='product' className='btn btn-outline-success mx-3'>
          Product
        </Link>
        <Link to='about' className='btn btn-outline-dark'>
          About
        </Link>
      </div>
      <div>
        <div className='vh-100 hstack'>
        <Outlet />
        </div>
      </div> */}
      {/* <Redux /> */}
    </div>
  );
}

export default App;
