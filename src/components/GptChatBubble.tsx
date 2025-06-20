import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardActions from '@mui/joy/CardActions';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import FavoriteBorderTwoToneIcon from '@mui/icons-material/FavoriteBorderTwoTone';
import CopyAllTwoToneIcon from '@mui/icons-material/CopyAllTwoTone';

function GptChatBubble() {
    return (
        <Card
            variant="soft"
            sx={{
                width: '80%',
                overflow: 'auto',
                resize: 'horizontal',
                backgroundColor: 'transparent'
            }}
        >
            <CardContent>
                <Typography level="body-md">
                    this is a gpt chat bubble, it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                    Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
                    and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                    Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                    Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
                    and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                    Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                    Many desktop publishing packages and web page
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton color='success' variant='plain' aria-label="menu" sx={{ borderRadius: '100%' }}>
                    <CopyAllTwoToneIcon sx={{fontSize: 18}} />
                </IconButton>
                <IconButton color='danger' variant='plain' aria-label="menu" sx={{ borderRadius: '100%' }}>
                    <FavoriteBorderTwoToneIcon sx={{fontSize: 18}} />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default GptChatBubble