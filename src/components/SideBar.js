import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';


const SideBar = () => {
  return (  
    <div className="
      fixed top-0 left-0 h-screen w-16 m-0 
      flex flex-col bg-primary text-white">

      <SideBarIcon icon={<FaFire size='28' />} />
      <Divider />
      <SideBarIcon icon={<FaPoo size='28' />} />
      <SideBarIcon icon={<BsFillLightningFill size='28' />} />
      <SideBarIcon icon={<BsPlus size='50' />} />
      <Divider />
      <SideBarIcon icon={<BsGearFill size='22' />} />
    </div>
  );
};

const SideBarIcon = ({ icon, text = 'tooltip 💡' }) => (
  <div className='sidebar-icon group'>
    {icon}

    <span className='sidebar-tooltip group-hover:scale-100'>
      {text}
    </span>
  </div>

);

  const Divider = () => <hr className="sidebar-hr" />;
export default SideBar;