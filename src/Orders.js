import React, { useState, useEffect } from 'react';
import { database } from "./FirebaseDeployment";
import './Orders.css'
import { useStateValue } from "./StateProvider";
import Order from './Order'

function Orders() {
  const [{ cart, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => { // Runs once to populate the Orders page, or not if there's no user
    if(user) {
        database
        .collection('users')
        .doc(user?.uid)
        .collection('orders')
        .orderBy('created', 'desc')
        .onSnapshot(snapshot => (
            setOrders(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        ))
    } else {
        setOrders([])
    }

  }, [user])

    return (
        <div className='Orders'>
            <h1>Your Orders</h1>

            <div className='AllOrders'>
                {orders?.map(order => (
                    <Order order={order} />
                ))}
            </div>
        </div>
    )
}

export default Orders
