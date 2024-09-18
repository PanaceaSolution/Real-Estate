const apiUrl = import.meta.env.VITE_API_URL;

export async function getAllUsers(id) {
  try {
    const response = await fetch(`${apiUrl}/profile/user`, {
      method: "GET",
      headers: {
        'Authorization': `Bearer ${id}`,
      },
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
