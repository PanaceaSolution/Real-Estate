export async function createProduct(data) {
  try {
    const response = await fetch(
      "http://localhost:5000/api/v1/products/create",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
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
          Authorization: `Bearer ${localStorage.getItem("token")}`,
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
