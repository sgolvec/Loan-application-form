import React from 'react';
import Input from '../Input';
import Header from '../UI/Header';
import Label from '../UI/Label';
import Select from 'react-select';

const Stage3 = ({ setInput, loanInfo, isFoodBasket }) => {
  const options = [
    {
      label: 'Oil',
      options: [
        {
          value: 'Golden Penny(5L*4)',
          label: 'Golden Penny(5L*4)',
          rating: 'Test',
        },

        { value: 'Golden Penny(4L*6)', label: 'Golden Penny(4L*6)' },

        { value: 'Kings(51*4)', label: 'Kings(51*4)' },

        { value: 'Kings(25L)', label: 'Kings(25L)' },
      ],
    },

    {
      label: 'Semovita',
      options: [
        { value: 'Semovita(10kg)', label: 'Semovita(10kg)' },

        { value: 'Semovita(1kg*10)', label: 'Semovita(1kg*10)' },

        { value: 'Semovita(2kg*5)', label: 'Semovita(2kg*5)' },

        { value: 'Semovita(2.5kg*4)', label: 'Semovita(2.5kg*4)' },
      ],
    },

    {
      label: 'Semolina',
      options: [{ value: 'Semolina (10kg)', label: 'Semolina (10kg)' }],
    },

    {
      label: 'Indomie',
      options: [
        { value: 'Superpack Indomie', label: 'Superpack Indomie' },
        { value: 'Regular Indomie', label: 'Regular Indomie' },
        {
          value: 'Golden Penny Indomie SuperPack',
          label: 'Golden Penny Indomie SuperPack',
        },
      ],
    },

    {
      label: 'Sphaghetti',
      options: [
        {
          value: 'Golden Penny Sphaghetti(Pack *20)',
          label: 'Golden Penny Sphaghetti(Pack *20)',
        },
      ],
    },

    {
      label: 'Macaroni',
      options: [
        {
          value: 'Golden Penny Macaroni(Pack *20)',
        },

        { value: 'Crown(Pack *20)', label: 'Crown(Pack *20)' },
      ],
    },

    {
      label: 'Garri',
      options: [{ value: 'Garri(5kg)', label: 'Garri(5kg)' }],
    },

    {
      label: 'Rice',
      options: [
        {
          value: '50Kg Jubilee/Walima Rice',
          label: '50Kg Jubilee/Walima Rice',
        },

        {
          value: '25Kg Jubilee/Walima Rice',
          label: '25Kg Jubilee/Walima Rice',
        },

        {
          value: '10KG Jubilee/Walima Rice',
          label: '10Kg Jubilee/Walima Rice',
        },

        { value: '5KG Jubilee/Walima Rice', label: '5Kg Jubilee/Walima Rice' },
      ],
    },

    {
      label: 'Beverages',
      options: [
        { value: 'Milo Carton (450g*12)', label: 'Milo Carton (450g*12)' },

        {
          value: 'Peak Milk Full Cream(350g*12)',
          label: 'Peak Milk Full Cream(350g*12)',
        },

        { value: 'Milo Carton(20g*240)', label: 'Milo Carton(20g*240)' },
        {
          value: 'Peak Milk Full Cream(350g*12)',
          label: 'Peak Milk Full Cream(350g*12)',
        },

        {
          value: 'Peak Milk Full Cream(149*210)',
          label: 'Peak Milk Full Cream(149*210)',
        },
      ],
    },

    {
      label: 'Seasonings',
      options: [
        {
          value: 'Knor Cube(1 Carton * 16)',
          label: 'Knor Cube(1 Carton * 16)',
        },

        {
          value: 'Maggi Star Cubel 1 Carton* 20)',
          label: 'Maggi Star Cubel 1 Carton* 20)',
        },

        {
          value: 'Royco Cubel 1 Cartoon*20)',
          label: 'Royco Cubel 1 Cartoon*20)',
        },

        { value: 'Salt (1kg * 20)', label: 'Salt (1kg * 20)' },
      ],
    },

    {
      label: 'Sardines',
      options: [
        { value: 'Sardines 1 Carton * 50', label: 'Sardines 1 Carton * 50' },
      ],
    },

    {
      label: 'Goldenmorn Cereal',
      options: [
        {
          value: 'Goldenmorn 1 Carton (900g * 6)',
          label: 'Goldenmorn 1 Carton (900g * 6)',
        },

        {
          value: 'Goldenmorn 1 Carton (450g * 12)',
          label: 'Goldenmorn 1 Carton (450g * 12)',
        },

        {
          value: 'Goldenmorn 1 Carton (45g * 100)',
          label: 'Goldenmorn 1 Carton (45g * 100)',
        },
      ],
    },
  ];

  const customStyles = {
    input: (provided, state) => ({
      ...provided,
      padding: '0.4rem 0px 0.4rem 0px',
      width: '100%',
    }),

    control: (provided, state) => ({
      ...provided,
      border: '2px solid rgb(229, 231, 235)',
      borderRadius: '0.375rem',
      paddingLeft: '0.75rem',
      paddingRight: '0.75rem',
    }),

    container: (provided, state) => ({
      ...provided,
      height: '100%',
    }),

    indicatorSeparator: (provided, state) => ({
      ...provided,
      display: 'none',
    }),
  };

  return (
    <>
      <Header
        title={isFoodBasket ? 'Food Basket Information' : 'Loan Information'}
        description='Please provide additional information'
      />

      <div className='mt-8'>
        {!isFoodBasket && (
          <div className='mb-8'>
            <Label title='Loan Type' lFor='loantype' />

            <select
              className='w-full my-auto bg-white py-3 px-5 border-gray-200 rounded-md mr-2 focus:outline-none  focus:border-blue-500 border-2 placeholder-gray-400'
              id='loantype'
              name='loantype'
              onChange={(e) => setInput('loantype', e.target.value)}
              value={loanInfo.loantype}
              required
            >
              <option>Select Loan Type</option>

              <option value='Paylater Rent'>Paylater Rent</option>
              <option value='Paylater Transport Fare'>
                Paylater Transport Fare
              </option>
              <option value='Paylater School Fees'>Paylater School Fees</option>
              <option value='Paylater Transport Medical Fees'>
                Paylater Transport Medical Fees
              </option>
              <option value='Paylater Moni'>Paylater Moni</option>
            </select>
          </div>
        )}

        {/* tenor */}
        {isFoodBasket ? (
          <div className='mb-8'>
            <Label title='Installments' lFor='installments' />

            <select
              className='w-full my-auto bg-white py-3 px-5 border-gray-200 rounded-md mr-2 focus:outline-none  focus:border-blue-500 border-2 placeholder-gray-400'
              id='installments'
              name='installments'
              onChange={(e) => setInput('installments', e.target.value)}
              value={loanInfo.installments}
              required
            >
              <option>Select Installments</option>
              <option value='1 Installment'>1 Installment</option>
              <option value='2 Installments'>2 Installments</option>
              <option value='3 Installments'>3 Installments</option>
            </select>
          </div>
        ) : (
          <div className='mb-8'>
            <Label title='Tenor' lFor='tenor' />

            <select
              className='w-full my-auto bg-white py-3 px-5 border-gray-200 rounded-md mr-2 focus:outline-none  focus:border-blue-500 border-2 placeholder-gray-400'
              id='tenor'
              name='tenor'
              onChange={(e) => setInput('tenor', e.target.value)}
              value={loanInfo.tenor}
              required
            >
              <option>Select Tenor</option>

              <option value='3 Months'>3 Months</option>
              <option value='4 Months'>4 Months</option>
              <option value='5 Months'>5 Months</option>
              <option value='6 Months'>6 Months</option>
            </select>
          </div>
        )}

        {/* food items */}
        {isFoodBasket && (
          <div>
            <Label title='Food items' lFor='fooditems' />

            <Select
              options={options}
              isMulti
              styles={customStyles}
              onChange={(values) => {
                let allValues = [];
                values.forEach((element) => {
                  allValues.push(element.value);
                });

                setInput('fooditems', { ...allValues });
              }}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Stage3;
