import React from 'react'
import { BsSearch} from 'react-icons/bs';
const SearchBox = () => {
  return (
    <>
   <div>
   <input type="search"  name='search' id='search' placeholder='Search articles' />
    <label htmlFor='search'><BsSearch/></label>
    </div>
    </> 
 )
}

export default SearchBox