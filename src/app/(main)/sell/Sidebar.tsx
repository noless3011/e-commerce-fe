'use client'; // Mark this component as a client component

import React, { useState } from 'react';
import { AiOutlineCaretDown, AiOutlineCaretRight, AiOutlineCaretUp, AiOutlineLineChart, AiOutlineMessage, AiTwotoneShop } from "react-icons/ai";
import SideBarItem from './SideBarItem';
import SideBarSubItem from './SideBarSubItem';

const Sidebar = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <aside
            className={`
        bg-white h-full flex flex-col gap-10
        transition-all duration-200 items-center ${isExpanded ? 'w-52' : 'delay-200 w-16 '} overflow-hidden 
      `}
            onMouseEnter={() => setIsExpanded(true)}
            onMouseLeave={() => setIsExpanded(false)}
        >
            <ul className="w-fit h-fit">
                <SideBarItem isExpanded={isExpanded} extendable={false} name="Dashboard" icon={AiOutlineLineChart} link='/sell/dashboard'></SideBarItem>
                <SideBarItem isExpanded={isExpanded} extendable={true} name="Your Store" icon={AiTwotoneShop} link="#product">
                    <SideBarSubItem isExpanded={isExpanded} name="Products" link="/sell/product"></SideBarSubItem>
                    <SideBarSubItem isExpanded={isExpanded} name="Orders" link="/sell/order"></SideBarSubItem>
                    <SideBarSubItem isExpanded={isExpanded} name="Refunds" link="/sell/refund"></SideBarSubItem>
                </SideBarItem>
                <SideBarItem isExpanded={isExpanded} extendable={false} name="Messages" icon={AiOutlineMessage} link='/sell/messages'></SideBarItem>
            </ul>

        </aside>
    );
};

export default Sidebar;