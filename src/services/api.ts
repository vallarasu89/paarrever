export interface ContactSubmission {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  storeLocation?: string;
  message: string;
  inquiryType: 'general' | 'feedback' | 'vendor' | 'passport';
}

export const apiService = {
  submitContactForm: async (data: ContactSubmission): Promise<{ success: boolean; message: string }> => {
    // Realistic simulation
    await new Promise(resolve => setTimeout(resolve, 800));
    console.info('Contact Form Submission:', data);
    return {
      success: true,
      message: 'Thank you! Your inquiry has been routed to our Chennai headquarters. A customer care representative will contact you shortly.',
    };
  },

  submitReview: async (review: {
    author: string;
    rating: number;
    verifiedShopper: boolean;
    storeLocation: string;
    categoryPurchased: string;
    comment: string;
  }) => {
    await new Promise(resolve => setTimeout(resolve, 700));
    return {
      success: true,
      review: {
        ...review,
        id: `rev-${Date.now()}`,
        date: 'Just now',
        helpfulCount: 0,
      },
    };
  },

  subscribeNewsletter: async (email: string): Promise<{ success: boolean; message: string }> => {
    await new Promise(resolve => setTimeout(resolve, 600));
    console.info('Subscribed newsletter:', email);
    return {
      success: true,
      message: 'You have been subscribed to PAARR EVER seasonal produce updates and festive deals!',
    };
  },
};
