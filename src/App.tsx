import React, { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import SiderBar from './components/SiderBar'
import Dashboard from './components/Dashboard'
import Orders from './components/Orders'
import Products from './components/Products'
import Reports from './components/Reports'
import Settings from './components/Settings'
import Store from './components/Store'
import Coupons from './components/Coupons'
import { useMediaQuery } from 'react-responsive'
import CreateProduct from './components/CreateProduct'
import SignInPage from './components/accounts/SignInPage'
import CustomerSignUp from './components/accounts/CustomerSignUp'
import { Transition } from '@headlessui/react'

function App() {
    const [isClosed, setIsClosed] = useState(false)

    const isStatic = useMediaQuery({
        query: '(min-width: 640px)',
    })

    return (
        <div className='flex h-screen overflow-hidden'>
            {/* Sidebr  */}
            <SiderBar
                isClosed={isClosed}
                setIsClosed={setIsClosed}
                isStatic={isStatic}
            />
            {/* Header  */}
            <div className='relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden'>
                <Header
                    isClosed={isClosed}
                    setIsClosed={setIsClosed}
                    isStatic={isStatic}
                />
                <Transition
                    appear={true}
                    show={!isStatic && !isClosed}
                    enter='transition-opacity duration-200'
                    enterFrom='opacity-0'
                    enterTo='opacity-50'
                    leave='transition-opacity duration-200'
                    leaveFrom='opacity-50'
                    leaveTo='opacity-0'
                >
                    <div className='fixed inset-0 bg-black opacity-60 z-10' />
                </Transition>

                <Routes>
                    <Route path='/signup' element={<CustomerSignUp />} />
                    <Route path='/signin' element={<SignInPage />} />
                    <Route path='/' element={<Dashboard />} />
                    <Route path='/stores' element={<Store />} />
                    <Route path='/products' element={<Products />} />
                    <Route
                        path='/products/create-product'
                        element={<CreateProduct />}
                    />
                    <Route path='/orders' element={<Orders />} />
                    <Route path='/coupons' element={<Coupons />} />
                    <Route path='/reports' element={<Reports />} />
                    <Route path='/settings' element={<Settings />} />
                </Routes>
            </div>
        </div>
    )
}

export default App
