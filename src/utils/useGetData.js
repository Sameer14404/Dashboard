import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { callData } from './bodySlice';
import axios from 'axios';

const UseGetData = () => {
  const dispatch = useDispatch();

  // Fetch data inside useEffect
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/categories');
        dispatch(callData(response.data));  // Dispatching data to Redux store
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [dispatch]);  // Dependency array ensures dispatch is available
};

export default useGetData;
