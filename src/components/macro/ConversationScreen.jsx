import useStore from '../../store'
import ConversationDetails from './ConversationDetails'
import Conversations from './Conversations'

const ConversationScreen = () => {
    const chatDetailsOpen = useStore(state => state.chatDetailsOpen)
  return (
    <div className={`${chatDetailsOpen ? 'grid grid-cols-[1fr_auto]' : 'grid grid-cols-[1fr_0px]'} h-screen`}>
        <Conversations />
        <ConversationDetails />
    </div>
  )
}

export default ConversationScreen