import React from 'react';
import {Box, Grid} from '@mui/material';
import AppCard from '@crema/core/AppCard';
import IntlMessages from '@crema/utility/IntlMessages';
import {Fonts} from 'shared/constants/AppEnums';
import OrderSummary from '../OrderSummary';
import DeliveryAddress from './DeliveryAddress';
import PaymentInfo from './PaymentInfo';

import AppAnimate from '@crema/core/AppAnimate';
import AppGridContainer from '@crema/core/AppGridContainer';
import {useGetDataApi} from '@crema/utility/APIHooks';

const Checkout = () => {
  const [{apiData: cartItems}] = useGetDataApi('/api/cart/get', []);

  return (
    <AppAnimate animation='transition.slideUpIn' delay={200}>
      <Box>
        <Box
          sx={{
            component: 'h2',
            color: 'text.primary',
            fontWeight: Fonts.BOLD,
            mb: 6,
            fontSize: 16,
          }}
        >
          <IntlMessages id='sidebar.ecommerce.checkout' />
        </Box>
        <AppGridContainer>
          <Grid item xs={12} md={8}>
            <AppCard
              title={
                <Box sx={{fontSize: 16, fontWeight: Fonts.BOLD}}>
                  Delivery Address
                </Box>
              }
            >
              <DeliveryAddress />
            </AppCard>
          </Grid>
          <Grid item xs={12} md={4}>
            <OrderSummary cartItems={cartItems} />
            <PaymentInfo />
          </Grid>
        </AppGridContainer>
      </Box>
    </AppAnimate>
  );
};

export default Checkout;
