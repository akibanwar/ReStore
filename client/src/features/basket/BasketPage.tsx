import { Button, Grid, Typography } from "@mui/material";
import BasketSummary from "./BasketSummary";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/store/configureStore";
import BasketTable from "./BasketTable";

export default function BasketPage() {
    const { basket } = useAppSelector(state => state.basket);
    const subtotal = basket?.items.reduce((sum, item) => sum + (item.price * item.quantity), 0) ?? 0;
    const deliveryFee = subtotal > 10000 ? 500 : 0;

    if (!basket)
        return <Typography variant="h3">Your basket is empty.</Typography>

    return (
        <>
            <BasketTable items={basket.items} />
            <Grid container>
                <Grid item xs={6} />
                <Grid item xs={6}>
                    <BasketSummary subTotal={subtotal} deliveryFee={deliveryFee} />
                    <Button
                        component={Link}
                        to='/checkout'
                        variant="contained"
                        size="large"
                        fullWidth
                    >
                        Checkout
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}