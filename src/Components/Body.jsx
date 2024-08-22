import { Box, Grid, Typography, CircularProgress, Button } from '@mui/material';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import WidgetCard from './WidgetCard';
import useGetData from '../utils/UsegetData';
import AddWidgetDrawer from './Drawer'; // Import the AddWidgetDrawer
import AddWidgetCard from './AddWidgetCard';

const Body = () => {
  useGetData();
  const categories = useSelector((store) => store.BodyReducer.items);
  const searchTerm = useSelector((store) => store.BodyReducer.searchTerm);
  
  // Drawer state
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredCategories = categories.map((category) => ({
    ...category,
    widgets: category.widgets.filter((widget) =>
      widget.name.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  }));

  const handleOpenDrawer = (category) => {
    setSelectedCategory(category); 
    setDrawerOpen(true); 
  };

  return (
    <Box sx={{ padding: '20px' }}>
    {categories.length === 0 ? (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '400px' }}>
        <CircularProgress />
      </Box>
    ) : (
      filteredCategories.map((category) => (
        <Box key={category.id} sx={{ marginBottom: '30px' }}>
          <Typography variant="h5" gutterBottom>
            {category.name}
          </Typography>

          <Grid container spacing={3}>
            
            {category.widgets.map((widget) => (
              <Grid item xs={12} sm={6} md={4} key={widget.id}>
                <WidgetCard widget={widget} categoryId={category.id} />
              </Grid>
            ))}

           
            <Grid item xs={12} sm={6} md={4}>
              <AddWidgetCard onClick={() => handleOpenDrawer(category)} />
            </Grid>
          </Grid>
        </Box>
      ))
    )}

    {/* AddWidgetDrawer component */}
    {selectedCategory && (
      <AddWidgetDrawer
        isOpen={drawerOpen}
        toggleDrawer={setDrawerOpen}
        category={selectedCategory}
      />
    )}
  </Box>
  );
};

export default Body;
