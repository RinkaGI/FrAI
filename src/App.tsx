import '@fontsource/inter';
// import * as React from 'react';
import { CssVarsProvider, extendTheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import AccordionGroup from '@mui/joy/AccordionGroup';
import Accordion from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionSummary from '@mui/joy/AccordionSummary';
import Link from '@mui/joy/Link';

import DarkToogle from './components/DarkToogle.tsx'

const theme = extendTheme({
  components: {
    JoySkeleton: {
      defaultProps: {
        animation: 'wave',
      },
    },
  },
});

function App() {
  return (
    <CssVarsProvider theme={theme}>
      <DarkToogle></DarkToogle>

      <Sheet sx={{
        width: 300, // div 300 width
        mx: 'auto', // centered in left,right
        my: 4, //      4 top 4 bottom margin
        py: 3, //      3 vertical padding
        px: 2, //      2 horizontal padding
        display: 'flex', // flex way to align things
        flexDirection: 'column', // column 
        gap: 2, // space between objects
        borderRadius: 'sm', // round border,
        boxShadow: 'md', // little shadow
      }}>
        <div>
          <Typography level='h4' component='h1'>Welcome to FrAI!</Typography>
          <Typography level='body-sm'>Choose your AI Model</Typography>

          <AccordionGroup sx={{
            mt: 3
          }}>
            <Accordion>
              <AccordionSummary>GPT Models</AccordionSummary>
              <AccordionDetails>
                <Typography 
                  endDecorator={<Link href="https://chat.openai.com">GPT 3.5</Link>}
                ></Typography>
              </AccordionDetails>
            </Accordion>
          </AccordionGroup>

        </div>
      </Sheet>
    </CssVarsProvider>
  )
}

export default App
