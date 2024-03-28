import { AppBar, Toolbar, IconButton, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Search from 'components/Search/Search';
import CurrentPositionBtn from 'components/CurrentPositionBtn/CurrentPositionBtn';
import ToggleThemeButton from 'components/ToggleThemeButton/ToggleThemeButton';
import { useUIContext } from 'context/uiContextProvider';

const AppBarCustom = () => {
	const { mobileOpen, setMobileOpen } = useUIContext();
	return (
		<AppBar position="static" color="default">
			<Toolbar>
				<IconButton
					color="inherit"
					aria-label="open drawer"
					edge="start"
					onClick={() => setMobileOpen(!mobileOpen)}
				>
					<MenuIcon />
				</IconButton>
				<Box
					display={'flex'}
					alignItems={'center'}
					flexDirection={'row'}
					justifyContent={'space-between'}
					width={'100%'}
					marginLeft={2}
				>
					<Box display={'flex'}>
						<Search />
						<CurrentPositionBtn />
					</Box>
					<Box display={{ xs: 'none', sm: 'block' }}>
						<ToggleThemeButton />
					</Box>
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default AppBarCustom;
