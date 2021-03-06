import React from 'react'
import Footer from '../footer/footer'
import HeaderWrapper from '../../components/headerWrapper'
import GetInvolved from '../getInvolved'
import CodeOfConductList from '../../utility/codeOfConduct.json'

const CodeOfConduct = () => <>
  <HeaderWrapper>
  <div className='sm:m-0 md:m-10 md:mt-20'>
    <div className={`bg-white shadow-xs`}>
      <div className="flex sm:flex-wrap lg:flex-no-wrap">
        <div className="bg-black lg:w-23 sm:w-full sm:flex-none lg:flex-23 h-32 flex items-end self-start justify-center">
          <h4 className="text-5xl text-white leading-7 uppercase">Code Of Conduct</h4>
        </div>
        <div className="flex flex-col p-6 lg:pt-20">
          <h5 className="text-2xl font-extrabold uppercase lg:w-3/4" >{"We take conduct at the Modern web summit very seriously. please take the time to read it!"}</h5>
          {CodeOfConductList.map((p,i) =>
            <React.Fragment key={i}>
              {p.point && <p className={'text-gray-300 font-extrabold text-1-2 lg:w-3/4'}>{p.point}</p>}
              {p.dot && <p className={'text-gray-300 text-1-2 lg:w-3/4'}>•{p.dot}</p>}
              {p.text && <p className={'text-gray-300 font-medium text-1-2 lg:w-3/4'}>{p.text}</p>}
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
</>

export default CodeOfConduct
