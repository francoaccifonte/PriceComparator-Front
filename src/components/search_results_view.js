import React, { useState } from 'react';
import ProductList from './product_list';
import NavigationBar from './navigation_bar';
import './styles/search_results_view.css';

function SearchResultsView(props) {
  const [resultDisplayMode, setResultDisplayMode] = useState('list')

  const handleDisplayModeChange = () => {
    switch (resultDisplayMode){
      case 'grid':
        setResultDisplayMode('list');
        break;  
      case 'list':
        setResultDisplayMode('grid');
        break;
      default:
        throw new Error('invalid display mode')
    }
  };

  return(
    <div className="searchResultsView">
      <NavigationBar resultDisplayMode={resultDisplayMode} handleDisplayModeChange={handleDisplayModeChange}/>
      <ProductList resultDisplayMode={resultDisplayMode}/>
    </div>
  );
}

export default SearchResultsView
