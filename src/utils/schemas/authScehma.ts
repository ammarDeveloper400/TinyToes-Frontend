import {z} from 'zod'


export const SignupSchema = z.object({
    id: z.number().optional(),
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(8).max(32),    
  });



export const UserSignup = z.ZodType<typeof SignupSchema>