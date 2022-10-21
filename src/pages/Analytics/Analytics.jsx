import {
  Card,
  Divider,
  Grid,
  PageHeader,
  Statistic,
} from '@arco-design/web-react'
import { IconArrowFall, IconArrowRise } from '@arco-design/web-react/icon'
import { Chart, Legend, Line, Point, Tooltip } from 'bizcharts'

// 数据源
const data = [
  {
    month: 'Jan',
    city: 'Tokyo',
    temperature: 7,
  },
  {
    month: 'Jan',
    city: 'London',
    temperature: 3.9,
  },
  {
    month: 'Feb',
    city: 'Tokyo',
    temperature: 6.9,
  },
  {
    month: 'Feb',
    city: 'London',
    temperature: 4.2,
  },
  {
    month: 'Mar',
    city: 'Tokyo',
    temperature: 9.5,
  },
  {
    month: 'Mar',
    city: 'London',
    temperature: 5.7,
  },
  {
    month: 'Apr',
    city: 'Tokyo',
    temperature: 14.5,
  },
  {
    month: 'Apr',
    city: 'London',
    temperature: 8.5,
  },
  {
    month: 'May',
    city: 'Tokyo',
    temperature: 18.4,
  },
  {
    month: 'May',
    city: 'London',
    temperature: 11.9,
  },
  {
    month: 'Jun',
    city: 'Tokyo',
    temperature: 21.5,
  },
  {
    month: 'Jun',
    city: 'London',
    temperature: 15.2,
  },
  {
    month: 'Jul',
    city: 'Tokyo',
    temperature: 25.2,
  },
  {
    month: 'Jul',
    city: 'London',
    temperature: 17,
  },
  {
    month: 'Aug',
    city: 'Tokyo',
    temperature: 26.5,
  },
  {
    month: 'Aug',
    city: 'London',
    temperature: 16.6,
  },
  {
    month: 'Sep',
    city: 'Tokyo',
    temperature: 23.3,
  },
  {
    month: 'Sep',
    city: 'London',
    temperature: 14.2,
  },
  {
    month: 'Oct',
    city: 'Tokyo',
    temperature: 18.3,
  },
  {
    month: 'Oct',
    city: 'London',
    temperature: 10.3,
  },
  {
    month: 'Nov',
    city: 'Tokyo',
    temperature: 13.9,
  },
  {
    month: 'Nov',
    city: 'London',
    temperature: 6.6,
  },
  {
    month: 'Dec',
    city: 'Tokyo',
    temperature: 9.6,
  },
  {
    month: 'Dec',
    city: 'London',
    temperature: 4.8,
  },
]

const scale = {
  temperature: { min: 0 },
  city: {
    formatter: (v) => {
      return {
        London: '伦敦',
        Tokyo: '东京',
      }[v]
    },
  },
}

export const Analytics = () => {
  return (
    <div>
      <PageHeader
        style={{ background: 'var(--color-bg-2)' }}
        title="Analytics Page"
        subTitle="This is a description"
        // extra // 展示额外内容	ReactNode
      />
      <Card
        // style={{ width: 360 }}
        // title="标题: 东京比伦敦热"
        bordered={false}
        // extra // 展示额外内容	ReactNode
      >
        <Grid.Row>
          <Grid.Col
            span={7}
            style={{ textAlign: 'center' }}
          >
            <Statistic
              title="New Users"
              value={192393}
              suffix={<IconArrowRise style={{ color: '#ee4d38' }} />}
              style={{ marginRight: 60, marginBottom: 20 }}
            />
          </Grid.Col>
          <Divider
            type="vertical"
            style={{ height: 70 }}
          />
          <Grid.Col
            span={7}
            style={{ textAlign: 'center' }}
          >
            <Statistic
              title="Active Users"
              value={934230}
              suffix={<IconArrowFall style={{ color: '#0fbf60' }} />}
              style={{ marginRight: 60, marginBottom: 20 }}
            />
          </Grid.Col>
          <Divider
            type="vertical"
            style={{ height: 70 }}
          />
          <Grid.Col
            span={7}
            style={{ textAlign: 'center' }}
          >
            <Statistic
              title="User Growth Rate"
              value={50.32}
              precision={2}
              prefix={<IconArrowRise style={{ color: '#ee4d38' }} />}
              suffix="%"
              styleValue={{ color: '#ee4d38' }}
              style={{ marginRight: 60, marginBottom: 20 }}
            />
          </Grid.Col>
        </Grid.Row>
        <Divider />
        <Chart
          scale={scale}
          padding={[30, 20, 60, 40]}
          autoFit
          height={320}
          data={data}
          interactions={['element-active']}
        >
          <Point
            position="month*temperature"
            color="city"
            shape="circle"
          />
          <Line
            shape="smooth"
            position="month*temperature"
            color="city"
            label="temperature"
          />
          <Tooltip
            shared
            showCrosshairs
            region={null}
            g2-tooltip-list-item={{ display: 'flex' }}
          />
          <Legend
            background={{
              padding: [5, 100, 5, 36],
              style: {
                fill: '#eaeaea',
                stroke: '#fff',
              },
            }}
          />
        </Chart>
      </Card>
    </div>
  )
}
