import {
  Button,
  Card,
  Divider,
  Grid,
  Input,
  PageHeader,
  Select,
  Space,
  Table,
  Tabs,
} from '@arco-design/web-react'
import { useState } from 'react'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Salary',
    dataIndex: 'salary',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
]
const data = [
  {
    id: '1',
    name: 'Jane Doe',
    salary: 23000,
    address: '32 Park Road, London',
    email: 'jane.doe@example.com',
  },
  {
    id: '2',
    name: 'Alisa Ross',
    salary: 25000,
    address: '35 Park Road, London',
    email: 'alisa.ross@example.com',
  },
  {
    id: '3',
    name: 'Kevin Sandra',
    salary: 22000,
    address: '31 Park Road, London',
    email: 'kevin.sandra@example.com',
  },
  {
    id: '4',
    name: 'Ed Hellen',
    salary: 17000,
    address: '42 Park Road, London',
    email: 'ed.hellen@example.com',
  },
  {
    id: '5',
    name: 'William Smith',
    salary: 27000,
    address: '62 Park Road, London',
    email: 'william.smith@example.com',
  },
]

export const Influencer = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([])

  return (
    <div style={{ background: 'var(--color-bg-2)' }}>
      <PageHeader
        title="Influencer"
        subTitle="This is a description"
      ></PageHeader>

      <Card bordered={false}>
        <Tabs defaultActiveTab="1" size="large" type="rounded">
          <Tabs.TabPane key="1" title="All">
            <Space direction="vertical" style={{ width: '100%' }}>
              <Input.Group compact style={{ display: 'flex' }}>
                <Select
                  size="large"
                  defaultValue="Beijing"
                  showSearch
                  allowClear
                  style={{ width: '15%' }}
                >
                  <Select.Option value="Beijing">Beijing</Select.Option>
                  <Select.Option value="Tianjin">Tianjin</Select.Option>
                  <Select.Option value="Shanghai">Shanghai</Select.Option>
                </Select>
                <Input.Search
                  size="large"
                  style={{ width: '85%' }}
                  placeholder="Search"
                  allowClear
                />
                <Button size="large" type="primary">
                  More filters
                </Button>
              </Input.Group>

              <Grid.Row>
                <Grid.Col span={7}>
                  Platform
                  <Select size="small" style={{ width: '100%' }}></Select>
                </Grid.Col>
                <Divider type="vertical" style={{ height: '100%' }} />
                <Grid.Col span={7}>
                  Language <Select size="small"></Select>
                </Grid.Col>
                <Divider type="vertical" style={{ height: '100%' }} />
                <Grid.Col span={7}>
                  Tier <Select size="small"></Select>
                </Grid.Col>
              </Grid.Row>

              <Divider />
              <Table
                rowKey="id"
                columns={columns}
                data={data}
                rowSelection={{
                  selectedRowKeys,
                  onChange: (selectedRowKeys, selectedRows) => {
                    // console.log('onChange:', selectedRowKeys, selectedRows)
                    setSelectedRowKeys(selectedRowKeys)
                  },
                  onSelect: (selected, record, selectedRows) => {
                    // console.log('onSelect:', selected, record, selectedRows)
                  },
                }}
              />
            </Space>
          </Tabs.TabPane>
          <Tabs.TabPane key="2" title="Youtube"></Tabs.TabPane>
          <Tabs.TabPane key="3" title="Instagram"></Tabs.TabPane>
          <Tabs.TabPane key="4" title="TikTok"></Tabs.TabPane>
          <Tabs.TabPane key="5" title="Twitter"></Tabs.TabPane>
        </Tabs>
      </Card>
    </div>
  )
}
