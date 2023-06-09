import React from 'react';
import {RoutePermittedRole} from 'shared/constants/AppConst';

const Products = React.lazy(() => import('./Products'));
const ProductDetail = React.lazy(() => import('./ProductDetail'));
const Customers = React.lazy(() => import('./Customers'));
const Checkout = React.lazy(() => import('./Checkout'));
const Carts = React.lazy(() => import('./Carts'));
const Orders = React.lazy(() => import('./Orders'));
const Confirmation = React.lazy(() => import('./Confirmation'));
const Invoice1 = React.lazy(() => import('./Invoice1'));
const Invoice2 = React.lazy(() => import('./Invoice2'));

export const ecommerceConfig = [
  {
    permittedRole: RoutePermittedRole.User,
    path: '/ecommerce/invoice-1',
    element: <Invoice1 />,
  },

  {
    permittedRole: RoutePermittedRole.User,
    path: '/ecommerce/invoice-2',
    element: <Invoice2 />,
  },

  {
    permittedRole: RoutePermittedRole.User,
    path: '/ecommerce/products',
    element: <Products />,
  },

  {
    permittedRole: RoutePermittedRole.User,
    path: ['/ecommerce/product_detail/', '/ecommerce/product_detail/:id'],
    element: <ProductDetail />,
  },

  {
    permittedRole: RoutePermittedRole.User,
    path: '/ecommerce/customers',
    element: <Customers />,
  },

  {
    permittedRole: RoutePermittedRole.User,
    path: '/ecommerce/checkout',
    element: <Checkout />,
  },

  {
    permittedRole: RoutePermittedRole.User,
    path: '/ecommerce/cart',
    element: <Carts />,
  },

  {
    permittedRole: RoutePermittedRole.User,
    path: '/ecommerce/orders',
    element: <Orders />,
  },

  {
    permittedRole: RoutePermittedRole.User,
    path: '/ecommerce/confirmation',
    element: <Confirmation />,
  },
];
