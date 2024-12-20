import React from 'react'
import styled from 'styled-components'

const LoadingWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  bottom: 0;
  right: 0;
  top: 0;
  background-color: rgb(var(--background));
  font-size: 48px;
`

export default function Loading() {
  return (
    <LoadingWrapper>Loading...</LoadingWrapper>
  )
}
