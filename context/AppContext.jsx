'use client'
import { productsDummyData, userDummyData } from "@/assets/assets";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const useAppContext = () => {
    return useContext(AppContext)
}

export const AppContextProvider = (props) => {

    const currency = process.env.NEXT_PUBLIC_CURRENCY
    const router = useRouter()

    const {user} = useUser()

    const [products, setProducts] = useState([])
    const [userData, setUserData] = useState({})
    const [isSeller, setIsSeller] = useState(false)
    const [cartItems, setCartItems] = useState(() => {
        if (typeof window === 'undefined') return {};
        try {
            return JSON.parse(localStorage.getItem('quickcart_cart')) || {};
        } catch {
            return {};
        }
    })

    const fetchProductData = async () => {
        try {
            const res = await fetch('/api/products');
            if (!res.ok) throw new Error('Failed');
            const data = await res.json();
            setProducts(data.products || []);
        } catch (err) {
            // Fallback to dummy data during local development
            setProducts(productsDummyData);
        }
    }

    const fetchUserData = async () => {
        setUserData(userDummyData);
    }

    const addToCart = async (itemId) => {
        let cartData = { ...cartItems };
        if (cartData[itemId]) {
            cartData[itemId] += 1;
        }
        else {
            cartData[itemId] = 1;
        }
        setCartItems(cartData);
    }

    const updateCartQuantity = async (itemId, quantity) => {
        let cartData = { ...cartItems };
        if (quantity === 0) {
            delete cartData[itemId];
        } else {
            cartData[itemId] = quantity;
        }
        setCartItems(cartData)
    }

    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cartItems) {
            if (cartItems[items] > 0) {
                totalCount += cartItems[items];
            }
        }
        return totalCount;
    }

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const items in cartItems) {
            let itemInfo = products.find((product) => product._id === items);
            if (cartItems[items] > 0) {
                totalAmount += itemInfo.offerPrice * cartItems[items];
            }
        }
        return Math.floor(totalAmount * 100) / 100;
    }

    useEffect(() => {
        fetchProductData()
    }, [])

    useEffect(() => {
        fetchUserData()
    }, [])

    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('quickcart_cart', JSON.stringify(cartItems));
        }
    }, [cartItems]);

    useEffect(() => {
        if (user) {
            setIsSeller(user.publicMetadata?.role === 'seller');
        }
    }, [user]);

    const value = {
        user,
        currency, router,
        isSeller, setIsSeller,
        userData, fetchUserData,
        products, fetchProductData,
        cartItems, setCartItems,
        addToCart, updateCartQuantity,
        getCartCount, getCartAmount
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}