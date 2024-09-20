const apiUrl = import.meta.env.VITE_API_URL;

export async function getAllUsers(storedToken) {
  try {
    const response = await fetch(`${apiUrl}/profile/user`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${storedToken}`,
      },
      // credentials: "include",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json();
    return responseData; // Return the data

  } catch (error) {
    return Promise.reject(error); // Reject the promise with the error
  }
}

export async function login(data) {
  try {
    const response = await fetch(`${apiUrl}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data), // Convert data to JSON string
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json();
    return responseData; // Return the parsed data

  } catch (error) {
    return Promise.reject(error); // Reject the promise with the error
  }
}

export async function logout(token) {
  try {
    const response = await fetch(`${apiUrl}/auth/logout`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      // credentials: "include",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

  } catch (error) {
    // Handle errors (e.g., log them)
    console.error("Logout failed:", error);
    return Promise.reject(error); // Optionally reject the promise
  }
}
