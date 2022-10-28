import { useLocale } from '@/hooks/useLocale'
import {
  Button,
  Card,
  Drawer,
  Form,
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
  const locale = useLocale()
  // Drawer
  const [visible, setVisible] = useState(false)
  const [selectedRowKeys, setSelectedRowKeys] = useState([])

  return (
    <>
      <div style={{ padding: '24px' }}>
        <Drawer
          width={420}
          title={<span>Basic Information </span>}
          visible={visible}
          onOk={() => {
            setVisible(false)
          }}
          onCancel={() => {
            setVisible(false)
          }}
        >
          <div>Here is an example text.</div>

          <div>Here is an example text.</div>
        </Drawer>
        <Space
          direction="vertical"
          style={{ width: '100%' }}
          size="medium"
        >
          <Card bordered={false}>
            <PageHeader
              title="Influencer"
              subTitle="This is a description"
              extra={<Button type="primary">{locale.test}</Button>}
            />
          </Card>

          <Card bordered={false}>
            <Tabs
              defaultActiveTab="1"
              size="large"
              type="rounded"
            >
              <Tabs.TabPane
                key="1"
                title="All"
              >
                <Space
                  direction="vertical"
                  size="medium"
                  style={{ width: '100%' }}
                >
                  <Form
                    labelAlign="left"
                    layout="vertical"
                  >
                    <Space
                      direction="vertical"
                      style={{ width: '100%' }}
                      size="medium"
                    >
                      <Form.Item noStyle>
                        <Grid.Row gutter={8}>
                          <Grid.Col span={4}>
                            <Select
                              size="large"
                              defaultValue="Beijing"
                              showSearch
                              allowClear
                            >
                              <Select.Option value="Beijing">
                                Beijing
                              </Select.Option>
                              <Select.Option value="Tianjin">
                                Tianjin
                              </Select.Option>
                              <Select.Option value="Shanghai">
                                Shanghai
                              </Select.Option>
                            </Select>
                          </Grid.Col>
                          <Grid.Col span={16}>
                            <Input.Search
                              size="large"
                              placeholder="Search"
                              allowClear
                            />
                          </Grid.Col>
                          <Grid.Col span={4}>
                            <Button
                              size="large"
                              type="primary"
                              style={{ width: '100%' }}
                              onClick={() => {
                                setVisible(true)
                              }}
                            >
                              More filters (3)
                            </Button>
                          </Grid.Col>
                        </Grid.Row>
                      </Form.Item>
                      <Form.Item noStyle>
                        <Grid.Row gutter={8}>
                          <Grid.Col span={8}>
                            <Form.Item
                              label="Platform"
                              style={{ textAlign: 'left' }}
                            >
                              <Select
                                size="small"
                                style={{ flex: 1 }}
                              ></Select>
                            </Form.Item>
                          </Grid.Col>
                          <Grid.Col span={8}>
                            <Form.Item label="Language">
                              <Select size="small"></Select>
                            </Form.Item>
                          </Grid.Col>
                          <Grid.Col span={8}>
                            <Form.Item label="Tier">
                              <Select size="small"></Select>
                            </Form.Item>
                          </Grid.Col>
                        </Grid.Row>
                      </Form.Item>
                    </Space>
                  </Form>

                  <Space
                    direction="vertical"
                    size="medium"
                    style={{ width: '100%' }}
                  >
                    <Space>
                      <Button type="primary">按钮</Button>
                      <Button type="secondary">按钮</Button>
                      <Button type="outline">按钮</Button>
                      <Button type="dashed">按钮</Button>
                    </Space>

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
                </Space>
              </Tabs.TabPane>
              <Tabs.TabPane
                key="2"
                title="Youtube"
              ></Tabs.TabPane>
              <Tabs.TabPane
                key="3"
                title="Instagram"
              ></Tabs.TabPane>
              <Tabs.TabPane
                key="4"
                title="TikTok"
              ></Tabs.TabPane>
              <Tabs.TabPane
                key="5"
                title="Twitter"
              ></Tabs.TabPane>
            </Tabs>
            <div style={{ height: 500 }} />
          </Card>
        </Space>
      </div>
    </>
  )
}
