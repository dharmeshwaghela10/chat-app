import {PrettyChatWindow } from 'react-chat-engine-pretty'
const ChatsPage = (props) =>{
    
    return (
        <div style={{ height: '100vh' }}>
    <PrettyChatWindow
        projectId='7cf4c586-aa1a-4ffd-9fd2-48dd0522da57'
        username={props.user.username}
        secret={props.user.secret}
         style={{ height: '100%'}}
     />
    </div>

    )
}

export default ChatsPage