const Search = ({ search, setSearch }) => {
    return (
        <form className="searchBar">
            <input 
                id='search'
                type='text'
                placeholder='search...'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </form>
    )
}

export default Search