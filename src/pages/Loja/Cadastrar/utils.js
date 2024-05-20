export const formDataInitialState = {
    name: "",
    address: "",
    phoneNumber: "",
    email: "",
    description: "",
    color: "",
    user: "",
    password: "",
    userEmail: ""
  };

  export const getUserPreparedFormData = (data = {}) => {
    const {
      user,
      password,
      userEmail
    } = data;
  
    const response = {
      name: user,
      password: password,
      email: userEmail
    };
  
    return response;
  };

  export const getPreparedFormData = (data = {}) => {
    const {
      name,
      address,
      phoneNumber,
      email,
      description,
      color,
      password
    } = data;
  
    const response = {
      name: name,
      address: address,
      phoneNumber: phoneNumber,
      email: email,
      description: description,
      color: color,
      password: password
    };
  
    return response;
  };
  