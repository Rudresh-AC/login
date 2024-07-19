// utill/auth.js
import axios from "axios";

const API_KEY = "AIzaSyCw_3J7vF5cHdgDQ1xUYfVET5lV34hX4_8";

// https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

async function authenticate(mode, email, password, username = null) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  console.log("response.data=", response.data);

  const result = {
    ...response.data,
    username: username,
  };

  return result;
}

export function createUser(email, password, username) {
  return authenticate("signUp", email, password, username);
}

export function login(email, password) {
  return authenticate("signInWithPassword", email, password);
}
