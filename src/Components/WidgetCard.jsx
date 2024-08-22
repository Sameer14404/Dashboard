import { Card, CardContent, CardActions, Typography, IconButton } from '@mui/material';
import { useDispatch } from 'react-redux';
import { removeWidget } from '../utils/bodySlice';
import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete';

const WidgetCard = ({ widget, categoryId }) => {
  const dispatch = useDispatch();

  const handleRemove = async () => {
    try {
      // Remove the widget from the server-side category
      const { data: category } = await axios.get(`http://localhost:3001/categories/${categoryId}`);
      const updatedCategory = {
        ...category,
        widgets: category.widgets.filter((w) => w.id !== widget.id),
      };

      await axios.put(`http://localhost:3001/categories/${categoryId}`, updatedCategory);

      // Remove widget from the Redux store
      dispatch(removeWidget({ categoryId, widgetId: widget.id }));
    } catch (error) {
      console.error('Error removing widget:', error);
    }
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" sx={{ textAlign: 'center' }}>
          {widget.name}
        </Typography>
        <Typography variant="body2" sx={{ textAlign: 'center' }}>
          {widget.text}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center' }}>
        <IconButton color="secondary" onClick={handleRemove}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default WidgetCard;
