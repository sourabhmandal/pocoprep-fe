import GptChatBubble from '../components/GptChatBubble'
import TopAppBar from '../components/TopAppbar'
import UserChatBubble from '../components/UserChatBubble'
import ChatInputFeild from '../components/ChatInputFeild'
import { Box } from '@mui/joy'

function HomePage() {
  return (
    <div style={{ 
      backgroundColor: "#FFFFECB3", 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column' 
    }}>
      <TopAppBar />
      <div style={{
        flex: 1,
        overflowY: 'auto',
        padding: '20px',
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        <UserChatBubble />
        <GptChatBubble />
        <UserChatBubble />
        <GptChatBubble />
        <UserChatBubble />
        <GptChatBubble />
      </div>
      <Box style={{ position: 'sticky', bottom: 0, padding: '20px 10%', zIndex: 1000}}>
        <ChatInputFeild />
      </Box>
    </div>
  )
}

export default HomePage
