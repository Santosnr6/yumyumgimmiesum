import { createBrowserRouter } from "react-router-dom";
import { MenuPage } from "@yumyumApp/menuPage";
import { CartPage } from "@yumyumApp/cartPage";
import { OrderPage } from "@yumyumApp/orderPage";
import { ReceiptPage } from "@yumyumApp/receiptPage"

export const router = createBrowserRouter([
    { path : "/", element: <MenuPage /> },
    { path : "/menu", element : <MenuPage /> },
    { path : "/cart", element : <CartPage /> },
    { path : "/order", element : <OrderPage /> },
    { path : "/receipt", element : <ReceiptPage /> },
]);