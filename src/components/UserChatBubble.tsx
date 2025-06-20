import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

function UserChatBubble() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Card
                variant="soft"
                sx={{
                    width: '80%',
                    // to make the card resizable
                    overflow: 'auto',
                    resize: 'horizontal',
                    backgroundColor: '#bff199',
                }}
            >
                <CardContent>
                    <Typography level="body-md">
                        We are a community of developers prepping for coding interviews,
                        participate, chat with others and get better at interviewing.
                    </Typography>
                </CardContent>
                {/* <CardActions buttonFlex="0 1 120px">
                <IconButton color='danger' aria-label="menu" sx={{ mr: 2 }}>
                    <FavoriteBorder />
                </IconButton>
                <Button variant="outlined" color="neutral">
                    View
                </Button>
                <Button variant="solid" color="primary">
                    Join
                </Button>
            </CardActions> */}
            </Card>
        </Box>
    )
}

export default UserChatBubble