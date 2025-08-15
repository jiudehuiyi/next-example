'use client';

import { useState } from "react";
import About from "./about";
import Home from "./index";
import Head from "next/head";
import { usePathname, useSearchParams } from "next/navigation";

const Index = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [count, setCount] = useState(1);
    console.log('pathnamepathname', pathname, searchParams, searchParams.get("aa") );
    return (
        <div>
            Page-{count}
            <button onClick={ () => setCount(count + 1) }>Button</button>
        </div>
    )
}

export default Index;