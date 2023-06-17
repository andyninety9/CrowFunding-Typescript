import StarOutlinedIcon from '@mui/icons-material/StarOutlined'
import { Link } from 'react-router-dom'
import path from 'src/constants/path'
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined'
import Popover from 'src/components/Popover'

export default function SortingFilter() {
  return (
    <div className='z-10 flex w-full flex-wrap items-center justify-between rounded-xl bg-white px-3 py-3 shadow-md md:justify-end'>
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

      <Popover
        className='z-[1000]'
        renderPopover={
          <div className='flex flex-col'>
            <div className='mb-4 w-full text-[14px] font-semibold'>Categories</div>
            <div className='flex gap-5'>
              <button className='min-w-[90px] rounded-md border border-primary px-3 py-2 text-[12px] hover:bg-primary hover:text-white'>
                Phones
              </button>
              <button className='min-w-[90px] rounded-md border border-primary px-3 py-2 text-[12px] hover:bg-primary hover:text-white'>
                Watch
              </button>
              <button className='min-w-[90px] rounded-md border border-primary px-3 py-2 text-[12px] hover:bg-primary hover:text-white'>
                Tee
              </button>
              <div className='flex items-center gap-4'>
                <div className='text-[14px] font-semibold'>From</div>
                <input
                  type='text'
                  className='w-[70px] rounded-md border border-primary bg-transparent px-3 py-2 outline-none'
                />
                <div className=''>To</div>
                <input
                  type='text'
                  className='w-[70px] rounded-md border border-primary bg-transparent px-3 py-2 outline-none'
                />
              </div>
            </div>
            <button className='w-full bg-primary px-3 py-2 text-[14px] text-white mt-5 rounded-md hover:bg-primary/80'>Apply</button>
          </div>
        }
      >
        <ExpandCircleDownOutlinedIcon
          sx={{
            marginLeft: '8px',
            color: '#4acd8d',
            cursor: 'pointer'
          }}
        />
      </Popover>
    </div>
  )
}
