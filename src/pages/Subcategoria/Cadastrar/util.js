export const formDataInitialState = {
    name: "",
    category: "",
  };

  export const getPreparedFormData = (data = {}) => {
    const {
      name,
      category,
    } = data;
  
    const response = {
      name: name,
      categoryID: parseInt(category),
    };
  
    return response;
  };
  