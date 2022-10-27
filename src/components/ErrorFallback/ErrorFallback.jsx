import { Button, Card, Result } from '@arco-design/web-react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

ErrorFallback.propTypes = {
  error: PropTypes.shape({
    message: PropTypes.any,
  }),
  resetErrorBoundary: PropTypes.func,
}

export function ErrorFallback({ error, resetErrorBoundary }) {
  const { origin } = window.location
  const BackToHomePage = () => (window.location = origin)

  return (
    <Center>
      <Box>
        <Card>
          <Result
            status="error"
            title="Something went wrong. Please try again. "
            subTitle={error.message}
            extra={[
              <Button
                key="again"
                style={{ margin: '0 16px' }}
                onClick={resetErrorBoundary}
              >
                Again
              </Button>,
              <Button
                key="back"
                type="primary"
                onClick={BackToHomePage}
              >
                Back
              </Button>,
            ]}
          ></Result>
        </Card>
      </Box>
    </Center>
  )
}

const Center = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  place-items: center;
`

const Box = styled.div`
  min-width: 40%;
`
