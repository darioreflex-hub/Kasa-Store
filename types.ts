export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  stock: number;
  image: string;
  sku: string;
  isNew?: boolean;
  discount?: number;
}

export interface Order {
  id: string;
  customer: string;
  date: string;
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  paymentMethod: string;
}

export type ViewState = 'store' | 'admin' | 'cart' | 'product-detail';