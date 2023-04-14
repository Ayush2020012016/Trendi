import React from 'react'

const HomePage = () => {
    const [searchBarClicked, setSearchBarClicked] = useState(false);

    const handleClick = () => {
        setSearchBarClicked(true);
      };
  return (
    <div className="home-page">
    <div class="homeMasterContainer">
      <SearchBar onclick={handleClick} onSearchBarClick={handleClick} />
    </div>
  </div>  )
}

export default HomePage