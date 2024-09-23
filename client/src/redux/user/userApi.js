import Cookies from 'js-cookie';

const apiUrl = import.meta.env.VITE_API_URL;
const token = Cookies.get('token');

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
            Authorization: `Bearer ${token}`,
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
            Authorization: `Bearer ${token}`,
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
            Authorization: `Bearer ${token}`,
         },
         body: formData,
      });

      return await checkResponse(response); // Validate and return the response data
   } catch (error) {
      return Promise.reject(error); // Return the error as rejected promise
   }
}
