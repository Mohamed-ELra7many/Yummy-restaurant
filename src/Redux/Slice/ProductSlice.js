import { createSlice } from "@reduxjs/toolkit"

const initialState = [
    { id: 1, title: "Magnam Tiste", desc: "Lorem, deren, trataro, filede, nerada", price: "6", image: "../img/menu/menu-item-1.png", cat: "Breakfast" },
    { id: 2, title: "Aut Luia", desc: "Lorem, deren, trataro, filede, nerada", price: "14", image: "../img/menu/menu-item-2.png", cat: "Lunch" },
    { id: 3, title: "Est Eligendi", desc: "Lorem, deren, trataro, filede, nerada", price: "9", image: "../img/menu/menu-item-3.png", cat: "Dinner" },
    { id: 4, title: "Eos Luibusdam", desc: "Lorem, deren, trataro, filede, nerada", price: "13", image: "../img/menu/menu-item-4.png", cat: "Breakfast" },
    { id: 5, title: "Eos Luibusdam", desc: "Lorem, deren, trataro, filede, nerada", price: "13", image: "../img/menu/menu-item-5.png", cat: "Lunch" },
    { id: 6, title: "Laboriosam Direva", desc: "Lorem, deren, trataro, filede, nerada", price: "10", image: "../img/menu/menu-item-6.png", cat: "Dinner" },
]

const ProductSlice = createSlice({
    name: "product",
    initialState,
    reducers: {

    }
})

export default ProductSlice.reducer