import { Link } from 'react-router-dom'
import SideNav from 'src/components/SideNav'
import path from 'src/constants/path'
import Pagination from '@mui/material/Pagination'
import ProductList from 'src/components/ProductList'
import SortingFilter from './components/SortingFilter'

export default function Dashboard() {
  return (
    <div className='bg-whiteSoft py-6'>
      <div className='container'>
        <div className='grid grid-cols-12 md:gap-10'>
          <div className='hidden md:col-span-1 md:block'>
            <SideNav />
          </div>
          <div className='col-span-12 md:col-span-11'>
            <div className='md:mx-10 md:my-7'>
              <div className='flex flex-col'>
                <div className='mb-4 flex items-center justify-start text-lg md:text-xl'>New arrived</div>
                <div className='flex w-full justify-center'>
                  <img
                    className='h-[120px] w-full rounded-[15px] object-cover md:h-[200px] md:rounded-[25px]'
                    src='https://images.unsplash.com/photo-1686574086026-9f02b82f4765?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80'
                    alt=''
                  />
                </div>
                <div className='mt-5 w-full flex-col'>
                  <SortingFilter />
                  <ProductList />
                  <div className='mt-5 flex items-center justify-center'>
                    <Pagination count={10} variant='outlined' color='primary' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
