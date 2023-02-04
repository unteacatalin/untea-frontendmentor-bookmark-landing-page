import { createContext, useState } from 'react';

const Bookmark = createContext({
  selected: false,
  updateSelected: (newSelected) => {},
});

export function BookmarkProvider(props) {
  const [selectedState, setSelectedState] = useState(false);

  function updSelected(selectedData) {
    setSelectedState((prevSelectedData) => {
      return selectedData;
    });
  }

  const context = {
    selected: selectedState,
    updateSelected: updSelected,
  };

  return (
    <Bookmark.Provider value={context}>{props.children}</Bookmark.Provider>
  );
}

export default Bookmark;
