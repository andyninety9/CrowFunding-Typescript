import SideNav from 'src/components/SideNav'

export default function Dashboard() {
  return (
    <div className='bg-whiteSoft py-6'>
      <div className='container'>
        <div className='grid grid-cols-12 md:gap-10'>
          <div className='hidden md:col-span-1 md:block'>
            <SideNav />
          </div>
          <div className='col-span-12 md:col-span-11'>
            <div className='container'>
              <div className='flex flex-col'>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
