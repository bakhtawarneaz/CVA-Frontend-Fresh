export interface AuthState {
    user: any | null; 
    isAuthenticated: boolean;
    token: string | null;
  }
  
  export interface RootState {
    auth: AuthState;
  }