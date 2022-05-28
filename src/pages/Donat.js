import React from 'react'
import styledComponents from 'styled-components'
import Donut from 'react-donut';



function Donat() {
    return (
        <Div>
            <Donut
        chartData={[
          { name: 'Black', data: 30 },
          { name: 'Aven', data: 50 },
          { name: 'Ant', data: 20 },
        ]}
        chartWidth={300}
        chartHeight={250}
        title="Donut"
        chartThemeConfig={{
          series: {
            colors: ['#ffe0bd', '#670303', '#6cbfce'],
          },
        }}
      />
        </Div>
    )
}

export default Donat

const Div = styledComponents.div`
color:white;
`
