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
import {
	Link as RouterLink,
	LinkProps as RouterLinkProps,
} from 'react-router-dom';

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

const cursorImageUrl = '../../cursor.png';

// Light theme
const lightTheme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: '#FFA726',
		},
		secondary: {
			main: '#64B5F6',
		},
		background: {
			default: '#F0F0F0',
			paper: '#FFFFFF',
		},
		text: {
			primary: '#202020',
			secondary: '#575757',
		},
		divider: '#E0E0E0',
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: `
			  html, body {
				overflow: hidden;
				height: 100%;
			  }
			  html, body, &:hover {
				cursor: url('${cursorImageUrl}'), auto;
			  }
			`,
		},
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
	},
});

// Dark theme
const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#90caf9',
		},
		secondary: {
			main: '#f48fb1',
		},
		background: {
			default: '#0b131d',
			paper: '#1f2c3b',
		},
		text: {
			primary: '#ffffff',
			secondary: '#bbbbbb',
		},
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: `
			  html, body {
				overflow: hidden;
				height: 100%;
			  },
			  html, body, &:hover {
				cursor: url('${cursorImageUrl}'), auto;
			  },
			  *, *:hover { /* This will target all elements and their hover states */
			  cursor: url('${cursorImageUrl}'), auto !important; /* Use !important with caution */
			`,
		},
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
});

interface ThemeContextType {
	theme: Theme;
	toggleTheme: () => void;
}

const defaultContextValue: ThemeContextType = {
	theme: darkTheme,
	toggleTheme: () => {},
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
