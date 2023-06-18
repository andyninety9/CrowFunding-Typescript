import { Link } from 'react-router-dom'
import path from 'src/constants/path'

export default function SignIn() {
  return (
    <div className='flex h-[100vh] w-[100vw] items-center justify-center bg-[#d2f2e3]'>
      <div className='container'>
        <form className='justify-center-center flex h-[511px] w-[327px] flex-col rounded-[10px] bg-white px-10 py-12 shadow-sm md:h-[556px] md:w-[556px]'>
          <Link to={path.home} className='mb-[10px] flex w-full items-center justify-center text-[20px] font-semibold'>
            Welcome Back!
          </Link>
          <div className='mb-[10px] flex w-full items-center justify-center text-[11px] font-normal text-text3'>
            Already have an account?{' '}
            <Link to={path.register} className='ml-1 text-primary underline'>
              Sign up
            </Link>
          </div>
          <button className='mb-5 mt-5 flex h-[45px] w-full items-center justify-center gap-5 rounded-md border'>
            <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M22.3055 10.0415L21.5 10.0415L21.5 10L12.5 10L12.5 14L18.1515 14C17.327 16.3285 15.1115 18 12.5 18C9.1865 18 6.5 15.3135 6.5 12C6.5 8.6865 9.1865 6 12.5 6C14.0295 6 15.421 6.577 16.4805 7.5195L19.309 4.691C17.523 3.0265 15.134 2 12.5 2C6.9775 2 2.5 6.4775 2.5 12C2.5 17.5225 6.9775 22 12.5 22C18.0225 22 22.5 17.5225 22.5 12C22.5 11.3295 22.431 10.675 22.3055 10.0415Z'
                fill='#FBC02D'
              />
              <path
                d='M3.65332 7.3455L6.93882 9.755C7.82782 7.554 9.98082 6 12.5003 6C14.0298 6 15.4213 6.577 16.4808 7.5195L19.3093 4.691C17.5233 3.0265 15.1343 2 12.5003 2C8.65932 2 5.32832 4.1685 3.65332 7.3455Z'
                fill='#E53935'
              />
              <path
                d='M12.5002 22C15.0832 22 17.4302 21.0115 19.2047 19.404L16.1097 16.785C15.1057 17.5455 13.8577 18 12.5002 18C9.89916 18 7.69066 16.3415 6.85866 14.027L3.59766 16.5395C5.25266 19.778 8.61366 22 12.5002 22Z'
                fill='#4CAF50'
              />
              <path
                d='M22.3055 10.0415L22.2975 10L21.5 10L12.5 10L12.5 14L18.1515 14C17.7555 15.1185 17.036 16.083 16.108 16.7855C16.1085 16.785 16.109 16.785 16.1095 16.7845L19.2045 19.4035C18.9855 19.6025 22.5 17 22.5 12C22.5 11.3295 22.431 10.675 22.3055 10.0415Z'
                fill='#1565C0'
              />
            </svg>
            <span className='text-[16px] font-semibold text-text3'>Sign in with Google</span>
          </button>
          <div className='flex flex-col'>
            <label htmlFor='email' className='mb-3 text-[14px]'>
              Email
            </label>
            <input
              type='email'
              name='email'
              className='h-[52px] w-full rounded-md border bg-white px-3 py-2 outline-none'
              placeholder='example@gmail.com'
            />
          </div>
          <div className='mt-5 flex flex-col'>
            <label htmlFor='password' className='mb-3 text-[14px]'>
              Password
            </label>
            <input
              type='password'
              name='password'
              className='h-[52px] w-full rounded-md border bg-white px-3 py-2 outline-none'
              placeholder='Enter password'
            />
          </div>
          <Link to={path.home} className='my-3 flex justify-end text-[14px] text-primary'>
            Forgot password
          </Link>
          <button className='mt-auto w-full rounded-md bg-primary py-3 font-semibold text-white hover:bg-primary/80'>
            Sign in
          </button>
        </form>
      </div>
    </div>
  )
}
