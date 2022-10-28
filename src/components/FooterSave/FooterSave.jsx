import { Button, Space } from '@arco-design/web-react'
import styled from 'styled-components'

export const FooterSave = () => {
  return (
    <>
      <Holder />
      <FixHolder>
        <Space direction="horizontal">
          <Button size="large">cancel</Button>
          <Button
            size="large"
            type="primary"
          >
            save
          </Button>
        </Space>
      </FixHolder>
    </>
  )
}

const Holder = styled.div`
  height: 64px;
`

const FixHolder = styled(Holder)`
  position: fixed;
  width: 100%;
  bottom: 0;
  background-color: var(--color-bg-3);
  display: flex;
  padding-left: 24px;
`
