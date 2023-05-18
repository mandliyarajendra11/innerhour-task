import React from 'react'
import SearchBox from './SearchBox'
import Container from './Container'
const ParentContainer = () => {
  return (
    <div className='parent'>
        <nav>
            <h3>All articles</h3>
        <SearchBox/>
        </nav>
        <Container/>
    </div>
  )
}

export default ParentContainer