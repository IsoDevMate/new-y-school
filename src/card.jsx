import React from 'react';
import { SfLink, SfScrollable } from '@storefront-ui/react';
import { Skeleton } from '@mui/material';
import { CardsData } from './data';
import { motion } from 'framer-motion';

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
      buttonsPlacement='floating'
      drag:enabled="true"
    >
      {isLoading ? (
        CardsData.map(() => (
          <CardContainer
            className="first:ms-auto  last:me-auto ring-1 ring-inset ring-neutral-200 shrink-0 rounded-md hover:shadow-lg  w-[148px] lg:w-[192px]"
            animate={{ opacity: 1, transition: { duration: 0.7, delay: 0.2, type: 'spring', bounce: 0.25 }, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            whileHover={{ scale: 1.01 }}
          >
            <Skeleton variant="rectangular" width={148} height={148} />
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
            className="first:ms-auto  last:me-auto ring-1 ring-inset ring-neutral-200 shrink-0 rounded-md hover:shadow-lg  w-[148px] lg:w-[192px]"
            animate={{ opacity: 1, transition: { duration: 0.7, delay: 0.2, type: 'spring', bounce: 0.25 }, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            whileHover={{ scale: 1.01 }}
          >
            <div className="relative top-0 md:max-w-2xl">
              <SfLink href="#" className="block">
                <img
                  src={imageurl}
                  alt={title}
                  className="block object-cover h-auto rounded-md aspect-square w-[148px] h-[148px] lg:w-[190px] lg:h-[190px]"
                />
              </SfLink>
            </div>
            <div className="p-2 border-t border-neutral-200 typography-text-sm">
  
              <SfLink href="#" className="block link" style={{ textDecoration: 'none' }}>
                {title}
              </SfLink>
              <span className="block mt-2 font-bold">${price}</span>
              <SfLink href="#" className="block linkname"style={{ textDecoration: 'none' }}>
                {name}
              </SfLink>
            </div>
          </CardContainer>
        ))
      )}
    </SfScrollable>
  );
}
