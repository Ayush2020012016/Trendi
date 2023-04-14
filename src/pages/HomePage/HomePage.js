import React, { useState } from 'react'
import SearchBar from '../../components/SearchBar/SearchBar';
import TrendingProducts from '../../components/TrendingProducts/TrendingProducts';

const HomePage = () => {
    const [searchBarClicked, setSearchBarClicked] = useState(false);



    const handleClick = () => {
        setSearchBarClicked(true);
      };
  return (
    <div className="home-page">
    <div class="homeMasterContainer">
      <SearchBar onclick={handleClick} onSearchBarClick={handleClick} />
      {searchBarClicked ? (
            <TrendingProducts />) : null}
    </div>
  </div>  )
}

export default HomePage