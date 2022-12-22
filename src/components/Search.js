
function Search({ searchText, setSearchText }) {
    return (
        <div className="search-container">
            <input value={searchText} 
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Type to search..."
            ></input>
        </div>
    )
}

export default Search;