const factoryReducer = ({
  singular, plural, RECEIVE_MANY, RECEIVE_ONE, REMOVE_ONE
}) => (prevState = {}, action) => {
    Object.freeze(prevState);
    let newState = {}
    switch (action.type) {
      case RECEIVE_MANY:
        action[plural].forEach(el => newState[el.id] = el);
        return Object.assign({}, prevState, newState);
      case RECEIVE_ONE:
        newState[action[singular].id] = action[singular];
        return Object.assign({}, prevState, newState);
      case REMOVE_ONE:
        newState = Object.assign({}, prevState);
        if (newState[action.id]) {
          delete newState[action.id];
          return newState
        }
        return prevState;
      default:
        return prevState;
    }
};

export default factoryReducer;
