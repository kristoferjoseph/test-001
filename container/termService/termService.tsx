import React, { useState } from 'react'
import Footer from '../footer/footer'
import GetInvolved from '../getInvolved'
import privacyPolicyList from '../../utility/privacyPolicy.json'
import HeaderWrapper from '../../components/headerWrapper'
const TermService = () => {
  return (<>
    <HeaderWrapper>
      <div className='sm:m-0 md:m-10 md:mt-20'>
        <div className={`bg-white shadow-xs`}>
          <div className="flex sm:flex-wrap lg:flex-no-wrap">
            <div className="bg-black lg:w-23 sm:w-full sm:flex-none lg:flex-23 h-32 flex items-end self-start justify-center">
              <h4 className="text-2-8 text-white leading-6 uppercase">Terms of service</h4>
            </div>
            <div className="flex flex-col p-6 lg:pt-24">
              <h5 className="text-2xl font-extrabold uppercase" >{"Terms of service PlaceHolder"}</h5>
              {privacyPolicyList.map((p, i) =>
                <React.Fragment key={i}>
                  <p className={'text-gray-300 font-medium text-1-2 lg:w-3/4 sm:w-full'}>{p}</p>
                  <br />
                </React.Fragment>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className='sm:m-0 md:m-10'>
        <GetInvolved isVisible={true} />
      </div>
      <Footer />
    </HeaderWrapper>
  </>)
}

export default TermService
