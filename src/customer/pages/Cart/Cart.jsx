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
            <div>

            </div>
            </section>
            
        </main>
    </Fragment>
  )
}

export default Cart