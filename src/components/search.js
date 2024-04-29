import React from 'react'

const Search = ({ setSearchTerm }) => {
    return (
        <div className="search-container">
            <input
            
                type="text"
                placeholder="Search your recent Transaction..."
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
            />
        </div>
    )
}

export default Search
