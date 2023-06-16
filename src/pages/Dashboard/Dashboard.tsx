import { Link } from 'react-router-dom'
import SideNav from 'src/components/SideNav'
import path from 'src/constants/path'
import Pagination from '@mui/material/Pagination'
import ProductList from 'src/components/ProductList'
import StarOutlinedIcon from '@mui/icons-material/StarOutlined'

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
                  <div className='flex w-full flex-wrap items-center justify-between rounded-xl bg-white px-3 py-3 shadow-md md:justify-end'>
                    <div className='mr-2 flex items-end md:mr-auto'>
                      <span className='text-[14px] font-light text-black'>Review</span>
                      <div className='ml-2 flex gap-1'>
                        {Array(5)
                          .fill(0)
                          .map((_, index) => (
                            <StarOutlinedIcon
                              sx={{
                                fontSize: '18px',
                                color: '#77d9aa'
                              }}
                              key={index}
                            />
                          ))}
                      </div>
                    </div>
                    <Link
                      to={path.home}
                      className='mr-2 hidden items-center justify-center rounded-xl border border-text4/30 px-3 py-2 text-[14px] text-sm shadow-sm hover:bg-primary hover:text-white md:flex md:min-w-[90px]'
                    >
                      Popular
                    </Link>
                    <Link
                      to={path.home}
                      className='mr-2 hidden items-center justify-center rounded-xl border border-text4/30 px-3 py-2 text-[14px] text-sm shadow-sm hover:bg-primary hover:text-white md:flex md:min-w-[90px]'
                    >
                      Latest
                    </Link>
                    <Link
                      to={path.home}
                      className='hidden items-center justify-center rounded-xl border border-text4/30 px-3 py-2 text-[14px] text-sm shadow-sm hover:bg-primary hover:text-white md:flex md:min-w-[90px]'
                    >
                      Best Seller
                    </Link>
                    <select className='ml-0 flex w-[90px] items-center justify-center rounded-xl border border-text4/30 px-3 py-2 text-[14px] shadow-sm outline-none hover:bg-primary hover:text-white md:ml-2 md:min-w-[90px]'>
                      <option value='' selected>
                        Price
                      </option>
                      <option value=''>Lowest to highest</option>
                      <option value=''>Highest to lowest</option>
                    </select>
                  </div>
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
