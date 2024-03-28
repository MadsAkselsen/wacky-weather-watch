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
		main: '#FFA726', // Soft orange for primary actions and accents
	  },
	  secondary: {
		main: '#64B5F6', // Light blue for less prominent elements, secondary actions
	  },
	  background: {
		default: '#F0F0F0', // Light grey for main background
		paper: '#FFFFFF', // Pure white for components like Card, Paper, etc.
	  },
	  text: {
		primary: '#202020', // Dark grey for primary text for better readability
		secondary: '#575757', // Lighter grey for secondary text
	  },
	  divider: '#E0E0E0', // Light grey for dividers
	  // Might need to add custom properties to use for borders and hover states, not native to MUI's theme structure
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
	  // Apply divider color to components that use borders/dividers
	  MuiDivider: {
		styleOverrides: {
		  root: {
			backgroundColor: '#E0E0E0', // Divider color
		  },
		},
	  },
	  MuiCard: {
		styleOverrides: {
		  root: {
			borderColor: '#D6D6D6', // For card borders if applicable
		  },
		},
	  },
	  // ...other component overrides
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
		default: '#0b131d', // Darker background for dark mode
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
