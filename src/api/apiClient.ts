import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { store } from '../store';
import { weImmersiveUser } from '../reducers/usersSlice';

class ApiClient {
  private instance: AxiosInstance;
  private baseURL: string;

  constructor() {
    this.baseURL = import.meta.env.VITE_BASE_URL;
    this.instance = axios.create({
      baseURL: this.baseURL,
      timeout: 30000,
    });

    this.setupInterceptors();
  }

  private getToken(): string | null {
    return localStorage.getItem('we-immersiveUser');
  }

  private setupInterceptors() {
    // Request interceptor to add auth token
    this.instance.interceptors.request.use(
      (config) => {
        const token = this.getToken();
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        config.headers['Content-Type'] = 'application/json';
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // Response interceptor to handle auth errors
    this.instance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error?.response?.status === 401) {
          // Clear auth data and redirect to login
          store.dispatch(weImmersiveUser(null));
          localStorage.removeItem('we-immersiveUser');
          localStorage.removeItem('persist:root');
          window.location.href = '/auth/login';
        }
        return Promise.reject(error);
      }
    );
  }

  // GET request
  public async get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.instance.get(url, config);
    return response.data;
  }

  // POST request
  public async post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.instance.post(url, data, config);
    return response.data;
  }

  // PUT request
  public async put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.instance.put(url, data, config);
    return response.data;
  }

  // PATCH request
  public async patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.instance.patch(url, data, config);
    return response.data;
  }

  // DELETE request
  public async delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.instance.delete(url, config);
    return response.data;
  }

  // Validate current token
  public async validateToken(): Promise<boolean> {
    try {
      await this.get('/general/profile');
      return true;
    } catch (error) {
      return false;
    }
  }

  // Get instance for direct axios usage if needed
  public getInstance(): AxiosInstance {
    return this.instance;
  }
}

// Create and export a singleton instance
export const apiClient = new ApiClient();
export default apiClient;
