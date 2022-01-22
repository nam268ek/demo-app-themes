import React, { useCallback, useEffect, useState } from 'react';
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 35) * cos;
  const my = cy + (outerRadius + 35) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 7;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`$${value}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 0} y={ey} dy={20} textAnchor={textAnchor} fill="#999">
        {`(${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

Chart.propTypes = {
  listItem: PropTypes.array,
};

Chart.defaultProps = {
  listItem: [],
};

function Chart({ listItem }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [data, setData] = useState([]);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  useEffect(() => {
    const handleData = () => {
      const data = listItem?.map((item) => {
        return {
          name: item.themeName,
          value: item.total,
        };
      });
      setData(data);
    };
    handleData();
  }, [listItem]);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={100} height={100}>
        <Pie
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          data={data}
          cx={165}
          cy={100}
          innerRadius={40}
          outerRadius={55}
          // fill="#8884d8"
          fill="#2a6cf0"
          dataKey="value"
          onMouseEnter={onPieEnter}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default Chart;
