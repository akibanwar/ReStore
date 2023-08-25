import { useEffect, useState } from "react";
import agent from "../../app/api/agent";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { Order } from "../../app/models/orders";
import OrdersTable from "./OrdersTable";
import OrderDetails from "./OrderDetails";

export default function Orders() {
    const [orders, setOrders] = useState<Order[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [selectedOrderId, setselectedOrderId] = useState<number>(0);

    useEffect(() => {
        agent.Orders.list()
            .then(orders => setOrders(orders))
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }, [])

    if (loading)
        return <LoadingComponent message="Loading orders..." />

    if (selectedOrderId > 0) {
        return <OrderDetails
            order={orders?.find(o => o.id === selectedOrderId)!}
            setSelectedOrder={setselectedOrderId}
        />
    }

    return (
        <OrdersTable orders={orders}
            setSelectedOrder={setselectedOrderId}
        />
    )
}