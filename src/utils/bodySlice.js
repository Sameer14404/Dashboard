import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const bodySlice = createSlice({
  name: 'body',
  initialState: {
    items: [],         // Array of categories
    searchTerm: '',    // Search term for filtering
    widgetForm: {      // Form data for adding widgets
      name: '',
      text: ''
    }
  },
  reducers: {
    callData: (state, action) => {
      state.items = action.payload;  // Update categories/items
    },
    updateSearchTerm: (state, action) => {
      state.searchTerm = action.payload;  // Update search term
    },
    updateWidgetForm: (state, action) => {
      state.widgetForm = { 
        ...state.widgetForm, 
        ...action.payload  // Update widget form fields
      };
    },
    addWidget: (state, action) => {
      const { categoryId, widget } = action.payload;
      const category = state.items.find(item => item.id === categoryId);
      if (category) {
        category.widgets.push(widget);  // Add widget to the relevant category
      }
    },
    removeWidget: (state, action) => {
      const { categoryId, widgetId } = action.payload;
      const category = state.items.find(item => item.id === categoryId);
      if (category) {
        category.widgets = category.widgets.filter(widget => widget.id !== widgetId);  // Remove widget
      }
    },
    clearWidgetForm: (state) => {
      state.widgetForm = { name: '', text: '' };  // Reset widget form
    },
    clearData: (state) => {
      state.items = [];  // Clear all categories and widgets
    }
  }
});

export const { callData, updateSearchTerm, updateWidgetForm, addWidget, removeWidget, clearWidgetForm, clearData } = bodySlice.actions;
export default bodySlice.reducer;


