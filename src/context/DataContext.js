import React, { useState } from 'react';

export const DataContext = React.createContext();

export const DataProvider = ({ children }) => {

    const [data, setData] = useState({});
    const [openModal, setOpenModal] = useState(false)

    return (
        <DataContext.Provider value={{ setData, data, setOpenModal, openModal }}>
            {children}
        </DataContext.Provider>
    )
} 