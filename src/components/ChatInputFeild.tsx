import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Textarea from '@mui/joy/Textarea';
import IconButton from '@mui/joy/IconButton';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import FormatBold from '@mui/icons-material/FormatBold';
import FormatItalic from '@mui/icons-material/FormatItalic';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import AttachFileTwoToneIcon from '@mui/icons-material/AttachFileTwoTone';
import Check from '@mui/icons-material/Check';

export default function ChatInputFeild() {
  const [italic, setItalic] = React.useState(false);
  const [fontWeight, setFontWeight] = React.useState('normal');
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  return (
    <Textarea
      placeholder="Type something here…"
      minRows={3}
      endDecorator={
        <Box
          sx={{
            display: 'flex',
            gap: 'var(--Textarea-paddingBlock)',
            pt: 'var(--Textarea-paddingBlock)',
            borderTop: '1px solid',
            borderColor: 'divider',
            flex: 'auto',
          }}
        >
          <IconButton
            variant="outlined"
            color="neutral"
            onClick={(event) => setAnchorEl(event.currentTarget)}
            sx={{
              borderRadius: '25%',
              p: 1,
              minWidth: 0,
            }}
          >
            <AttachFileTwoToneIcon sx={{ fontSize: 16 }} />
          </IconButton>
          <Button
            variant="outlined"
            color="neutral"
            onClick={(event) => setAnchorEl(event.currentTarget)}
            startDecorator={
              <AttachFileTwoToneIcon sx={{ fontSize: 16 }} />
            }
            sx={{
              borderRadius: '40px',
              minWidth: 0,
              px: 1,
              py: 0.5,
            }}
          >
            Search
          </Button>
          <Button sx={{ ml: 'auto' }}>Send</Button>
        </Box>
      }
      sx={[
        {
          minWidth: 300,
          fontWeight,
          backgroundColor: 'white',
        },
        italic ? { fontStyle: 'italic' } : { fontStyle: 'initial' },
      ]}
    />
  );
}
