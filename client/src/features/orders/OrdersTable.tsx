import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button } from "@mui/material";
import { currencyFormat } from "../../app/util/util";
import { Order } from "../../app/models/orders";

interface Props {
    orders: Order[] | null;
    setSelectedOrder: (id: number) => void;
}

export default function OrdersTable({ orders, setSelectedOrder }: Props) {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Order Number</TableCell>
                        <TableCell align="right">Total</TableCell>
                        <TableCell align="right">Order Date</TableCell>
                        <TableCell align="right">Order Status</TableCell>
                        <TableCell align="right"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {orders?.map((order) => (
                        <TableRow
                            key={order.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {order.id}
                            </TableCell>
                            <TableCell align="right">{currencyFormat(order.total)}</TableCell>
                            <TableCell align="right">{order.orderDate.split('T')[0]}</TableCell>
                            <TableCell align="right">{order.orderStatus}</TableCell>
                            <TableCell align="right">
                                <Button onClick={() => setSelectedOrder(order.id)}>View</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}