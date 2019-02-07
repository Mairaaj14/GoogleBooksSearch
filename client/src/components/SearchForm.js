import React from "react";
// Form to search book
function SearchForm(props) {
    return (
      <form>
          <div className="form-group">
            <label htmlFor="search">Search:</label>
            <input
                onChange={props.handleInputChange}
                value={props.search}
                name="search"
                type="text"
                className="form-control"
                placeholder="Search book"
                id="search"
            />
            {/* Button to search book  */}
            <button onClick={props.handleFormSubmit} className="btn btn-primary"> 
                Search 
            </button>
          </div>
      </form>  
    );
}
// export default searchform
export default SearchForm;