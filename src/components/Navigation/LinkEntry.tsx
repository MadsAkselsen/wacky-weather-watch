import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Link from '@mui/material/Link';


// LinkEntry component
interface LinkEntryProps {
  href: string;
  icon: React.ReactElement;
  text: string;
}

export default function LinkEntry({ href, icon, text }: LinkEntryProps) {
    return (
      <Link href={href} style={{ textDecoration: 'none' }} >
        <ListItemButton dense={true} sx={{ flexDirection: 'column' }}>
          <ListItemIcon sx={{ justifyContent: 'center' }}>
            {icon}
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItemButton>
      </Link>
    );
  }