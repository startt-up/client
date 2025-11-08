const PeopleCard = () => {
  return (
    <div className="w-60 md:w-100 h-100 flex items-center ml-3 my-3">
      <div className='w-full h-60 md:w-80 md:h-72 rounded-lg border border-gray-400 relative bg-gradient-to-b from-[#7940E9] to-purple-500 pt-14 overflow-visible'>
        {/* Profile Image - Half inside, Half outside */}
        <div className='absolute left-1/2 -translate-x-1/2 -top-14'>
          <img
            src='./People1.png'
            alt='person'
            className='w-28 h-28 rounded-full object-cover'
          />
        </div>

        {/* Text Content */}
        <div className='w-full h-full flex md:items-start'>
          <div className='w-full h-3/4 p-3'>
            <p className='text-white text-lg font-medium text-center'>
              Ankit Sharma
            </p>
            <p className='text-sm text-white text-center'>
              Bengaluru, Karnataka
            </p>
            <p className='text-white text-sm text-center mt-2 leading-5 line-clamp-5'>
              Lorem ipsum dolor sit amet consectetur. Iaculis tempus diam vel viverra leo congue. Quis massa eget nisl faucibus orci. Sodales varius lacus consequat tempus in tellus vitae. Feugiat interdum ullamcorper tincidunt ornare in aliquam massa more...
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PeopleCard
