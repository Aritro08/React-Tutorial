import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { setSearch } = useGlobalContext();
  const searchVal = React.useRef(null);

  const searchCocktail = () => {
    setSearch(searchVal.current.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  React.useEffect(() => {
    searchVal.current.focus();
  }, []);

  return (
    <section className="section search" onSubmit={handleSubmit}>
      <form className="search-form">
        <div className="form-control">
          <label htmlFor="name">Search for a drink</label>
          <input type="text" id="name" ref={searchVal} onChange={searchCocktail} />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
