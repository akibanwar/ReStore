import { Grid, Typography } from '@mui/material';
import BasketSummary from '../basket/BasketSummary';
import BasketTable from '../basket/BasketTable';
import { useAppSelector } from '../../app/store/configureStore';

export default function Review() {
  const { basket } = useAppSelector(state => state.basket);
  const subtotal = basket?.items.reduce((sum, item) => sum + (item.price * item.quantity), 0) ?? 0;
  const deliveryFee = subtotal > 10000 ? 0 : 500;

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>

      {basket &&
        <BasketTable items={basket.items} isBasket={false} />
      }
      <Grid container>
        <Grid item xs={6} />
        <Grid item xs={6}>
          <BasketSummary subTotal={subtotal} deliveryFee={deliveryFee} />
        </Grid>
      </Grid>
    </>
  );
}
