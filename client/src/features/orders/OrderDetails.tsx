import { Typography, Grid, Button, Box } from "@mui/material";
import { Order } from "../../app/models/orders";
import BasketSummary from "../basket/BasketSummary";
import BasketTable from "../basket/BasketTable";
import { BasketItem } from "../../app/models/basket";

interface Props {
    order: Order;
    setSelectedOrder: (id: number) => void;
}

export default function OrderDetails({ order, setSelectedOrder }: Props) {
    return (
        <>
            <Box display='flex' justifyContent='space-between'>
                <Typography variant="h6" gutterBottom sx={{ p: 2 }}>
                    Order# {order.id} - {order.orderStatus}
                </Typography>
                <Button
                    variant="contained"
                    onClick={() => setSelectedOrder(0)}
                    sx={{ m: 2 }}>
                    Back to Orders
                </Button>
            </Box>

            <BasketTable items={order.orderItems as BasketItem[]} isBasket={false} />
            <Grid container>
                <Grid item xs={6} />
                <Grid item xs={6}>
                    <BasketSummary subTotal={order.subTotal} deliveryFee={order.deliveryFee} />
                </Grid>
            </Grid>
        </>
    )
}