import GptChatBubble from '../components/GptChatBubble'
import TopAppBar from '../components/TopAppbar'
import UserChatBubble from '../components/UserChatBubble'

function HomePage() {
  return (
    <div style={{ backgroundColor: "#FFFFECB3", minHeight: '100vh' }}>
      <TopAppBar />
      <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
        <UserChatBubble />
        <GptChatBubble />
        <UserChatBubble />
        <GptChatBubble />
        <UserChatBubble />
        <GptChatBubble />
      </div>
    </div>
  )
}

export default HomePage
