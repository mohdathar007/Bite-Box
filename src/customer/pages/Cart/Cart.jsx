import React, { Fragment } from 'react'
import CartItem from './CartItem'
import { Divider } from '@mui/material'

const cartItems=[1,1,1,1]
const Cart = () => {
  return (
    <Fragment >
        <main className='lg:flex justify-between'>
            <section className='lg:w-[30%] space-y-6 min-h-screen pt-10'>
             <div className='space-y-6'>
             {cartItems.map((item)=><CartItem/>)}   

             </div>
            <Divider/>
            <div className='billDetails px-5 text-sm'>
              <p className='font-extralight py-5'>
                Bill Details
              </p>
              <div className='space-y-3'>
                <div className='flex justify-between text-gray-400'>
                  <p>Item Total</p>
                  <p>₹949</p>
                </div>
                <div className='flex justify-between text-gray-400'>
                  <p>Deliver Fee Total</p>
                  <p>₹21</p>
                </div>
                <div className='flex justify-between text-gray-400'>
                  <p>Plateform fee</p>
                  <p>₹9</p>
                </div>
                <div className='flex justify-between text-gray-400'>
                  <p>GST and Restaurant Charges</p>
                  <p>₹33</p>
                </div>
                <Divider/>
                <div className='flex justify-between text-gray-400'>
                  <p>Total Pay</p>
                  <p>₹1349</p>
                </div>
                
              </div>
            </div>
            </section>
            <Divider orientation='vertical' flexItem/>

            <section className='lg:w-[70%] px-5'>
            
            </section>
            
        </main>
    </Fragment>
  )
}

export default Cart