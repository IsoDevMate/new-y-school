import React, { useState, useEffect, useRef } from 'react';
import { CardsData } from '../data';
import { useDropdown, useDisclosure, useTrapFocus } from '@storefront-ui/react';
import { IconButton } from '@mui/material';
import GalleryVertical from '../card';
import { offset } from '@floating-ui/react-dom';


const delay = () => new Promise((resolve) => setTimeout(resolve, Math.random() * 1000));

const mockAutocompleteRequest = async (phrase) => {
  await delay();
  const results = CardsData
    .filter((item) => item.title.toLowerCase().includes(phrase.toLowerCase()))
    .map((item) => {
      const highlight = item.title.substring(0, phrase.length);
      const rest = item.name.substring(phrase.length);
      return { highlight, rest, item };
    });
  return results;
};

function Searchicon() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const inputRef = useRef(null);
  const dropdownListRef = useRef(null);
  const [searchValue, setSearchValue] = useState('');
  const [isLoadingSnippets, setIsLoadingSnippets] = useState(false);
  const [snippets, setSnippets] = useState([]);
  const isOpen = useRef(false);
  const isResetButton = Boolean(searchValue);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const { focusables: focusableElements, updateFocusableElements } = useTrapFocus(dropdownListRef, {
    trapTabs: false,
    arrowKeysUpDown: true,
    activeState: isOpen,
    initialFocus: false,
  });

  const { toggle, open, close } = useDisclosure();
  const { refs, styles } = useDropdown({
    isOpen,
    toggle,
    open,
    onClose: close,
    placement: 'bottom-start',
    inputRef,
    middleware: [offset(4)],
    dropdownListRef
  });

  useEffect(() => {
    const updateFocusableElements = () => {}

    const getSnippets = async () => {
      isOpen.current = true;
      setIsLoadingSnippets(true);
      try {
        const data = await mockAutocompleteRequest(searchValue);
        setSnippets(data);
      } catch (error) {
        isOpen.current = false;
        console.error(error);
      }
      setIsLoadingSnippets(false);
    };

    const debouncedSearch = setTimeout(() => {
      if (searchValue) {
        getSnippets();
      }
    }, 500);

    return () => {
      clearTimeout(debouncedSearch);
    };
  }, [searchValue]);

  const handleSubmit = (event) => {
    event.preventDefault();
    isOpen.current = false;
    const { value } = inputRef.current;
    setSearchValue(value);
  };

  const handleChange = (event) => {
    const phrase = event.target.value;
    if (phrase) {
      setSearchValue(phrase);
    } else {
      handleReset();
    }
  };

  const handleSelect = (phrase) => () => {
    setSearchValue(phrase.title);
    isOpen.current = false;
    handleFocusInput();
    setSelectedCourse(phrase);
  };

  const handleReset = () => {
    setSearchValue('');
    setSnippets([]);
    isOpen.current = false;
    handleFocusInput();
  };

  const handleFocusInput = () => {
    inputRef.current?.focus();
  };

  const handleInputKeyDown = (event) => {
    if (event.key === 'Escape') handleReset();
    if (event.key === 'ArrowUp') {
      isOpen.current = true;
      updateFocusableElements();
      if (isOpen && focusableElements.length > 0) {
        focusableElements[focusableElements.length - 1].focus();
      }
    }
    if (event.key === 'ArrowDown') {
      isOpen.current = true;
      updateFocusableElements();
      if (isOpen && focusableElements.length > 0) {
        focusableElements[0].focus();
      }
    }
  };

  return (
    <form role="search" onSubmit={handleSubmit} className="relative" ref={refs.wrapper}>
      <div className="flex">
        <input
          ref={inputRef}
          value={searchValue}
          onChange={handleChange}
          onFocus={() => (isOpen.current = true)}
          placeholder="Search Courses ..."
          onKeyDown={handleInputKeyDown}
          slotPrefix={
            <IconButton>
              <searchIcon />
            </IconButton>
          }
          slotSuffix={
            isResetButton && (
              <IconButton
                className="flex rounded-md focus-visible:outline focus-visible:outline-offset"
                onClick={handleReset}
              >
                <closeIcon />
              </IconButton>
            )
          }
        />
        <button type="submit" aria-label="Search for a specific phrase on the page" className="rounded-l-none">
          <searchIcon />
        </button>
      </div>
      {isOpen.current && (
        <div className="left-20 right-20">
          {isLoadingSnippets ? (
            <div className="flex items-center justify-center bg-white w-full h-screen py-2 ">
              Loading...
            </div>
          ) : (
            snippets.length > 0 && (
              <ul className="py-2 bg-white w-full max-h-60 overflow-y-auto shadow-md rounded-md">
                {snippets.map(({ highlight, rest, item }) => (
                  <li key={item.name} className="border-b border-neutral-200">
                    <button type="button" onClick={handleSelect(item)} className="!py-4 flex justify-start">
                      <p className="text-left">
                        <span className="font-bold">{highlight}</span>
                        <span className="margin-left-2">{rest}</span>
                      </p>
                    </button>
                  </li>
                ))}
              </ul>
            )
          )}
        </div>
      )}
        {selectedCourse && <GalleryVertical selectedCourse={selectedCourse} />}      
    </form>
  );
};

export default Searchicon;
