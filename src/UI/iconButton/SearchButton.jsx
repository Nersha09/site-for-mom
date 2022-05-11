import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';

const SearchButton = ({children}) => {
  return(
      <IconButton>
          <SearchIcon>
              {children}
          </SearchIcon>
      </IconButton>
  )
}
export default SearchButton;