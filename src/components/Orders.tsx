import { Menu, Transition } from '@headlessui/react'
import { SearchIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom'
import Example from './Dropdown'

interface Iactive {
    active: boolean
}
const Orders = () => {
    return (
        <div className='px-4 sm:px-6  lg:px-8 py-8 w-full h-full max-w-9xl mx-auto bg-gray-200'>
            <h2 className='font-extrabold text-3xl mb-4'>Orders</h2>
            <div className=' bg-white p-4 rounded-lg'>
                <div className='grid gap-4 grid-cols-1 md:grid-cols-4'>
                    <div>
                        <h3>What are you looking for</h3>
                        <div className='mt-5 mb-2 border-2 bg-gray-200 py-1 px-3 flex justify-between overflow-hidden rounde-md rounded-md'>
                            <span>
                                <SearchIcon className='w-5 h-5 text-gray-600' />
                            </span>
                            <input
                                className='flex-grow outline-none bg-gray-200 text-gray-600 focus:text-blue-600'
                                type='text'
                                placeholder='Search for category, name, Company,etc'
                            />
                        </div>
                    </div>
                    <div>
                        <h3>Category</h3>
                        <div className='relative mt-5 '>
                            <Example />
                        </div>
                    </div>
                    <div>
                        <h3>Status</h3>
                        <div className='relative mt-5'>
                            <Example />
                        </div>
                    </div>
                    <div className='flex items-center justify-center mt-5 w-full'>
                        <button
                            type='submit'
                            className='flex items-center justify-center py-2 px-12 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-light-blue hover:bg-middle-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                        >
                            SEARCH
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Orders
