import React, { useState } from 'react';
import '../../components/styles/search_results_view.css';
import NavigationBar from '../../components/navigation_bar';
import ProductList from '../../components/product_list';

function SearchResults(props) {
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

export default SearchResults
