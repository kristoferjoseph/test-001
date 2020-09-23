import { NextPage } from 'next';
import React from 'react'
import TermService from '../container/termService/termService'

const IndexPage: NextPage = () => {
  return <>
    <TermService />
  </>
}

export default IndexPage;