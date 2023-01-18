import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function VerySimpleBarGraph({ grantsList }) {
  const [currentWindowHeight, setCurrentWindowHeight] = useState(window.innerHeight);
  const [currentWindowWidth, setCurrentWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setCurrentWindowHeight(window.innerHeight);
      setCurrentWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <div style={{ width: currentWindowWidth * 0.9, height: currentWindowHeight * 0.9 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={grantsList}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="round" />
          <YAxis />
          <Tooltip formatter={(value) => `$${new Intl.NumberFormat('en').format(value)}`} />
          <Legend />
          <Bar dataKey="amount" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default VerySimpleBarGraph
