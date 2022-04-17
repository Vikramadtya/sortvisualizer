const initialSate = {};
const rootReducer = (state = initialSate, action) => {
  console.log(action);
  return state;
};

export default rootReducer;
