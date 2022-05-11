import React from 'react';
import { getPagesArray } from '../../utils/pages';
import { Stack, Pagination } from '@mui/material';

const MyPogination = ({totalPages, changePage, currentPage}) => {
  const pageArray = getPagesArray(totalPages)
  return(
        <Stack spacing={2} sx={{alignItems: 'end', mt: 5}}>
            <Pagination 
                count={totalPages}
                onChange={(_, currentPage) => changePage(currentPage)}
                showFirstButton
                showLastButton/>
            {pageArray.map(page => 
                <span key={page}></span>
            )}    
        </Stack>
          
  )
}
export default MyPogination;