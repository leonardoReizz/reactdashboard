
import { Line, LineChart, ResponsiveContainer } from "recharts";
import styles from "./styles.module.sass";


export function Cards(){
    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 5600,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 4800,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 13000,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 12000,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 20000,
          amt: 2100,
        },
      ]
    return(
        <>
            <div className={styles.card}>
                <div>
                    <h4>Total Revenue</h4>
                    <div className={styles.cardContent}>
                        <div>
                            <h5>1.3M</h5>
                            <span>40.8%</span>
                        </div>
                        <div className={styles.charts}>
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart width={100} height={100} data={data}>
                                    <Line type="monotone" dataKey="pv" stroke="#85d884" strokeWidth={2} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}