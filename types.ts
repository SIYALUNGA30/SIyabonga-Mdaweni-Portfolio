
export interface Toast {
  id: number;
  type: 'success' | 'error';
  title: string;
  description?: string;
  duration?: number;
}
