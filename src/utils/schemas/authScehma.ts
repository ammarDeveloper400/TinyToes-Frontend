import {z} from 'zod'


export const SignupSchema = z.object({
    id: z.number().optional(),
    firstName: z.string().min(1, 'First Name is required'),
    lastName: z.string().min(1, 'Last Name is required'),
    email: z.string().email('Please enter a valid email'),
    password: z.string().min(8,'Password must be at least 8 characters').max(32),    
  });

  export const LoginSchema = z.object({
    email: z.string().email('Please enter a valid email'),
    password: z.string().min(8,'Password must be at least 8 characters').max(32),    
    remember: z.boolean().default(false),
  });

export type UserSignup = z.infer<typeof SignupSchema>;
export type UserLogin = z.infer<typeof LoginSchema>;
