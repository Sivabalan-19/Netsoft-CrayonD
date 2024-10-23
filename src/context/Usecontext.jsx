
import React, { createContext, useState } from 'react';

const MyContext = createContext();


export const MyProvider = ({ children }) => {
    const data = [
        {
            "id": 1,
            "tit": "Azure Villa",
            "price": 1200,
            "smaitit": "Azure Villa",
            "sqft": 2500,
            "bed": 3,
            "tub": 2,
            "home": 2,
            "add" :'123 Azure Lane, City A, Country X',
        },
        {
            "id": 2,
            "tit": "Sapphire Manor",
            "price": 1300,
            "smaitit": "Sapphire Manor",
            "sqft": 2200,
            "bed": 2,
            "tub": 2,
            "home": 2,
            "add" :'456 Sapphire Road, City B, Country Y'
        },
        {
            "id": 3,
            "tit": "Emerald Estate",
            "price": 1250,
            "smaitit": "Emerald Estate",
            "sqft": 2400,
            "bed": 3,
            "tub": 3,
            "home": 2,
            "add" :'789 Emerald Street, City C, Country Z'
        },
        {
            "id": 4,
            "tit": "Golden Retreat",
            "price": 1350,
            "smaitit": "Golden Retreat",
            "sqft": 2600,
            "bed": 4,
            "tub": 3,
            "home": 2,
            "add" :'321 Golden Avenue, City D, Country W'
        },
        {
            "id": 5,
            "tit": "Crystal Palace",
            "price": 1400,
            "smaitit": "Crystal Palace",
            "sqft": 2700,
            "bed": 4,
            "tub": 4,
            "home": 3,
            "add" :'654 Crystal Boulevard, City E, Country V'
        },
        
    ]


  const [filteredvil, setfilteredvil] = useState(null);
    

    

    return (
        <MyContext.Provider value={{ data,filteredvil,setfilteredvil }}>
            {children}
        </MyContext.Provider>
    );
};

export default MyContext;
