import React from 'react'

const SearchBar = () => {
    return (
        <div className="row">
            <div className="input-field col s12">
                <i className="material-icons prefix">search</i>
                <textarea id="icon_prefix2" className="materialize-textarea"></textarea>
                <label htmlFor="icon_prefix2">Search</label>
            </div>
        </div>
    )
}

export default SearchBar
