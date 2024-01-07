import React, { useState, useEffect, useRef } from 'react';
import { CardsData } from '../data';
import { useDebounce } from 'react-use';
import { 
    useDropdown,
     useDisclosure,
      useTrapFocus,
      SfLoaderCircular,
      SfIconSearch,
      SfIconCancel,
     } from '@storefront-ui/react';
import { IconButton } from '@mui/material';
import GalleryVertical from '../card';
import { offset } from '@floating-ui/react-dom';


const delay = () => new Promise((resolve) => setTimeout(resolve, Math.random() * 1000));

const mockAutocompleteRequest = async phrase => {
  await delay();
  const results = CardsData
    .filter((item) => item.title.toLowerCase().includes(phrase.toLowerCase()))
    .map((item) => {
      const highlight = item.title.substring(0, phrase.length);
      const rest = item.title.substring(phrase.length);
      console.log(highlight, rest, item);
      return { highlight, rest, item };
    });
  return results;
};

function Searchicon() {
 // const [selectedCategory, setSelectedCategory] = useState(null);
 const [isOpen, setIsOpen] = useState(false);

 const open = () => setIsOpen(true);

 const close = () => setIsOpen(false);
  const inputRef = useRef(null);
  const dropdownListRef = useRef(null);
  const [searchValue, setSearchValue] = useState('');
  const [isLoadingSnippets, setIsLoadingSnippets] = useState(false);
  const [snippets, setSnippets] = useState([]);
  const { refs, style } = useDropdown({
    isOpen,
    onClose: close,
    placement: 'bottom-start',
    middleware: [offset(4)],
  });

  const { focusables, updateFocusableElements } = useTrapFocus(dropdownListRef, {
    trapTabs: false,
    arrowKeysUpDown: true,
    activeState: isOpen,
    initialFocus: false,
  });

  const isResetButton = Boolean(searchValue);
  const [selectedCourse, setSelectedCourse] = useState(null);


  useEffect(() => {
    console.log("Selected course", selectedCourse);
  }, [selectedCourse]);

   const handleSubmit = event => {
    event.preventDefault();
    
    setSearchValue('');
    setIsOpen(false);
    const { value } = inputRef.current;
    close();
   
  };

  const handleFocusInput = () => {
    inputRef.current?.focus();
  };

  const handleReset = () => {
    setSearchValue('');
    setSnippets([]);
    close();
    handleFocusInput();
  };

  const handleChange = event => {
    const phrase = event.target.value;
    if (phrase) {
      setSearchValue(phrase);
    } else {
      handleReset();
    }
  };

  const handleSelect = phrase => () => {
    console.log('Selected phrase:', phrase);
    setSearchValue(phrase);
    close();
    handleFocusInput();
    //isOpen.current = false;
    
    setSelectedCourse(searchValue)
    //GalleryVertical({ selectedCourse }) 
    console.log("Selected course", selectedCourse);
    setSnippets([]) 
  };

  useEffect(() => {
    console.log('Selected courses result', selectedCourse); 
  }, [selectedCourse]);

 
  const handleInputKeyDown = event => {
    if (event.key === 'Escape') handleReset();
    if (event.key === 'ArrowUp') {
      open();
      updateFocusableElements();
      if (isOpen && focusables.length > 0) {
        focusables[focusables.length - 1].focus();
      }
    }
    if (event.key === 'ArrowDown') {
      open();
      updateFocusableElements();
      if (isOpen && focusables.length > 0) {
        focusables[0].focus();
      }
    }
  };

  useDebounce(
    () => {
      if (searchValue) {
        const getSnippets = async () => {
         setIsOpen(true);
          setIsLoadingSnippets(true);
          try {
            const data = await mockAutocompleteRequest(searchValue);
            setSnippets(data);
          } catch (error) {
            close();
            console.error(error);
          }
          setIsLoadingSnippets(false);
        };

        getSnippets();
      }
    },
    500,
    [searchValue],
  );

  function GalleryVertical({ selectedCourse }) {
    if (!selectedCourse) return null;
  
    return (
      <div>
     <GalleryVertical selectedCourse={selectedCourse} />
      </div>
    );
  }

    return (
        <form role="search" onSubmit={handleSubmit} className="relative" ref={refs.setReference}>
             <div className="flex">
           <input
            ref={inputRef}
            value={searchValue}
            onChange={handleChange}
            wrapperClassName="w-full !ring-0 active:!ring-0 hover:!ring-0 focus-within:!ring-0 border-y border-l border-neutral-200 rounded-r-none hover:border-primary-800 active:border-primary-700 active:border-y-2 active:border-l-2 focus-within:border-y-2 focus-within:border-l-2 focus-within:border-primary-700"
            aria-label="Search"
            placeholder="Search Courses ..."
            onKeyDown={handleInputKeyDown}
            slotprefix={
              <IconButton>
                <SfIconSearch />
              </IconButton>
            }
            slotsuffix={
              isResetButton && (
                <IconButton
                  className="flex rounded-md focus-visible:outline focus-visible:outline-offset"
                  onClick={handleReset}
                  aria-label='Clear search input'
                
                >
                  <SfIconCancel />
                </IconButton>
              )
            }
            />
            <button type="submit" aria-label="Search for a specific phrase on the page" className="rounded-l-none">
                <SfIconSearch />
            </button>
             </div>
                 {isOpen && (
                    <div refs={refs.floating} style={style} className="left-20 right-20">
                        {isLoadingSnippets ? (
                            <div className="flex items-center justify-center bg-white w-full h-screen py-2 ">
                                <SfLoaderCircular />
                            </div>
                        ) : (
                            snippets.length > 0 && (
                                <ul className="py-2 bg-white w-full max-h-60 overflow-y-auto shadow-md rounded-md">
                                    {snippets.map(({ highlight, rest, item }) => (
                                        //generate a random id for the key
                                        <li key = {item.rating} className="border-b border-neutral-200">
                                            <button type="button" onClick={handleSelect(item.title)} className="!py-4 flex justify-start">
                                                <p className="text-left">
                                                    <span className="font-bold">{highlight}</span>
                                                    <span className="margin-left-2 font-medium">{rest}</span>
                                                </p>
                                               
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            )
                        )}
                    </div>
                )}
        </form>
    );
      
}

export default Searchicon;
 /*
  useEffect(() => {
    const updateFocusableElements = () => {
        if (isOpen.current) {
            const focusableElements = dropdownListRef.current.querySelectorAll('button');
            updateFocusableElements(focusableElements);
        }

    }

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

  const handleSelect = ({ title,item }) => () => {
    console.log('Selected title:', title);
    console.log('selected item:',item); 
    setSearchValue(title);
    isOpen.current = false;
    handleFocusInput();
    setSelectedCourse(item);
    console.log("Selected course", selectedCourse);
    setSnippets([]) 
  };

  function GalleryVertical({ selectedCourse }) {
    if (!selectedCourse) return null;
  
    return (
      <div>
        <h1>{selectedCourse.title}</h1>
        <p>{selectedCourse.name}</p>
        <p>{selectedCourse.price}</p>   
        <img src={selectedCourse.imageurl} alt={selectedCourse.title} />

       
      </div>
    );
  }

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
                  <li key={item.title} className="border-b border-neutral-200">
                    <button type="button"   onClick={() => handleSelect({title, item})} className="!py-4 flex justify-start">
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
    {selectedCourse && 
  <GalleryVertical selectedCourse={selectedCourse} />
}

   
    </form>
  );
}






export default Searchicon;


 
  */
    /*const [selectedCategory, setSelectedCategory] = useState(null);
     //sidebar filtering
//    const handleChange = (event) => {
  //      setSelectedCategory(event.target.value);
    //  };

    //categories button filter
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(CardsData, selected, query) {
    let filteredProducts = CardsData;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category }) =>
          category === selected ||
          category.some((item) => item === selected)
      );
    }

    return filteredProducts.map(
      ({ title,name,price,imageurl,rating,category }) => (
       <GalleryVertical
            key={title}
            title={title}
            imageurl={imageurl}
            name={name}
            price={price} 
            rating={rating}
            category={category}
            />
      )
    );
  }

    const result = filteredData(CardsData, selectedCategory, query);
  
    return (
      <>
        <Sidebar handleChange={handleChange} />
        <SearchBar query={query} handleInputChange={handleInputChange} />
    
        <GalleryVertical result={result} />
      </>
    );
  }
  
  export default App;
*/
