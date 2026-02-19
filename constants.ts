import { Product, Order } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Heladera Samsung No Frost 420L Inverter',
    category: 'Refrigeración',
    price: 1250000,
    originalPrice: 1666000,
    stock: 12,
    sku: 'REF-SAM-420',
    discount: 25,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWttyTk6DbC1UOFGZKSQxLtrBqPsvWGSVGT-4v4gY-xVt09w3uH5kJ7OTxf2gXslDFYzG84yP1EK8Csvdfk3BoDO9wRre8lozJ0oPEuBjnvJcvVPbm-vzZ6XKXvDoQRbSDbC7FPlUZfhzNzcideE2gwr8TziLKTUFnNg1YtxZV2N05Xg4rhC9r0ZKwSq_t5RhhPY6cbCApRE97kf9Euf0JRf8PMxtdPYcPkeIpiREpgU84c1xVkMcGw2vJywaeDlFbExdKTSyivALi'
  },
  {
    id: '2',
    name: 'Lavarropas Automático Carga Frontal 9kg',
    category: 'Lavado',
    price: 890000,
    originalPrice: 988000,
    stock: 8,
    sku: 'LAV-SAM-9KG',
    discount: 10,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBeMlEDN-5AXxkyLvIARyMihQ42sHXbkvDn-Bj8snVXzqWN1nc9EctskldMk18aZxOAOXNypKvs0jjdKGISX68Iej4XHNCFk1J0uTPVFvw4IeDyHamDvXSee8vSZiSTXhLJgG3G7KVqPDanWGDvPYgUASjJLLsgAJ8V_osgA_ve94fGm-d92zbD5WX0YvqxVBvsJw5A61T2cQzxBUbpLCgjCiMLLLBsLJjAPJEuEH7Y6dGtQZgevd0Ka__62a0bP-QjOFiOqcErHFQf'
  },
  {
    id: '3',
    name: 'Microondas Digital Grill 23L Black',
    category: 'Cocina',
    price: 215000,
    stock: 45,
    sku: 'MIC-BGH-23L',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5YEiYDzIxq0SQkVoEzh42cqTJrSNnqpBQKgyY0bRqfj7VkuY_kzz1t23WMecGNE3HOPwAK5golsssfPLbSYs0_cUIQipdXyU6CatlHoPm3-a_Vp40lS1BEZY7gq8DpOKVZ3skfKjDFVSclm-pkfsNKbKKqlC1hFCa0aW1t6U7yVexqHrSQi3NC3wS-AG0IGIdNuEx6OTHlGO_-UZmGNuT5kLh3LrrfMh54XlU1WguZ_WWIzK8KaYrk4FpTjoleHINjeg94FOZ8UX0'
  },
  {
    id: '4',
    name: 'Cafetera Express Automática Magnifica S',
    category: 'Pequeños Electro',
    price: 315000,
    originalPrice: 450000,
    stock: 124,
    sku: 'CAF-DLG-MAG',
    discount: 30,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRGvjeIdpGxFvSpUDRl5KdUt6e1HrJEEJL9MErMORQbrimE6D3m54YUffIoBhhMpSMrCBICW-KKrtr_EpGGP3ehDV0NEVFIJwGX1FZ2K7bBVFgl5HkVUiJUcz5ly4iDRgNlAt9wurcusBxBc-pCo9EtT82ftN-fjbG6JcUwvHw1CMR0iZMObS3weUJxV62YxR1DB9u1taoZV799aAfcRs9ek8yT0KS9_0GVo54fW2Lu-fJNziLS5t2zUErlf7H3vAeB-aVI1uofH2d'
  },
  {
    id: '5',
    name: 'Smart TV OLED 55" 4K HDR Thin-Q AI',
    category: 'Tecnología',
    price: 799999,
    originalPrice: 999999,
    stock: 5,
    sku: 'TV-LG-55',
    discount: 20,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBD9TmqsXwasQg-c3Rsv8MvkK__id-auD6Q61v8bhoL_KvSWNlgQP5Y_8HAHHCKiF0ZEA7b-JPXLctHkiJbLFlqUHqSPeKyqwDWG_lv4AkgtrxfJWuOiium8wrScrQMwoJum7II32DS5qdXdBk484A8ZstBR3XCD1yvXg_-af4pcuqOjLKjO-i39l61pJBnK3XeO1j9wqEEgk7UYDI7MF8mhdg2xSsou_mpiSrlsyGWL-amKbekX8JqeoASKYJ8OIg3DUNLusHQ7gqe'
  }
];

export const RECENT_ORDERS: Order[] = [
  {
    id: '#KS-8932',
    customer: 'Juan Pérez',
    date: '24 Oct, 2023',
    total: 1540000,
    status: 'shipped',
    paymentMethod: 'Tarjeta Crédito'
  },
  {
    id: '#KS-8931',
    customer: 'María García',
    date: '24 Oct, 2023',
    total: 825050,
    status: 'delivered',
    paymentMethod: 'Mercado Pago'
  },
  {
    id: '#KS-8930',
    customer: 'Roberto Rojas',
    date: '23 Oct, 2023',
    total: 3290000,
    status: 'pending',
    paymentMethod: 'Efectivo'
  }
];
