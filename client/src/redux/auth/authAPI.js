import Cookies from 'js-cookie';

const apiUrl = import.meta.env.VITE_API_URL;

// Utility function to check for response errors
const checkResponse = async (response) => {
  if (!response.ok) {
    const errorMessage = `HTTP error! Status: ${response.status}`;
    throw new Error(errorMessage);
  }
  return response.json(); // Parse the response as JSON if status is OK
};

// Login
export async function login(data) {
  try {
    const response = await fetch(`${apiUrl}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    });
    return await checkResponse(response);
  } catch (error) {
    return Promise.reject(error); // Reject the promise with the error
  }
}

// Logout
export async function logout() {
  try {
    const response = await fetch(`${apiUrl}/auth/logout`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`,
      },
    });

    Cookies.remove('token'); // Clear the token cookie

    await checkResponse(response);
  } catch (error) {
    return Promise.reject(error); // Reject the promise with the error
  }
}
