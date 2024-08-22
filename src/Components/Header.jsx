import { Box, IconButton, InputBase, Toolbar, Typography, Divider, Badge } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AlarmIcon from '@mui/icons-material/Alarm';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useDispatch } from 'react-redux';
import { updateSearchTerm } from '../utils/bodySlice';  // Import the action

const Header = () => {
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    dispatch(updateSearchTerm(e.target.value));  // Dispatch the search term to the Redux store
  };

  return (
    <>
      <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <Box display="flex" alignItems="center">
          <IconButton edge="start">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ marginRight: '20px' }}>
            Dashboard
          </Typography>

          {/* Search Input Box */}
          <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: '#f1f3f4', padding: '2px 8px', borderRadius: '4px' }}>
            <SearchIcon sx={{ marginRight: '5px' }} />
            <InputBase
              placeholder="Search widgets..."
              inputProps={{ 'aria-label': 'search' }}
              onChange={handleSearchChange}  // Call the handler on input change
            />
          </Box>
        </Box>

        {/* Icons on the right side */}
        <Box display="flex" alignItems="center">
          <IconButton sx={{ marginRight: '10px' }}>
            <Badge badgeContent={4} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton sx={{ marginRight: '10px' }}>
            <AlarmIcon />
          </IconButton>
          <IconButton>
            <AccountCircleIcon />
          </IconButton>
        </Box>
      </Toolbar>
      <Divider />
    </>
  );
};

export default Header;
