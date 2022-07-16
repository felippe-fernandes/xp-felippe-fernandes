import React from 'react';
import PropTypes from 'prop-types';
import LoginContext from './LoginContext';

function RecipesProvider({ children }) {
  // const [radioValue, setRadioValue] = useState('ingredient');
  // const [apiValue, setApiValue] = useState({});
  // const [finalItems, setFinalItems] = useState();
  // const [siteValue, setSiteValue] = useState('meal');
  // const [searchValue, setSearchValue] = useState('');
  // const [first12, setFirst12] = useState([]);
  // const [ingredientsApi, setIngredientsApi] = useState({});
  // const [recipesByIngridients, setRecipesByIngridients] = useState('');

  const objValue = 'teste';

  return (
    <LoginContext.Provider value={objValue}>
      {children}
    </LoginContext.Provider>
  );
}

RecipesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RecipesProvider;
