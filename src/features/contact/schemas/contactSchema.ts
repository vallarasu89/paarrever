import { z } from 'zod';

export const contactSchema = z.object({
  fullName: z.string().min(2, { message: 'Please enter your full name (at least 2 characters).' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().regex(/^[0-9+ -]{8,15}$/, { message: 'Please enter a valid phone number.' }),
  inquiryType: z.enum(['general', 'feedback', 'vendor', 'passport'], {
    message: 'Please select an inquiry type.',
  }),
  storeLocation: z.string().optional(),
  subject: z.string().min(3, { message: 'Subject must be at least 3 characters.' }),
  message: z.string().min(10, { message: 'Please write a message with at least 10 characters.' }),
});

export type ContactFormData = z.infer<typeof contactSchema>;
