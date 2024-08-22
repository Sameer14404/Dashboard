import React from 'react';
import { useSelector } from 'react-redux';
import CategoryComponent from './Category';

const CategoriesList = () => {
  const categories = useSelector((state) => state.body.items);

  return (
    <div>
      {categories.map((category) => (
        <CategoryComponent key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoriesList;
