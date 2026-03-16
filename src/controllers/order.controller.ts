import { Request, Response } from "express";
import { getAllOrders, getOrders, PlaceOrder, updateOrderStatus } from "../services/order.service";


export async function getOrderData(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const orders = await getAllOrders();
    res.status(200).json({ message: "Orders fetched successfully", data: orders });

  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ message: "Failed to fetch orders" });
  }
}


export async function placeOrderData(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { cart, orderRefId, empId,orderAmnt , walletId, capDeduction, walletDeduction } = req.body;
    const orderInfo = { orderRefId, empId,orderAmnt , walletId ,capDeduction, walletDeduction};
    console.log
    const order = await PlaceOrder(cart, orderInfo);
    res.status(200).json({ message: "Order placed successfully", data: order });
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({ message: "Failed to place order" });
  }
}
