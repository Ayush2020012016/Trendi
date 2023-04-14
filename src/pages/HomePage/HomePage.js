import React from 'react'

const HomePage = () => {
  return (
    <div className="home-page">
    <div class="homeMasterContainer">
      <SearchBar onclick={handleClick} onSearchBarClick={handleClick} />
    </div>
  </div>  )
}

export default HomePage