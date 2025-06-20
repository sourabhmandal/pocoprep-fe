import { Button, TabPanel, Tabs, Typography } from '@mui/joy'
import { useCounter } from '../store/useRoadmap'
import TopAppBar from '../components/TopAppbar'

function HomePage() {
  const { count, increment } = useCounter()

  return (
    <div style={{ backgroundColor: "#FFFFECB3", height: '100vh' }}>
        <TopAppBar />
        <Typography level="h1">Home Page</Typography>
        <Typography level="h3">Count: {count}</Typography>
        <Button onClick={increment}>Increase</Button>
    </div>
  )
}

export default HomePage
