import Cookies from "js-cookie";

const token = Cookies.get("token");

export async function createProduct(data) {
  try {
    const response = await fetch(
      "http://localhost:5000/api/v1/products/create",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
        body: data,
      }
    );

    if (response.ok) {
      const responseData = await response.json();
      return { data: responseData };
    } else {
      const error = await response.json();
      throw new Error(error.message || "Failed to create product");
    }
  } catch (error) {
    throw new Error(error.message || "An unexpected error occurred");
  }
}

// get Own Property
export async function getOwnProperty() {
  try {
    const response = await fetch(
      "http://localhost:5000/api/v1/products/myproducts",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
      }
    );

    if (response.ok) {
      const responseData = await response.json();
      return { data: responseData };
    } else {
      const error = await response.json();
      throw new Error(error.message || "Failed to create product");
    }
  } catch (error) {
    throw new Error(error.message || "An unexpected error occurred");
  }
}
// get product by id

export async function getProductById(id) {
  try {
    const response = await fetch(
      "http://localhost:5000/api/v1/products/" + id,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        credentials: "include"
      }
    );

    if (response.ok) {
      const responseData = await response.json();
      return { data: responseData };
    } else {
      const error = await response.json();
      throw new Error(error.message || "Failed to create product");
    }
  } catch (error) {
    throw new Error(error.message || "An unexpected error occurred");
  }
}

// EDIT 

export async function editProduct({ newData, id }) {
  try {
    // if (!token) {
    //   throw new Error("User not authenticated");
    // }

    const response = await fetch(
      `http://localhost:5000/api/v1/products/update/${id}`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
        body: newData,
      }
    );

    if (response.ok) {
      const responseData = await response.json();
      return { data: responseData };
    } else {
      try {
        const error = await response.json();
        throw new Error(error.message || "Failed to update product");
      } catch {
        throw new Error("Failed to update product - response not in JSON format");
      }
    }
  } catch (error) {
    throw new Error(error.message || "An unexpected error occurred");
  }
}


// Delete

export async function deleteProduct({ id, public_id }) {
  try {
    // if (!token) {
    //   throw new Error("User not authenticated");
    // }

    const response = await fetch(
      `http://localhost:5000/api/v1/products/delete/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        credentials: "include",
        body: JSON.stringify({ public_id }),
      }
    );

    if (response.ok) {
      const responseData = await response.json();
      return { data: responseData };
    } else {
      const error = await response.json();
      throw new Error(error.message || "Failed to delete product");
    }
  } catch (error) {
    throw new Error(error.message || "An unexpected error occurred");
  }
}


export async function getAllProducts() {
  try {
    const response = await fetch(`http://localhost:5000/api/v1/products`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        credentials: "include"
      }
    )

    if (response.ok) {
      const responseData = await response.json();
      return { data: responseData };
    } else {
      const error = await response.json();
      throw new Error(error.message || "Failed to fetch products");
    }

  } catch (error) {

  }
}