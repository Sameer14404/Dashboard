import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';
import WidgetCard from './WidgetCard';
import AddWidgetDrawer from './AddWidgetDrawer';

const CategoryComponent = ({ category }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => {
    setIsDrawerOpen(open);
  };

  return (
    <div>
      <Typography variant="h5">{category.name}</Typography>

  
      {category.widgets.map((widget) => (
        <WidgetCard key={widget.id} widget={widget} categoryId={category.id} />
      ))}

  
      <Button variant="outlined" onClick={() => toggleDrawer(true)}>
        Add Widget
      </Button>

      {/* Add widget drawer */}
      <AddWidgetDrawer
        isOpen={isDrawerOpen}
        toggleDrawer={toggleDrawer}
        categoryId={category.id}
        categoryName={category.name}
      />
    </div>
  );
};

export default CategoryComponent;
