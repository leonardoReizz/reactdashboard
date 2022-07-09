import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";

export function ReportsCharts(){
    const data = [
        
        {
            "name": "June",
            "pv": 2400,
            "amt": 2400
        },
        {
            "name": "July",
            "pv": 1398,
            "amt": 2210
        },
        {
            "name": "August",
            "pv": 9800,
            "amt": 2290
        },
        {
            "name": "September",
            "pv": 3908,
            "amt": 2000
        },
        {
            "name": "October",
            "pv": 4800,
            "amt": 2181
        },
        {
            "name": "November",
            "pv": 3800,
            "amt": 2500
        },
        {
            "name": "December",
            "pv": 4300,
            "amt": 2100
        },
        
      ]
    return (
        <>
            <AreaChart width={720} height={250} data={data} 
                margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <XAxis dataKey="name" fontSize={12}/>
              

                <Tooltip />
                    <Area type="monotone" dataKey="pv" stroke="#8884d8" fillOpacity={1} fill="url(#colorPv)" />
                </AreaChart>
        </>
    )
}