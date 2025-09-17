import { useState } from "react";

// Type definitions
interface EndpointConfig {
  url: string;
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  headers?: Record<string, string>;
  [key: string]: any;
}

interface RequestOptions {
  data?: any;
  params?: Record<string, string | number>;
  query?: Record<string, string | number | boolean>;
  headers?: Record<string, string>;
  fetchOptions?: RequestInit;
}

interface ApiResponse<T = any> {
  success: boolean;
  data: T | null;
  error: string | null;
}

// API Service Class
class ApiService {
  private baseURL: string;
  private endpoints: Record<string, EndpointConfig>;

  constructor(baseURL: string = "") {
    this.baseURL = baseURL;
    this.endpoints = {};
  }

  // Add endpoint configuration
  addEndpoint(name: string, config: EndpointConfig): this {
    this.endpoints[name] = {
      ...config,
      url: config.url,
      method: config.method || "GET",
      headers: config.headers || {},
    };
    return this;
  }

  // Generic request method
  async request(
    endpointName: string,
    options: RequestOptions = {},
  ): Promise<any> {
    const endpoint = this.endpoints[endpointName];
    if (!endpoint) {
      throw new Error(`Endpoint '${endpointName}' not found`);
    }

    const config: RequestInit = {
      method: endpoint.method,
      headers: {
        "Content-Type": "application/json",
        ...endpoint.headers,
        ...options.headers,
      },
      ...options.fetchOptions,
    };

    // Add body for POST, PUT, PATCH requests
    if (
      ["POST", "PUT", "PATCH"].includes(config.method || "") &&
      options.data
    ) {
      // Handle FormData (for file uploads)
      if (options.data instanceof FormData) {
        config.body = options.data;
        // Remove Content-Type header to let browser set it for FormData
        delete (config.headers as Record<string, string>)["Content-Type"];
      } else {
        config.body = JSON.stringify(options.data);
      }
    }

    // Replace URL parameters
    let url = `${this.baseURL}${endpoint.url}`;
    if (options.params) {
      Object.keys(options.params).forEach((key) => {
        url = url.replace(`:${key}`, String(options.params![key]));
      });
    }

    // Add query parameters
    if (options.query) {
      const searchParams = new URLSearchParams();
      Object.entries(options.query).forEach(([key, value]) => {
        searchParams.append(key, String(value));
      });
      url += `?${searchParams.toString()}`;
    }

    const response = await fetch(url, config);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    // Handle different response types
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      return await response.json();
    }
    return await response.text();
  }
}

// Create your API instance with base URL
const api = new ApiService(import.meta.env.VITE_BASE_URL || "");

// ADD YOUR ENDPOINTS HERE
api
  // User endpoints
  .addEndpoint("getUsers", {
    url: "/api/users",
    method: "GET",
  })
  .addEndpoint("getUser", {
    url: "/api/users/:id",
    method: "GET",
  })
  .addEndpoint("createUser", {
    url: "/api/users",
    method: "POST",
  })
  .addEndpoint("updateUser", {
    url: "/api/users/:id",
    method: "PUT",
  })
  .addEndpoint("deleteUser", {
    url: "/api/users/:id",
    method: "DELETE",
  })

  // Product endpoints
  .addEndpoint("getProducts", {
    url: "/api/products",
    method: "GET",
  })
  .addEndpoint("getProduct", {
    url: "/api/products/:id",
    method: "GET",
  })
  .addEndpoint("createProduct", {
    url: "/api/products",
    method: "POST",
    headers: {
      Authorization: "Bearer your-token-here",
    },
  })
  .addEndpoint("updateProduct", {
    url: "/api/products/:id",
    method: "PUT",
  })
  .addEndpoint("deleteProduct", {
    url: "/api/products/:id",
    method: "DELETE",
  })

  // Authentication endpoints
  .addEndpoint("login", {
    url: "/api/auth/login",
    method: "POST",
  })
  .addEndpoint("forgot-password", {
    url: "/auth/password/forgot",
    method: "POST",
  })
  .addEndpoint("register", {
    url: "/api/auth/register",
    method: "POST",
  })
  .addEndpoint("logout", {
    url: "/api/auth/logout",
    method: "POST",
    headers: {
      Authorization: "Bearer your-token-here",
    },
  })

  // Order endpoints
  .addEndpoint("getOrders", {
    url: "/api/orders",
    method: "GET",
  })
  .addEndpoint("getOrder", {
    url: "/api/orders/:id",
    method: "GET",
  })
  .addEndpoint("createOrder", {
    url: "/api/orders",
    method: "POST",
  })
  .addEndpoint("updateOrderStatus", {
    url: "/api/orders/:id/status",
    method: "PATCH",
  })

  // Custom endpoints with different configurations
  .addEndpoint("uploadFile", {
    url: "/api/upload",
    method: "POST",
    headers: {
      // Don't set Content-Type for file uploads, let browser set it
    },
  })
  .addEndpoint("downloadFile", {
    url: "/api/files/:id/download",
    method: "GET",
  })
  .addEndpoint("searchProducts", {
    url: "/api/products/search",
    method: "GET",
  });

// Simple hook for API calls (optional, can be removed if not needed)
export const useApi = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<any>(null);

  const callApi = async (
    endpointName: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse> => {
    setLoading(true);
    setError(null);

    try {
      const result = await api.request(endpointName, options);
      setData(result);
      return { success: true, data: result, error: null };
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "An unknown error occurred";
      setError(errorMessage);
      return { success: false, data: null, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  const reset = (): void => {
    setData(null);
    setError(null);
    setLoading(false);
  };

  return { data, error, loading, callApi, reset };
};

// Direct API access (for calling endpoints directly)
export const directApi = {
  call: async (
    endpointName: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse> => {
    try {
      const result = await api.request(endpointName, options);
      return { success: true, data: result, error: null };
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "An unknown error occurred";
      return { success: false, data: null, error: errorMessage };
    }
  },
};

// Export the api instance if needed
export { api };

// Export types for use in other files
export type { EndpointConfig, RequestOptions, ApiResponse };
