export default function ProductList() {
  return (
    <div className=''>
      <div className='mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
        <div className='col-span-1'>
          <div className='overflow-hidden rounded-xl bg-white shadow transition-transform duration-100 hover:translate-y-[0.04rem] hover:shadow-md'>
            <div className='relative w-full pt-[100%]'>
              <img
                src='https://images.unsplash.com/photo-1666919643134-d97687c1826c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80'
                alt=''
                className='absolute top-0 h-full w-full bg-white object-cover'
              />
            </div>
            <div className='overflow-hidden p-2'>
              <div className='min-h-[2rem] text-xs line-clamp-2'>Powered Kits Learning Boxes</div>
              <div className='mt-3 flex items-center justify-between'>
                <div className='max-w-[50%] truncate text-text2/70 line-through'>
                  <span className='text-sm'>200.000</span>
                  <span className='text-xs'>₫</span>
                </div>
                <div className='ml-1 truncate text-primary'>
                  <span className='text-sm'>180.000</span>
                  <span className='text-xs'>₫</span>
                </div>
              </div>
              <div className='flex text-sm'>
                Stock:
                <div className=''>12.5k</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
