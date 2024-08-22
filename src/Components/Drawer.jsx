import { Drawer, Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addWidget } from '../utils/bodySlice';

const AddWidgetDrawer = ({ isOpen, toggleDrawer, category }) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: '',
    text: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    try {
      const newWidget = {
        id: Date.now().toString(),
        name: form.name,
        text: form.text
      };

      // Fetch the current category data
      const { data: categoryData } = await axios.get(`http://localhost:3001/categories/${category.id}`);

      // Update the category with the new widget
      const updatedCategory = {
        ...categoryData,
        widgets: [...categoryData.widgets, newWidget]
      };

      // PUT request to update the category on the server
      await axios.put(`http://localhost:3001/categories/${category.id}`, updatedCategory);

      // Dispatch action to update the Redux store
      dispatch(addWidget({ categoryId: category.id, widget: newWidget }));

      // Close the drawer and reset the form
      toggleDrawer(false);
      setForm({ name: '', text: '' });
    } catch (error) {
      console.error('Error adding widget:', error);
    }
  };

  return (
    <Drawer anchor="right" open={isOpen} onClose={() => toggleDrawer(false)}>
      <Box sx={{ width: 300, padding: '20px' }}>
        <Typography variant="h6" gutterBottom>
          Add Widget to {category.name}
        </Typography>

        <TextField
          fullWidth
          label="Widget Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          sx={{ marginBottom: '10px' }}
        />

        <TextField
          fullWidth
          label="Widget Text"
          name="text"
          value={form.text}
          onChange={handleChange}
          sx={{ marginBottom: '10px' }}
        />

        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Add Widget
        </Button>
      </Box>
    </Drawer>
  );
};

export default AddWidgetDrawer;
