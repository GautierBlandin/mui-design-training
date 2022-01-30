import type { NextPage } from 'next'
import {Box} from "@mui/material";
import Sidebar from "../src/Sidebar/Sidebar";

const Home: NextPage = () => {
  return (
    <Box sx={{
      display: 'flex',
      height: '100vh'
    }}>
        <Sidebar/>
        <Box sx={{

        }}>
            Content
        </Box>
    </Box>
  )
}

export default Home
