import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('a');
  const [cocktails, setCocktails] = useState([]);

  const fetchDrinks = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`${url}${search}`);
      const data = await res.json();
      const { drinks } = data;
      if(drinks) {
        const newDrinks = drinks.map(drink => {
          const {idDrink, strDrink, strAlcoholic, strDrinkThumb, strGlass} = drink;
          return {
            id: idDrink,
            name: strDrink,
            info: strAlcoholic,
            image: strDrinkThumb,
            glass: strGlass
          }
        });
        setCocktails(newDrinks); 
      } else {
        setCocktails([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [search]);

  useEffect(() => {
    fetchDrinks();
  }, [search, fetchDrinks]);

  return <AppContext.Provider value={{
    loading, 
    cocktails, 
    setSearch
  }}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
