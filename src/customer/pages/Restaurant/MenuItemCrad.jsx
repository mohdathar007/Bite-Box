import { Button, Card } from '@mui/material'
import React from 'react'

const MenuItemCrad = ({item}) => {
    const handleAddItemToCart=()=>{
        console.log("handle add item to card")
    }
  return (
    <Card className='p-5 lg:flex items-center justify-between box'>
        <div className='lg:flex items-center lg:space-x-5'>
            <img className='w-[7rem] h-[7rem] object-cover' src="https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <div className='space-y-1 lg:space-y-5 lg:max-w-2xl'>
                <p className='font-semibold text-xl'>{`Dosa`}</p>
                <p>₹{449}</p>
                <p className='text-gray-400'>{`Rice, Sambar, Papad`}</p>
            </div>
        </div>
        <div>
            <Button onClick={handleAddItemToCart}>Add To Cart</Button>
        </div>
    </Card>
  )
}

export default MenuItemCrad