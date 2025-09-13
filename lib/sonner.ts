type ToastOptions = {
    description?: string;
    duration?: number;
};

export const toast = {
  success: (title: string, options?: ToastOptions) => {
    window.dispatchEvent(new CustomEvent('add-toast', { 
      detail: { type: 'success', title, ...options } 
    }));
  },
  error: (title: string, options?: ToastOptions) => {
    window.dispatchEvent(new CustomEvent('add-toast', { 
      detail: { type: 'error', title, ...options } 
    }));
  },
};
