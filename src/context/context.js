import { CREATE, UPDATE, DELETE } from "./action";
import { createContext, useContext, useReducer } from "react";
import reducer from "./reducer";
export const AppContext = createContext();

const initialSate = {
  students: [
    { id: 1, name: "Juan", age: 20 },
    { id: 2, name: "Toto", age: 21 },
    { id: 3, name: "Moto", age: 22 },
  ],
};

export const AppProvider = (props) => {
  //reducer (1)
  const [state, dispatch] = useReducer(reducer, initialSate);
  //dispatch repercute contra la funcion reducer(debe retornar un nievo estado no modif el anterior)

  const createStudent = (student) =>
    dispatch({ type: CREATE, payload: student });
  const updateStudent = (student) =>
    dispatch({ type: UPDATE, payload: student });
  const deleteStudent = (id) =>
    dispatch({ type: DELETE, payload: "delete from context" });

  return (
    <AppContext.Provider
      value={{
        students: state.students,
        createStudent,
        updateStudent,
        deleteStudent,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
