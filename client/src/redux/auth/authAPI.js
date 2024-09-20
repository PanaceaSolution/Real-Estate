import Cookies from 'js-cookie';

const storedToken = Cookies.get('token');
const apiUrl = import.meta.env.VITE_API_URL;

// Utility function to check for response errors
const checkResponse = async (response) => {
  if (!response.ok) {
    const errorMessage = `HTTP error! Status: ${response.status}`;
    throw new Error(errorMessage);
  }
  return response.json(); // Parse the response as JSON if status is OK
};

// Get All Users
export async function getAllUsers() {
  try {
    const response = await fetch(`${apiUrl}/profile/user`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${storedToken}`,
      },
    });

    return await checkResponse(response); // Check and return the response data
  } catch (error) {
    return Promise.reject(error); // Reject the promise with the error
  }
}


// Delete User
export async function deleteUserById(id) {
  try {
    const response = await fetch(`${apiUrl}/profile/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${storedToken}`,
      },
    });

    await checkResponse(response); // Validate response

  } catch (error) {
    return Promise.reject(error); // Return the error as rejected promise
  }
}

// Update User
export async function updateUserById(formData) {
  try {
    const response = await fetch(`${apiUrl}/profile/${formData.get('id')}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${storedToken}`,
      },
      body: formData,
    });

    return await checkResponse(response); // Validate and return the response data
  } catch (error) {
    return Promise.reject(error); // Return the error as rejected promise
  }
}


//Login
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

    return await checkResponse(response); // Return the parsed data
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
        Authorization: `Bearer ${storedToken}`,
      },
    });
    Cookies.remove('token'); // Clear the token cookie

    await checkResponse(response); // Validate response
  } catch (error) {
    return Promise.reject(error); // Reject the promise with the error
  }
}
