import Avatar from './Avatar.jsx'
import Icon from './Icon.jsx'

function ChatWindow({ person, messages, draft, onDraftChange, onSendMessage, onOpenSidebar }) {
  return (
    <section className="chat-panel">
      <header className="chat-header">
        <button className="icon-button mobile-menu" aria-label="Open chats" onClick={onOpenSidebar}><Icon name="menu" /></button>
        <div className="header-person"><Avatar person={person} showStatus /><div><h1>{person.name}</h1><span>{person.online ? 'Active now' : person.role}</span></div></div>
        <div className="header-actions"><button className="icon-button" aria-label="Start audio call"><Icon name="phone" /></button><button className="icon-button" aria-label="Start video call"><Icon name="video" /></button><span className="header-divider" /><button className="icon-button" aria-label="More options"><Icon name="more" /></button><button className="details-button">Details <Icon name="chevron" size={15} /></button></div>
      </header>
      <div className="conversation-body">
        <div className="day-divider"><span /><small>TODAY</small><span /></div>
        {messages.length > 0 ? messages.map((message, index) => {
          const isMine = message.from === 'me'
          const previous = messages[index - 1]
          const showAvatar = !isMine && (!previous || previous.from !== 'them')
          return <div key={message.id} className="message-group">
            <div className={`message-row ${isMine ? 'message-mine' : ''}`}>
              {!isMine && <div className="message-avatar-slot">{showAvatar && <Avatar person={person} size="small" />}</div>}
              <div className="message-content">{showAvatar && !isMine && <strong className="message-author">{person.name}</strong>}<div className={`message-bubble ${isMine ? 'bubble-mine' : ''}`}>{message.text}</div><div className="message-meta">{message.time}{isMine && <span className="read-receipt"><Icon name="check" size={13} /><Icon name="check" size={13} /></span>}</div></div>
            </div>
            {person.id === 1 && index === 0 && <div className="attachment-card"><div className="file-icon">PDF</div><span><strong>Project brief — Q3.pdf</strong><small>2.4 MB · Shared at 2:32 PM</small></span><button className="icon-button" aria-label="More file options"><Icon name="more" size={18} /></button></div>}
          </div>
        }) : <div className="new-chat-state"><Avatar person={person} size="large" /><h2>Start a conversation</h2><p>Send a message to {person.name} to get things going.</p></div>}
      </div>
      <form className="composer" onSubmit={onSendMessage}>
        <div className="composer-top"><textarea value={draft} onChange={(event) => onDraftChange(event.target.value)} onKeyDown={(event) => { if (event.key === 'Enter' && !event.shiftKey) { event.preventDefault(); onSendMessage(event) } }} placeholder={`Message ${person.name}...`} aria-label="Write a message" rows="1" /><div className="composer-tools"><button type="button" className="icon-button" aria-label="Attach a file"><Icon name="paperclip" /></button><button type="button" className="icon-button" aria-label="Add emoji"><Icon name="smile" /></button><span className="composer-tool-divider" /><button type="submit" className="send-button" disabled={!draft.trim()} aria-label="Send message"><Icon name="send" size={17} /></button></div></div>
        <div className="composer-hint"><span><kbd>↵</kbd> to send · <kbd>⇧ ↵</kbd> for new line</span><span className="encrypted"><Icon name="lock" size={12} /> End-to-end encrypted</span></div>
      </form>
    </section>
  )
}

export default ChatWindow
