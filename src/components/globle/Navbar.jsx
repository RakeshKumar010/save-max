import Logo from '../../assets/logo.svg'

const Navbar = () => {
  return (
    <div className='p-2 px-5 fixed top-0 shadow-lg z-10 right-0 left-0 bg-white'>
        <img src={Logo} alt="..." className='w-32'/>
    </div>
  )
}

export default Navbar