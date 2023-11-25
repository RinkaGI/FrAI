import '@fontsource/inter';
import * as React from 'react';
import { CssVarsProvider, extendTheme, useColorScheme } from '@mui/joy/styles';
import Button from '@mui/joy/Button'


function ModeToggle() {
    const { mode, setMode } = useColorScheme();
    const [mounted, setMounted] = React.useState(false);
 
   React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        // to avoid layout shift, render a placeholder button
        return <Button variant="outlined" color="neutral" sx={{ width: 120 }} />;
    }
 
    return (
      <Button
        variant="outlined"
        color="neutral"
        onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
      >
        {mode === 'dark' ? 'Turn light' : 'Turn dark'}
      </Button>
    );
  };

  export default ModeToggle;