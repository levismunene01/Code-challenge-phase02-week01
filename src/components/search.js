import React from 'react';

// setting format
function Search({ setSearchTerm }) {
    const format = (value) => {
        return value.trim().toLowerCase();
    };

    const handleChange = (e) => {
        setSearchTerm(format(e.target.value));
    };

    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Search your recent Transaction..."
                onChange={handleChange}
                className="search-input"
            />
        </div>
    );
}

export default Search;
