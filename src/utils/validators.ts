// Validation helper functions
export const validators = {
  email: (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return {
      valid: emailRegex.test(value),
      message: !emailRegex.test(value) ? "Please enter a valid email address" : undefined,
    };
  },
  phone: (value: string) => {
    const phoneRegex = /^[\d\s+()-]{10,}$/;
    return {
      valid: phoneRegex.test(value),
      message: !phoneRegex.test(value) ? "Please enter a valid phone number" : undefined,
    };
  },
  minLength: (min: number) => (value: string) => {
    return {
      valid: value.length >= min,
      message: value.length < min ? `Minimum ${min} characters required` : undefined,
    };
  },
  required: (value: string) => {
    return {
      valid: value.trim().length > 0,
      message: value.trim().length === 0 ? "This field is required" : undefined,
    };
  },
};
