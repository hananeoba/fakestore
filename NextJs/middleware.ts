export { default } from 'next-auth/middleware';

export const config = { matcher: ['/dashboard', '/product/:id*/edit','/product/add', '/cart'] };
