import Header from "../components/common/Header";
import { motion } from "framer-motion";
import StatCard from "../components/common/StatCard";

import { DollarSign, ShoppingCart, TrendingUp, CreditCard} from "lucide-react";
import SalesOverviewChart from "../components/sales/SalesOverviewChart";
import SalesByCategoryChart from "../components/sales/SalesByCategoryChart";
import DailySalesTrend from "../components/sales/DailySalesTrend";


const salesStats={
    totalrevenue: "$1,234,567",
    avgordervalue: "$78.90",
    conversionrate: "3.45%",
    salesgrowth: "12.3%"
}

const SalesPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Sales Dashboard" />

      <main className="max-w-7x1 mx-auto py-6 px-4 lg:px-8">
        {/* STATS */}
            <motion.div
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 1}}
            >
                <StatCard
                    name='Total Revenue'
                    icon={DollarSign}
                    value={salesStats.totalrevenue}
                    color='#6366F1'
                />
                <StatCard name='Avg. Order Value' icon={ShoppingCart} value={salesStats.avgordervalue} color='#10B981' />
                <StatCard
                    name='Conversion Rate'
                    icon={TrendingUp}
                    value={salesStats.conversionrate}
                    color='#F59E0B'
                />
                <StatCard name='Sales Growth' icon={CreditCard} value={salesStats.salesgrowth} color='#EF4444' />
            </motion.div>

            <SalesOverviewChart />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <SalesByCategoryChart />
                <DailySalesTrend />
            </div>
        </main>
    </div>
  )
}

export default SalesPage