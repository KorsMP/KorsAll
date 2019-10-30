import React, { useState, useEffect } from 'react'
import Chart from 'react-google-charts';
function ActivityStatus() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => { setIsLoaded(true) }, 2000);
  });

  return (
    <div style={{ padding: '0px' }} >
      {isLoaded ?
        <div
          id="style-2"
          className="border border-dark"
          style={{ display: 'inline-block', overflowX: 'scroll', overflowY: 'hidden', maxWidth: '400px', padding: '2px', borderWidth: '15px', borderRadius: '24px', borderCollapse: 'separate', borderSpacing: '20px' }}>
          <Chart
            width={1100}
            height={250}
            chartType="Calendar"
            loader={<div>Loading Chart</div>}
            data={[
              [{ type: 'date', id: 'Date' }, { type: 'number', id: 'Won/Loss' }],
              [new Date(2019, 1, 4), 0],
              [new Date(2019, 1, 5), 100],
              [new Date(2019, 1, 12), 100],
              [new Date(2019, 1, 13), 100],
              [new Date(2019, 1, 19), 100],
              [new Date(2019, 1, 23), 100],
              [new Date(2019, 1, 24), 100],
              [new Date(2019, 2, 10), 130],
            ]}
            options={{
              title: 'Activity Status',
              calendar: {
                cellSize: 18,
                cellColor: {
                  stroke: '#76a7fa',
                  strokeOpacity: 0.5,
                  strokeWidth: 1,
                },
              }
            }}
            rootProps={{ 'data-testid': '1' }}
          />
        </div>
        :
        <div className="spinner-border" style={{ width: '6rem', height: "6rem" }} role="status">
          <span className="sr-only">Loading...</span>
        </div>
      }
    </div>
  )
}

export default ActivityStatus
