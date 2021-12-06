import Head from 'next/head';
import { useState } from 'react';
import Navbar from '../Components/Navbar';
import Stage1 from '../Components/Stages/Stage1';
import Stage2 from '../Components/Stages/Stage2';
import Stage3 from '../Components/Stages/Stage3';
import Button from '../Components/UI/Button';
import Link from 'next/link';

export default function LoanApplication() {
  const [stage1, setStage1] = useState(true);
  const [stage2, setStage2] = useState(false);
  const [stage3, setStage3] = useState(false);

  const [basicInfo, setBasicInfo] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phonenumber: '',
    dateofbirth: '',
  });

  const [creditInfo, setCreditInfo] = useState({
    bvn: '',
    monthlyincome: '',
    salaryaccountnumber: '',
    bankname: '',
    payday: '',
    officeaddress: '',
  });

  const [loanInfo, setLoanInfo] = useState({
    loantype: '',
    loanamount: '',
    tenor: '',
  });

  const [buttonState, setButtonState] = useState('');
  const [status, setStatus] = useState('idle');

  const basicInfoHandler = (label, value) => {
    setBasicInfo({
      ...basicInfo,
      [label]: value,
    });
  };

  const creditInfoHandler = (label, value) => {
    setCreditInfo({
      ...creditInfo,
      [label]: value,
    });
  };

  const loanInfoHandler = (label, value) => {
    setLoanInfo({
      ...loanInfo,
      [label]: value,
    });
  };

  const moveToStageOne = () => {
    setStage1(true);
    setStage2(false);
    setStage3(false);
  };

  const moveToStageTwo = () => {
    setStage1(false);
    setStage2(true);
    setStage3(false);
  };

  const moveToStageThree = () => {
    setStage1(false);
    setStage2(false);
    setStage3(true);
  };

  const handleNext = () => {
    if (stage1) {
      moveToStageTwo();
    }

    if (stage2) {
      moveToStageThree();
    }
  };

  const handlePrev = () => {
    if (stage3) {
      moveToStageTwo();
    }

    if (stage2) {
      moveToStageOne();
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (buttonState === 'next') {
      handleNext();
    }

    if (buttonState === 'prev') {
      handlePrev();
    }

    if (buttonState === 'submit') {
      setStatus('loading');

      try {
        await fetch(`https://formsubmit.co/ajax/applications@paylaterhub.ng`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            ...basicInfo,
            ...creditInfo,
            ...loanInfo,
            _subject: `Loan Application from ${basicInfo.firstname} ${basicInfo.lastname} (${basicInfo.email})`,
          }),
        });

        setStatus('success');
      } catch (error) {
        setStatus('error');

        return null;
      }
    }
  };

  return (
    <>
      <Head>
        <title>Loan Application</title>
      </Head>

      <Navbar />

      <main className='px-5 md:px-16 flex flex-col mt-12 mb-16'>
        <div className='md:w-6/12 m-auto'>
          {status !== 'success' ? (
            <form onSubmit={onSubmit}>
              {stage1 && (
                <Stage1 setInput={basicInfoHandler} basicInfo={basicInfo} />
              )}
              {stage2 && (
                <Stage2 setInput={creditInfoHandler} creditInfo={creditInfo} />
              )}
              {stage3 && (
                <Stage3 setInput={loanInfoHandler} loanInfo={loanInfo} />
              )}

              <div className='flex mt-8'>
                <div>
                  <Button
                    title='Previous'
                    type='submit'
                    variant='outline'
                    isDisabled={stage1}
                    onClick={() => setButtonState('prev')}
                  />
                </div>

                <div className='ml-auto'>
                  <Button
                    title={stage3 ? 'Submit' : 'Next'}
                    type='submit'
                    isLoading={status === 'loading'}
                    onClick={() => {
                      if (stage3) {
                        setButtonState('submit');
                      } else {
                        setButtonState('next');
                      }
                    }}
                  />
                </div>
              </div>
            </form>
          ) : (
            <div className='text-center mt-20'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-16 w-16 mx-auto mb-3 text-green-800'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>

              <h3 className='text-gray-800 text-2xl font-bold'>
                Loan Application Successful
              </h3>
              <p>Your loan application has been sent successfully</p>

              <Link href='/'>
                <p className='mt-6 font-medium text-blue-500 hover:underline cursor-pointer my-auto'>
                  Back to Home
                </p>
              </Link>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
