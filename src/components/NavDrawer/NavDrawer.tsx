import { Drawer, Box } from '@mui/material';
import NavList from 'components/Navigation/NavList';
import { useUIContext } from 'context/uiContextProvider';

const NavDrawer = () => {
	const { mobileOpen, setMobileOpen } = useUIContext();
	return (
		<Drawer
			variant="temporary"
			open={mobileOpen}
			onClose={() => setMobileOpen(false)}
		>
			<Box p={{ xs: '', sm: 'sm' }} width={'100vw'}>
				<NavList />
			</Box>
		</Drawer>
	);
};

export default NavDrawer;
