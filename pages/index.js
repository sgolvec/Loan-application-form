import Head from 'next/head';
import Link from 'next/link';
// import Image from 'next/image';
import Logo from './../public/logo.png';

export default function Home() {
  return (
    <>
      <Head>
        <title>Loan Application</title>
      </Head>

      {/* <Navbar /> */}

      <main className='px-5 md:px-16 flex flex-col h-auto m-auto'>
        <div className='md:w-8/12 m-auto text-center flex justify-center items-center flex-col'>
          {/* <div className=' flex items-center justify-center '> */}
          <img src='logo.png' className='w-52 mb-10' alt='Paylater hub' />
          {/* </div> */}

          <div className='flex flex-col md:flex-row'>
            <Link href='/foodBasket'>
              <div className='w-full transition duration-100 md:w-56 md:mr-4 border mb-4 md:mb-0 rounded-md px-10 py-12 cursor-pointer flex-flex-col hover:bg-blue-500 hover:text-white'>
                <p className='text-2xl mb-2'>🧺</p>
                <p className='text-lg'>Food Basket</p>
              </div>
            </Link>

            <Link href='/loanApplication'>
              <div className='w-full transition duration-100 md:w-56  md:mr-4 border rounded-md px-10 py-12 cursor-pointer flex-flex-col hover:bg-blue-500 hover:text-white'>
                <p className='text-2xl mb-2'>💰</p>
                <p className='text-lg'>Loan Application</p>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
