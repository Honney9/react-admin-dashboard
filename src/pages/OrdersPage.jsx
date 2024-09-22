import {motion} from "framer-motion";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";

import { ShoppingBag, Clock, CircleCheckBig, DollarSign} from "lucide-react";
import DailyOrders from "../components/orders/DailyOrders";
import OrderStatusDistribution from "../components/orders/OrderStatusDistribution";
import OrderListTable from "../components/orders/OrderListTable";


const OrdersPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Daily Orders" />

        <main className="max-w-7x1 mx-auto py-6 px-4 lg:px-8">
            <motion.div
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 1}}
            >
                <StatCard name="Total Orders" icon={ShoppingBag} value='$12,345' color="#6366F1" />
                <StatCard name="Pending Orders" icon={Clock} value='1,234' color="#F59E0B" />
                <StatCard name="Completed Orders" icon={CircleCheckBig} value='567' color="#10B981" />
                <StatCard name="Total Revenue" icon={DollarSign} value='12.5%' color="#EF4444" />
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <DailyOrders />
                <OrderStatusDistribution />
                <OrderListTable /> 
            </div>

        </main>
    </div>
  )
}

export default OrdersPage