import React from 'react'
import Sidenav from '../Sidenav'
import { Box, Typography } from '@mui/material'
import { useLocation, useParams, useSearchParams } from 'react-router-dom';

function Settings() {
  const { pathname } = useLocation();
  return (
    <>
    <Box sx={{ display: "flex", mt: 10 }}>
      {/* <Sidenav /> */}
      <h1>B2C</h1>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>

        <div>
      <h2>d: {pathname}</h2>
      {/* Diğer bileşen içeriği */}
    </div>

      </Box>
    </Box>
  </>
  )
}

export default Settings