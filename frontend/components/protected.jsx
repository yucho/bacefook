import { Redirect } from 'react-router-dom';
const ProtectedComponent = component => props => {
  
  return component(props);
};

export default ProtectedComponent;
