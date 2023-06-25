'use client'

import {BsSun, BsMoon} from 'react-icons/bs';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function DarkModeSwitch() {

    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <>
      {mounted && currentTheme === "dark" ? (
        <BsSun className='text-xl cursor-pointer hover:text-amber-600' 
               onClick={() => setTheme("light")} />
      ) : ( 
        <BsMoon className='text-xl cursor-pointer hover:text-amber-600' 
               onClick={() => setTheme("dark")} />
      )}
    </>
  );
}
