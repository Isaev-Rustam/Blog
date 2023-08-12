export interface User {
  user: {
    username: string;
    email: string;
    token: string;
    bio: string;
    image: string;
    password?: string;
  };
}
