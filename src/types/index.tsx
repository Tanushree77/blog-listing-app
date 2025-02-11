// src/types/index.ts
export interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
  }
  
  export interface User {
    id: number;
    name: string;
    email: string;
    website: string;
  }
  
  export interface Store {
    theme: 'light' | 'dark';
    searchQuery: string;
    posts: Post[];
    loading: boolean;
    error: string | null;
    setTheme: (theme: 'light' | 'dark') => void;
    setSearchQuery: (query: string) => void;
    setPosts: (posts: Post[]) => void;
    setLoading: (loading: boolean) => void;
    setError: (error: string | null) => void;
  }