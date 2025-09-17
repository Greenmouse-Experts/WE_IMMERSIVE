// HOW TO USE THE API SERVICE IN ANY COMPONENT

import React, { useState, useEffect } from "react";
import { useApi, useGlobalApi, directApi } from "./apiService";

// ====================================
// METHOD 1: Using useApi Hook (Component Level)
// ====================================

const UserComponent = () => {
  const { data, error, loading, callApi, reset } = useApi();
  const [users, setUsers] = useState([]);

  // GET request - Fetch all users
  const fetchUsers = async () => {
    const result = await callApi("getUsers");
    if (result.success) {
      setUsers(result.data);
      console.log("Users fetched:", result.data);
    } else {
      console.error("Error fetching users:", result.error);
    }
  };

  // GET request with URL params - Fetch single user
  const fetchUser = async (userId) => {
    const result = await callApi("getUser", {
      params: { id: userId },
    });
    if (result.success) {
      console.log("User data:", result.data);
    }
  };

  // POST request - Create new user
  const createUser = async () => {
    const userData = {
      name: "John Doe",
      email: "john@example.com",
      phone: "+1234567890",
    };

    const result = await callApi("createUser", {
      data: userData,
    });

    if (result.success) {
      console.log("User created:", result.data);
      fetchUsers(); // Refresh the list
    } else {
      console.error("Failed to create user:", result.error);
    }
  };

  // PUT request - Update user
  const updateUser = async (userId) => {
    const result = await callApi("updateUser", {
      params: { id: userId },
      data: {
        name: "Updated Name",
        email: "updated@example.com",
      },
    });

    if (result.success) {
      console.log("User updated:", result.data);
    }
  };

  // DELETE request
  const deleteUser = async (userId) => {
    const result = await callApi("deleteUser", {
      params: { id: userId },
    });

    if (result.success) {
      console.log("User deleted");
      setUsers(users.filter((user) => user.id !== userId));
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Users</h2>
      <button onClick={createUser}>Create User</button>
      {/* Your component JSX */}
    </div>
  );
};

// ====================================
// METHOD 2: Using Global API Context
// ====================================

const ProductComponent = () => {
  const { makeRequest, loading, error, clearError } = useGlobalApi();
  const [products, setProducts] = useState([]);

  // GET with query parameters
  const searchProducts = async (searchTerm, category) => {
    const result = await makeRequest("searchProducts", {
      query: {
        q: searchTerm,
        category: category,
        page: 1,
        limit: 10,
      },
    });

    if (result.success) {
      setProducts(result.data.products);
    }
  };

  // POST with custom headers
  const createProduct = async () => {
    const result = await makeRequest("createProduct", {
      data: {
        name: "New Product",
        price: 99.99,
        category: "electronics",
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Custom-Header": "custom-value",
      },
    });

    if (result.success) {
      console.log("Product created:", result.data);
    }
  };

  return (
    <div>
      <h2>Products</h2>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      <button onClick={() => searchProducts("laptop", "electronics")}>
        Search Laptops
      </button>
      <button onClick={createProduct}>Create Product</button>
    </div>
  );
};

// ====================================
// METHOD 3: Direct API Calls (without hooks)
// ====================================

const OrderComponent = () => {
  const [orders, setOrders] = useState([]);

  // Direct API call
  const fetchOrders = async () => {
    const result = await directApi.call("getOrders", {
      query: {
        status: "pending",
        page: 1,
      },
    });

    if (result.success) {
      setOrders(result.data);
    } else {
      console.error("Error:", result.error);
    }
  };

  // Another direct call
  const updateOrderStatus = async (orderId, newStatus) => {
    const result = await directApi.call("updateOrderStatus", {
      params: { id: orderId },
      data: { status: newStatus },
    });

    if (result.success) {
      console.log("Order updated");
      fetchOrders(); // Refresh
    }
  };

  return (
    <div>
      <h2>Orders</h2>
      <button onClick={fetchOrders}>Fetch Orders</button>
      {orders.map((order) => (
        <div key={order.id}>
          <span>{order.id}</span>
          <button onClick={() => updateOrderStatus(order.id, "completed")}>
            Mark Complete
          </button>
        </div>
      ))}
    </div>
  );
};

// ====================================
// METHOD 4: Authentication Example
// ====================================

const AuthComponent = () => {
  const { callApi } = useApi();

  const login = async (email, password) => {
    const result = await callApi("login", {
      data: { email, password },
    });

    if (result.success) {
      localStorage.setItem("token", result.data.token);
      console.log("Login successful");
    } else {
      console.error("Login failed:", result.error);
    }
  };

  const register = async (userData) => {
    const result = await callApi("register", {
      data: userData,
    });

    if (result.success) {
      console.log("Registration successful");
    }
  };

  const logout = async () => {
    const result = await callApi("logout", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    if (result.success) {
      localStorage.removeItem("token");
      console.log("Logout successful");
    }
  };

  return (
    <div>
      <button onClick={() => login("user@example.com", "password")}>
        Login
      </button>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

// ====================================
// METHOD 5: File Upload Example
// ====================================

const FileUploadComponent = () => {
  const { callApi } = useApi();

  const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    const result = await callApi("uploadFile", {
      data: formData,
      headers: {
        // Don't set Content-Type, let browser set it for FormData
      },
      fetchOptions: {
        // Override default JSON body handling
        body: formData,
      },
    });

    if (result.success) {
      console.log("File uploaded:", result.data);
    }
  };

  return (
    <div>
      <input type="file" onChange={(e) => uploadFile(e.target.files[0])} />
    </div>
  );
};

// ====================================
// MAIN APP SETUP
// ====================================

const App = () => {
  return (
    <ApiProvider>
      {" "}
      {/* Wrap your app with ApiProvider for global API */}
      <div>
        <UserComponent />
        <ProductComponent />
        <OrderComponent />
        <AuthComponent />
        <FileUploadComponent />
      </div>
    </ApiProvider>
  );
};

export default App;

// ====================================
// QUICK REFERENCE GUIDE
// ====================================

/*
HOW TO ADD NEW ENDPOINTS:

In apiService.js, add to the chain:

api.addEndpoint('yourEndpointName', {
  url: '/api/your-endpoint',
  method: 'GET|POST|PUT|DELETE|PATCH',
  headers: {
    'Authorization': 'Bearer token',
    'Custom-Header': 'value'
  }
});

USAGE PATTERNS:

1. Simple GET:
   const result = await callApi('getUsers');

2. GET with URL params:
   const result = await callApi('getUser', {
     params: { id: 123 }
   });

3. GET with query params:
   const result = await callApi('getProducts', {
     query: { page: 1, limit: 10, category: 'electronics' }
   });

4. POST with data:
   const result = await callApi('createUser', {
     data: { name: 'John', email: 'john@example.com' }
   });

5. With custom headers:
   const result = await callApi('createProduct', {
     data: { name: 'Product' },
     headers: { 'Authorization': 'Bearer token' }
   });

RESPONSE FORMAT:
All calls return: { success: boolean, data: any, error: string|null }

ERROR HANDLING:
- Check result.success before using result.data
- result.error contains error message if success is false
- loading and error states are automatically managed by hooks
*/
