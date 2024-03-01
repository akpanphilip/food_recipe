import React, { createContext, useContext, useState, useEffect } from 'react';
import CategoryList from '../components/CategoryList';

const CategoryContext = createContext();

export const useCategoryContext = () => useContext(CategoryContext);

export const CategoryProvider = ({ children }) => {

    const [categoryList, setCategoryList] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setCategoryList(CategoryList);
        }, 1000);
    }, []);

    return (
        <CategoryContext.Provider value={{ categoryList }}>
            {children}
        </CategoryContext.Provider>
    );
};
