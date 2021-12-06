import React, { useState, useRef, useEffect } from 'react'
import { ArrowLeftIcon } from '@heroicons/react/outline'
import {
    TemplateIcon,
    ShoppingBagIcon,
    GiftIcon,
    ChartSquareBarIcon,
    CogIcon,
    CollectionIcon,
    ClipboardCheckIcon,
} from '@heroicons/react/solid'
import { Link, useLocation } from 'react-router-dom'

interface Isidebar {
    sidebarOpen: boolean
    setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const SideBar = ({ sidebarOpen, setSidebarOpen }: Isidebar) => {
    const location = useLocation()
    const { pathname } = location

    const trigger = useRef<any>(null)
    const sidebar = useRef<any>(null)

    // close on click outside
    useEffect(() => {
        const clickHandler = ({ target }: any) => {
            if (!sidebar.current || !trigger.current) return
            if (
                !sidebarOpen ||
                sidebar.current.contains(target) ||
                trigger.current.contains(target)
            )
                return
            setSidebarOpen(false)
        }
        document.addEventListener('click', clickHandler)
        return () => document.removeEventListener('click', clickHandler)
    })
    // close if the esc key is pressed
    useEffect(() => {
        const keyHandler = ({ keyCode }: any) => {
            if (!sidebarOpen || keyCode !== 27) return
            setSidebarOpen(false)
        }
        document.addEventListener('keydown', keyHandler)
        return () => document.removeEventListener('keydown', keyHandler)
    })
    return (
        <div className="relative">
            {/* sidebar backdrop (mobile) */}
            <div
                className={`fixed inset-0 bg-gray-900  bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
                    sidebarOpen
                        ? 'opacity-100'
                        : 'opacity-0 pointer-events-none'
                }`}
                aria-hidden='true'
            ></div>
            {/* Sidebar */}
            <div
                ref={sidebar}
                className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen  lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 flex-shrink-0 bg-gradient-to-t  from-dark-blue via-middle-blue to-light-blue p-4 transition-all duration-200 ease-in-out ${
                    sidebarOpen ? 'translate-x-0' : '-translate-x-64'
                }`}
            >
                {/* Sidebar Header*/}
                <div className='flex justify-between mb-10 pr-3 sm:px-2'>
                    {/* Close button */}
                    <button
                        ref={trigger}
                        className='lg:hidden text-gray-800 hover:text-gray-400'
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        aria-controls='sidebar'
                        aria-expanded={sidebarOpen}
                    >
                        <span className='sr-only'>Close sidebar</span>
                        <ArrowLeftIcon className='w-5 h-5' />
                    </button>
                </div>
                {/* Logo */}
                <Link to='/' className='block'>
                    <img
                        src='https://izitini-spaces.fra1.digitaloceanspaces.com/syastem-images/Logo.png'
                        className='mt-0 mb-5'
                        width='150px'
                        height='60px'
                        alt='logo'
                    />
                </Link>
                {/* Links */}
                <div className='space-y-8'>
                    <ul className='mt-3'>
                        {/* <li>
                            <form action='#' method='GET' className='lg:hidden'>
                                <label
                                    htmlFor='mobile-search'
                                    className='sr-only'
                                >
                                    Search
                                </label>
                                <div className='relative'>
                                    <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                                        <svg
                                            className='w-5 h-5 text-gray-500'
                                            fill='currentColor'
                                            viewBox='0 0 20 20'
                                            xmlns='http://www.w3.org/2000/svg'
                                        >
                                            <path d='M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z'></path>
                                        </svg>
                                    </div>
                                    <input
                                        type='text'
                                        name='email'
                                        id='mobile-search'
                                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-600 focus:ring-cyan-600 block w-full pl-10 p-2.5'
                                        placeholder='Search'
                                    />
                                </div>
                            </form>
                        </li> */}
                        <li
                            className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 divided-y  ${
                                pathname === '/' && 'bg-gray-800'
                            }`}
                        >
                            <Link
                                to='/'
                                className={`block text-gray-200 hover:text-white truncate transition duration-150 ${
                                    pathname === '/' && 'hover:text-gray-400'
                                }`}
                            >
                                <button className='flex items-center'>
                                    <TemplateIcon className='flex-shrink-0 h-5 w-5' />
                                    <p className=' text-sm font-medium ml-3  lg:opacity-0 lg:sidebar-expanded:opacity-100 duration-200'>
                                        Dashboard
                                    </p>
                                </button>
                            </Link>
                        </li>
                        <li
                            className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                                pathname.includes('store') && 'bg-gray-800'
                            }`}
                        >
                            <Link
                                to='/stores'
                                className={`block text-gray-200 hover:text-white truncate transition duration-150 ${
                                    pathname.includes('store') &&
                                    'hover:text-gray-400'
                                }`}
                            >
                                <div className='flex items-center'>
                                    <ShoppingBagIcon className='flex-shrink-0 h-5 w-5' />
                                    <p className='text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 duration-200'>
                                        Store
                                    </p>
                                </div>
                            </Link>
                        </li>
                        <li
                            className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                                pathname.includes('products') && 'bg-gray-800'
                            }`}
                        >
                            <Link
                                to='/products'
                                className={`block text-gray-200 hover:text-white truncate transition duration-150 ${
                                    pathname.includes('products') &&
                                    'hover:text-gray-400'
                                }`}
                            >
                                <div className='flex items-center'>
                                    <CollectionIcon className='flex-shrink-0 h-5 w-5' />
                                    <p className='text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 duration-200'>
                                        Products
                                    </p>
                                </div>
                            </Link>
                        </li>
                        <li
                            className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                                pathname.includes('orders') && 'bg-gray-800'
                            }`}
                        >
                            <Link
                                to='/orders'
                                className={`block text-gray-200 hover:text-white truncate transition duration-150 ${
                                    pathname.includes('orders') &&
                                    'hover:text-gray-400'
                                }`}
                            >
                                <div className='flex items-center'>
                                    <ClipboardCheckIcon className='flex-shrink-0 h-5 w-5' />
                                    <p className='text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 duration-200'>
                                        Orders
                                    </p>
                                </div>
                            </Link>
                        </li>
                        <li
                            className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                                pathname.includes('coupons') && 'bg-gray-800'
                            }`}
                        >
                            <Link
                                to='/coupons'
                                className={`block text-gray-200 hover:text-white truncate transition duration-150 ${
                                    pathname.includes('coupons') &&
                                    'hover:text-gray-400'
                                }`}
                            >
                                <div className='flex items-center'>
                                    <GiftIcon className='flex-shrink-0 h-5 w-5' />
                                    <p className='text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 duration-200'>
                                        Coupons
                                    </p>
                                </div>
                            </Link>
                        </li>
                        <li
                            className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                                pathname.includes('reports') && 'bg-gray-800'
                            }`}
                        >
                            <Link
                                to='/reports'
                                className={`block text-gray-200 hover:text-white truncate transition duration-150 ${
                                    pathname.includes('reports') &&
                                    'hover:text-gray-400'
                                }`}
                            >
                                <div className='flex items-center'>
                                    <ChartSquareBarIcon className='flex-shrink-0 h-5 w-5' />
                                    <p className='text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 duration-200'>
                                        Reports
                                    </p>
                                </div>
                            </Link>
                        </li>
                        <li
                            className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                                pathname.includes('settings') && 'bg-gray-800'
                            }`}
                        >
                            <Link
                                to='/settings'
                                className={`block text-gray-200 hover:text-white truncate transition duration-150 ${
                                    pathname.includes('settings') &&
                                    'hover:text-gray-400'
                                }`}
                            >
                                <div className='flex items-center'>
                                    <CogIcon className='flex-shrink-0 h-5 w-5' />
                                    <p className='text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 duration-200'>
                                        Settings
                                    </p>
                                </div>
                            </Link>
                        </li>
                        {/* <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
              pathname === "" && "bg-gray-800"
            }`} /> */}
                    </ul>
                    <div>Logout</div>
                </div>
                {/* Expand / collapse button */}
                <div className='pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto'>
                    <div className='px-3 py-2'>
                        <button onClick={() => setSidebarOpen(!sidebarOpen)}>
                            <span className='sr-only'>
                                Expand / collapse sidebar
                            </span>
                            <svg
                                className='w-6 h-6 fill-current sidebar-expanded:rotate-180'
                                viewBox='0 0 24 24'
                            >
                                <path
                                    className='text-gray-400'
                                    d='M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z'
                                />
                                <path
                                    className='text-gray-600'
                                    d='M3 23H1V1h2z'
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar
