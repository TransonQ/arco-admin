import { Result } from '@arco-design/web-react'

export const NotFound = () => {
  return (
    <div style={{ height: '100%' }}>
      <Result
        status="404"
        subTitle="404 Page Not Found"
      ></Result>
    </div>
  )
}
