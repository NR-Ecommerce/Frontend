import './Searchbar.scss'
import {  FiX } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";

const Searchbar = ({update}) => {
  return (
    <div className='searchBar__container'>
      <BiSearch className='searchBar__icon'/>
      <input type="text" className="searchBar__input" />
      <FiX onClick={update} className='searchBar__icon'/>
    </div>
  )
}

export default Searchbar