// auth.ts
export const checkUserAuthentication = (): boolean => {
    const token = localStorage.getItem('token');
    return !!token;
  };
  
  export const login = (token: string): void => {
    localStorage.setItem('token', token);
  };
  
  export const signup = (token: string): void => {
    localStorage.setItem('token', token);
  };

  export const logout = (): void => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };