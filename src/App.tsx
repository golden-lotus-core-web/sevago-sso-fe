import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { Mode } from './common';
import { getTheme } from './common/utils/theme.utils';

export default function App() {
  return (
    <ThemeProvider theme={getTheme(Mode.LIGHT)}>
      <CssBaseline />
    </ThemeProvider>
  );
}
