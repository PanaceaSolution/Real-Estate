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


