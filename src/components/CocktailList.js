import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const {loading, cocktails} = useGlobalContext();
  if(loading) {
    return <Loading></Loading>
  }
  if(cocktails.length < 1) {
    return (
      <h2 className="section-title">No items matched your search.</h2>
    )
  }
  return (
    <section className="section">
      <h2 className="section-title">Cocktails</h2>
      <div className="cocktails-center">
        {cocktails.map(cocktail => {
          return <Cocktail key={cocktail.id} {...cocktail}></Cocktail>
        })}
      </div>
    </section>
  )
}

export default CocktailList
