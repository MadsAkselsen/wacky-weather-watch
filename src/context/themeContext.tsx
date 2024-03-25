import React, {
	createContext,
	useState,
	useMemo,
	ReactNode,
	useContext,
	FC,
} from 'react';
import { Theme, createTheme } from '@mui/material/styles';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { LinkProps } from '@mui/material/Link';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';

// Fix react-router Link with MUI Link to prevent page reload
// Course: https://stackoverflow.com/a/75255458/19271916
const LinkBehavior = React.forwardRef<
	HTMLAnchorElement,
	Omit<RouterLinkProps, 'to'> & { href: RouterLinkProps['to'] }
>((props, ref) => {
	const { href, ...other } = props;
	// Map href (Material UI) -> to (react-router)
	return <RouterLink ref={ref} to={href} {...other} />;
});

// Light theme
const lightTheme = createTheme({
	palette: {
	  mode: 'light',
	  primary: {
		main: '#1976d2', // Example primary color
	  },
	  secondary: {
		main: '#dc004e', // Example secondary color
	  },
	  background: {
		default: '#f0f2f5', // Light gray background
		paper: '#ffffff', // For components like Card, Paper etc.
	  },
	  text: {
		primary: '#000000', // Black for primary text in light mode
		secondary: '#555555', // A darker gray for secondary text in light mode
	  },
	  // other customizations...
	},
	components: {
		MuiLink: {
		  defaultProps: {
			component: LinkBehavior,
		  } as LinkProps,
		},
		MuiButtonBase: {
		  defaultProps: {
			LinkComponent: LinkBehavior,
		  },
		},
	  },
	// ...other theme overrides
  });
  
  // Dark theme
  const darkTheme = createTheme({
	palette: {
	  mode: 'dark',
	  primary: {
		main: '#90caf9', // Example primary color for dark mode
	  },
	  secondary: {
		main: '#f48fb1', // Example secondary color for dark mode
	  },
	  background: {
		default: '#0e0e0e', // Darker background for dark mode
		paper: '#1f2c3b', // Darker paper components background
		
	  },
	  text: {
		primary: '#ffffff', // White for primary text in dark mode
		secondary: '#bbbbbb', // A lighter gray for secondary text in dark mode
	  },
	  // other customizations...
	},
	components: {
		MuiLink: {
		  defaultProps: {
			component: LinkBehavior,
		  } as LinkProps,
		},
		MuiButtonBase: {
		  defaultProps: {
			LinkComponent: LinkBehavior,
		  },
		},
	  },
	// ...other theme overrides
  });

  

interface ThemeContextType {
	theme: Theme;
	toggleTheme: () => void;
}

const defaultContextValue: ThemeContextType = {
	theme: darkTheme,
	toggleTheme: () => {}, // dummy function for default value
};

export const ThemeContext =
	createContext<ThemeContextType>(defaultContextValue);

export const ThemeContextProvider: FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [themeMode, setThemeMode] = useState<'light' | 'dark'>('dark');

	const theme = useMemo(
		() => (themeMode === 'light' ? lightTheme : darkTheme),
		[themeMode],
	);

	const toggleTheme = () => {
		setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			<ThemeContext.Consumer>
				{({ theme }) => (
					<MuiThemeProvider theme={theme}>
						<CssBaseline />
						{children}
					</MuiThemeProvider>
				)}
			</ThemeContext.Consumer>
		</ThemeContext.Provider>
	);
};

export const useThemeContext = (): ThemeContextType => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error(
			'useAppContext must be used within an AppContextProvider',
		);
	}
	return context;
};
