import {
    SfLink,
    SfButton,
    SfIconFavorite,
    SfIconChevronLeft,
    SfIconChevronRight,
    SfScrollable,
    SfIconStar
  } from '@storefront-ui/react';
import './styles/tailwind.css'
import classNames from 'classnames';
import React from 'react';
import { CardsData } from './data';
  

/*
function ButtonPrev({ disabled, ...attributes }) {
    return (
      <SfButton
        className={classNames('absolute !rounded-full z-10 left-4 bg-white hidden md:block', {
          '!hidden': disabled,
        })}
        variant="secondary"
        size="lg"
        square
        {...attributes}
      >
        <SfIconChevronLeft />
      </SfButton>
    );
  }
  
  ButtonPrev.defaultProps = { disabled: false };
  
function ButtonNext({ disabled, ...attributes }) {
    return (
      <SfButton
        className={classNames('absolute !rounded-full z-10 right-4 bg-white hidden md:block', {
          '!hidden': disabled,
        })}
        variant="secondary"
        size="lg"
        square
        {...attributes}
      >
        <SfIconChevronRight />
      </SfButton>
    );
  }*/
  
  //ButtonNext.defaultProps = { disabled: false };
  
  
  export default function GalleryVertical() {
  const [isLinkHovered, setIsLinkHovered] = React.useState(false);


    return (
        <SfScrollable
          className="m-auto py-4 items-center w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          buttonsPlacement='outside'
          drag:enabled="true"
        >
          {CardsData.map(({ imageurl, title, name, price }) => (
            <div
              key={title}
              className="first:ms-auto  last:me-auto ring-1 ring-inset ring-neutral-200 shrink-0 rounded-md hover:shadow-lg  w-[148px] lg:w-[192px]"
            >
              <div className="relative top-0 md:max-w-2xl">
                <SfLink
                  href="#"
                  className={`block ${isLinkHovered ? 'hover:text-orange-500' : 'text-black'}`}
                  onMouseEnter={() => setIsLinkHovered(true)}
                  onMouseLeave={() => setIsLinkHovered(false)}
                >
                 <img
                  src={imageurl}
                  alt={title}
                  className="block object-cover h-auto rounded-md aspect-square w-[148px] h-[148px] lg:w-[190px] lg:h-[190px]"
                  />
    
                </SfLink>
              </div>
              <div className="p-2 border-t border-neutral-200 typography-text-sm">
                <SfLink href="#" className="block link">
                  {title}
                </SfLink>
                <span className="block mt-2 font-bold">${price}</span>
                <SfLink href="#" className="block linkname">
                  {name}
                </SfLink> 
              </div>
            </div>
          ))}
        </SfScrollable>
        );
        }
            