import styled from '@emotion/styled'

const SliderContent = styled.div`
  transform: translateX(-${props => props.translate}px);
  transition: transform ease ${props => props.transition}s;
  width: ${props => props.width}px;
  display: flex;
`
export default SliderContent