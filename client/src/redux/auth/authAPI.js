export async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
    });

    if (!response.ok) {
      // Throw an error if the response status is not OK
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return { data }; // Return the data wrapped in an object

  } catch (error) {
    // Return the error object directly
    return Promise.reject(error);
  }
}

export async function login(data) {
  try {
    const apiUrl = import.meta.env.VITE_API_URL;

    const response = await fetch(`${apiUrl}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Ensure you're sending JSON
      },
      body: JSON.stringify(data), // Convert data to JSON string
    });

    if (!response.ok) {
      // Throw an error if the response status is not OK
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json();
    return responseData // Return the parsed data

  } catch (error) {
    return Promise.reject(error); // Reject the promise with the error
  }
}

