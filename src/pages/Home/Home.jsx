import {
  Button,
  Card,
  Form,
  Input,
  PageHeader,
  Space,
} from '@arco-design/web-react'

export const Home = () => {
  return (
    <Space
      direction="vertical"
      style={{ width: '100%' }}
      size="medium"
    >
      <Card bordered={false}>
        <PageHeader
          title="Home"
          subTitle="subtitle"
          extra={
            <Button.Group>
              <Button>home</Button>
              <Button>home</Button>
            </Button.Group>
          }
        />
      </Card>
      <Card bordered={false}>
        <Form>
          <Space
            direction="vertical"
            style={{ width: '100%' }}
            size="medium"
          >
            <Form.Item noStyle>
              <Input />
            </Form.Item>
            <Form.Item noStyle>
              <Input />
            </Form.Item>
          </Space>
        </Form>
      </Card>
    </Space>
  )
}
