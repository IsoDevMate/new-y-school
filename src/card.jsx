/* eslint-disable react/jsx-key */
import React from 'react';
import {  SfScrollable } from '@storefront-ui/react';
import { Skeleton,Button } from '@mui/material';
import { CardsData } from './data';
import { motion } from 'framer-motion';
import  { Link } from 'react-router-dom'

const CardContainer = motion.div;

export default function GalleryVertical() {
  const [isLoading, setIsLoading] = React.useState(true);

   
  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000); 
  }, []);

  return (
    <SfScrollable
      className="m-auto py-4 items-center w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      buttonsPlacement='none'
      drag:enabled="true"
    >
      {isLoading ? (
        CardsData.map(() => (
          <CardContainer
            className="first:ms-auto  last:me-auto ring-1 ring-inset ring-neutral-200 shrink-0 rounded-md hover:shadow-lg  w-[200px] lg:w-[192px]"
            animate={{ opacity: 1, transition: { duration: 0.7, delay: 0.2, type: 'spring', bounce: 0.25 }, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            whileHover={{ scale: 1.04 }}
          >
            <Skeleton variant="rectangular" width={200} height={148} />
            <div className="p-2 border-t border-neutral-200 typography-text-sm">
              <Skeleton variant="text" width={100} />
              <Skeleton variant="text" width={50} />
              <Skeleton variant="text" width={80} />
            </div>
          </CardContainer>
        ))
      ) : (
        CardsData.map(({ imageurl, title, name, price }) => (
          <CardContainer
         
            key={title}
            className="first:ms-auto  last:me-auto ring-1 ring-inset ring-neutral-200 shrink-0 rounded-md hover:shadow-lg  hover:text-black transition-colors w-[200px] lg:w-[192px] h-[350px]"
            animate={{ opacity: 1, transition: { duration: 0.7, delay: 0.2, type: 'spring', bounce: 0.25 }, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            whileHover={{ scale: 1.04 }}
          >
            <div className="relative top-0 md:max-w-2xl lg:mx-auto">
              <Link href="#" className="block">
                <img
                  src={imageurl}
                  alt={title}
                  className="block object-cover h-1/4 rounded-md aspect-square w-[200px] lg:w-[190px] lg:h-[190px]"
                />
              </Link>
            </div>
            <div className="p-2 border-t border-neutral-200 typography-text-sm  flex flex-col  ">
  
              <Link href="#" className="block text-black  h-12 overflow-auto" style={{ textDecoration: 'none'}}>
                {title}
              </Link>
              <div className="flex items-center">
                <span className="font-bold mr-2">Price:</span>
                 <Button className="font-bold" sx={{ color: "black", justifyContent: "flex-start" }}>Ksh  {price}</Button>
                 </div>
              <Link href="#" className="block linkname  hover:text-black"style={{ textDecoration: 'none' }}>
                {name}
              </Link>
            </div>
          </CardContainer>
        ))
      )}
    </SfScrollable>
  );
}
