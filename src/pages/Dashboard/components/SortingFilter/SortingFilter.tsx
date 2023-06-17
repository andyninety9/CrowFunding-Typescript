import StarOutlinedIcon from '@mui/icons-material/StarOutlined'
import { Link } from 'react-router-dom'
import path from 'src/constants/path'

export default function SortingFilter() {
  return (
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
  )
}
