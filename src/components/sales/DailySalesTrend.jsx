import {motion} from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell} from "recharts";

const dailySalesData = [
	{ name: "Mon", sales: 1000 },
	{ name: "Tue", sales: 1200 },
	{ name: "Wed", sales: 900 },
	{ name: "Thu", sales: 1100 },
	{ name: "Fri", sales: 1300 },
	{ name: "Sat", sales: 1600 },
	{ name: "Sun", sales: 1400 },
];


const DailySalesTrend = () => {
  return (
    <motion.div
	className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
	initial={{opacity: 0, y: 20}}
	animate={{opacity: 1, y: 0}}
	transition={{delay: 0.4}}
	>
        <h2
		className="text-lg font-medium mb-4 text-gray-100"
		>Daily Sales Trend</h2>
        <div className="h-80">
            <ResponsiveContainer width={"100%"} height={"100%"}>
                <BarChart
                    data={dailySalesData}
                >
                <CartesianGrid strokeDasharray='3 3' stroke='#4B5563' />
                    <XAxis dataKey='name'/>
                    <YAxis stroke="#9ca3af" /> 
                    <Tooltip
                            contentStyle={{
                                backgroundColor: "rgba(31,41,55,0.8)",
                                borderColor: "#4B5563",
                            }}
                            itemStyle={{ color: "#E5E7EB" }}
                    />
                    <Legend />
                    <Bar
                    dataKey={"sales"} fill='#8884d8'
                    >
                        {dailySalesData.map((entry, index)=>(
                            <Cell key={`cell-${index}`} fill={"#10B981"} />

                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    </motion.div>
  )
}

export default DailySalesTrend