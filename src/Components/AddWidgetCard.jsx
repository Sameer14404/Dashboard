import { Card, CardContent, IconButton, Typography, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const AddWidgetCard = ({ onClick }) => {
  return (
    <Card sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '150px' }}>
      <CardContent>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <IconButton color="primary" onClick={onClick}>
            <AddIcon sx={{ fontSize: 40 }} />
          </IconButton>
          <Typography variant="body1" sx={{ marginTop: '10px' }}>
            Add Widget
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default AddWidgetCard;
