import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:${process.env.REACT_APP_API_PORT || '3001'}`,
});

export const getAll = async () => {
  const { data } = await axios.get('http://localhost:3001/produtos');
  return data;
}

export const getBySearch = async (search) => {
  const { data } = await axios.get(`http://localhost:3001/produtos/find?produto=${search}`);
  return data;
}

export const getById = async (path) => {
  const { data } = await axios.get(`http://localhost:3001${path}`);
  return data;
}
export default api;
