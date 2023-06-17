import Avatar from '@mui/material/Avatar'
import SearchIcon from '@mui/icons-material/Search'
import LanguageIcon from '@mui/icons-material/Language'
import { Link } from 'react-router-dom'
import path from 'src/constants/path'
import Popover from '../Popover'
import { Fragment } from 'react'

export default function Header() {
  return (
    <div className='overflow-hidden bg-whiteSoft pb-2 pt-2'>
      <div className='container'>
        <div className='mt-2 grid grid-cols-12 items-center gap-4'>
          <div className='col-span-1'>
            <Link to={path.home} className='flex w-10 justify-center md:w-auto'>
              <svg width='52' height='52' viewBox='0 0 52 52' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <rect width='52' height='52' rx='10' fill='#2C2F32' />
                <path
                  d='M15.1869 23.2348C13.8497 20.8914 14.5884 17.9269 16.8369 16.6135C19.0854 15.3001 21.9922 16.135 23.3294 18.4785L29.1995 28.7652C30.5367 31.1086 29.798 34.0731 27.5495 35.3866C25.301 36.7 22.3942 35.865 21.057 33.5216L15.1869 23.2348Z'
                  fill='url(#paint0_linear_291_1837)'
                />
                <path
                  d='M39.2364 20.692C39.2364 23.3238 37.1359 25.4572 34.5449 25.4572C31.9539 25.4572 29.8535 23.3238 29.8535 20.692C29.8535 18.0602 31.9539 15.9268 34.5449 15.9268C37.1359 15.9268 39.2364 18.0602 39.2364 20.692Z'
                  fill='url(#paint1_linear_291_1837)'
                />
                <defs>
                  <linearGradient
                    id='paint0_linear_291_1837'
                    x1='16.8369'
                    y1='16.6135'
                    x2='27.442'
                    y2='35.002'
                    gradientUnits='userSpaceOnUse'
                  >
                    <stop stopColor='#1DC071' />
                    <stop offset='1' stopColor='#77D9AA' />
                  </linearGradient>
                  <linearGradient
                    id='paint1_linear_291_1837'
                    x1='34.5449'
                    y1='15.9268'
                    x2='34.5219'
                    y2='25.2866'
                    gradientUnits='userSpaceOnUse'
                  >
                    <stop stopColor='#1DC071' />
                    <stop offset='1' stopColor='#77D9AA' />
                  </linearGradient>
                </defs>
              </svg>
            </Link>
          </div>
          <div className='col-span-3 translate-x-5 md:translate-x-[-5]'>
            <form className=''>
              <div className='relative flex h-[40px] w-[217px] md:h-[52px] md:w-[458px]'>
                <input
                  placeholder='Shipping worldwide'
                  type='text'
                  className='md:text-[16px] flex-grow rounded-full px-5 py-2 text-[12px] shadow-md outline-none'
                />
                <button className='absolute right-1 top-[50%] h-[30px] w-[60px] flex-shrink-0 translate-y-[-50%] cursor-pointer rounded-[20px] bg-primary hover:bg-primary/80 md:right-2 md:h-[40px]'>
                  <SearchIcon
                    sx={{
                      color: 'white'
                    }}
                  />
                </button>
              </div>
            </form>
          </div>
          <div className='col-span-8 flex h-full items-center justify-end gap-3'>
            <div className='mr-4 hidden h-full items-center gap-2 lg:flex'>
              <LanguageIcon
                sx={{
                  color: 'GrayText'
                }}
              />
              <select className='h-full bg-transparent text-[16px] font-semibold text-text2 outline-none'>
                <option value=''>Vietnamese</option>
                <option value=''>English</option>
              </select>
            </div>
            <Popover
              className='mr-4 hidden md:block'
              renderPopover={
                <Fragment>
                  <div className='mb-4 text-[12px] text-text3'>Recently</div>
                  <div className='flex items-center justify-between gap-5 rounded-md p-2 text-[14px] hover:bg-text3/20'>
                    <div className='flex-shrink-0'>
                      <img
                        className='h-10 w-10 rounded-md object-cover'
                        src='https://images.unsplash.com/photo-1666919643134-d97687c1826c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80'
                        alt=''
                      />
                    </div>
                    <div className='max-w-[200px] flex-grow truncate'>Ipad Pro M1</div>
                    <div className='font-semibold text-primary'>20.000.000</div>
                  </div>
                </Fragment>
              }
            >
              <button className='rounded-md bg-secondary px-3 py-2 font-semibold text-white hover:bg-secondary/90'>
                Your cart
              </button>
            </Popover>

            <Popover
              renderPopover={
                <div className='flex flex-col'>
                  <Link
                    to={path.signIn}
                    className='min-w-[90px] rounded-md px-2 py-3 text-center text-[13px] hover:bg-text3/30'
                  >
                    Sign in
                  </Link>
                  <Link
                    to={path.register}
                    className='min-w-[90px] rounded-md px-2 py-3 text-center text-[13px] hover:bg-text3/30'
                  >
                    Register
                  </Link>
                </div>
              }
            >
              <Avatar />
            </Popover>
          </div>
        </div>
      </div>
    </div>
  )
}
