import { useState } from 'react'
import { Link } from 'react-router-dom'
import Avatar from './Avatar.jsx'
import { Brand } from './Brand.jsx'
import Icon from './Icon.jsx'

function ChatSidebar({ conversations, activeId, onSelectConversation, isOpen, onClose, onNotice }) {
  const [activeFilter, setActiveFilter] = useState('All')
  const [search, setSearch] = useState('')
  const [showProfile, setShowProfile] = useState(false)
  const filteredConversations = conversations.filter((person) => {
    const matchesSearch = person.name.toLowerCase().includes(search.toLowerCase())
    const matchesFilter = activeFilter === 'All' || (activeFilter === 'Unread' ? person.unread > 0 : person.group)
    return matchesSearch && matchesFilter
  })

  return (
    <aside className={`sidebar ${isOpen ? 'sidebar-open' : ''}`}>
      <div className="brand-row">
        <Brand />
        <button className="icon-button sidebar-close" aria-label="Close chats" onClick={onClose}><Icon name="close" /></button>
      </div>
      <button className="workspace-switcher">
        <span className="workspace-icon">S</span>
        <span className="workspace-copy"><strong>Studio North</strong><small>Free workspace</small></span>
        <span className="switcher-arrows">⌃<br />⌄</span>
      </button>
      <div className="sidebar-section-title"><span>MESSAGES</span><button className="icon-button small-icon" aria-label="New message"><Icon name="plus" size={17} /></button></div>
      <label className="search-box">
        <Icon name="search" size={17} />
        <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search conversations" aria-label="Search conversations" />
        <kbd>⌘ K</kbd>
      </label>
      <div className="filter-tabs" role="tablist" aria-label="Conversation filters">
        {['All', 'Unread', 'Groups'].map((filter) => <button key={filter} className={activeFilter === filter ? 'filter-active' : ''} onClick={() => setActiveFilter(filter)} role="tab" aria-selected={activeFilter === filter}>{filter}{filter === 'Unread' && <span className="filter-count">3</span>}</button>)}
      </div>
      <div className="conversation-list">
        <div className="list-label">PINNED <span>⌄</span></div>
        {filteredConversations.map((person) => (
          <button key={person.id} className={`conversation-item ${activeId === person.id ? 'conversation-active' : ''}`} onClick={() => onSelectConversation(person.id)}>
            <Avatar person={person} showStatus />
            <span className="conversation-info"><span className="conversation-top"><strong>{person.name}</strong><time>{person.time}</time></span><span className="conversation-bottom"><span>{person.message}</span>{person.unread > 0 && <b className="unread-count">{person.unread}</b>}</span></span>
          </button>
        ))}
        {filteredConversations.length === 0 && <p className="empty-search">No conversations found.</p>}
      </div>
      <div className="sidebar-bottom">
        <button className="upgrade-card" onClick={onNotice}>
          <span className="upgrade-icon"><Icon name="spark" size={17} /></span><span><strong>Make room for more</strong><small>Upgrade your workspace</small></span><Icon name="chevron" size={17} />
        </button>
        <button className="profile-row" onClick={() => setShowProfile((open) => !open)}>
          <Avatar person={{ initials: 'JD', color: 'indigo' }} />
          <span className="profile-copy"><strong>Jordan Davis</strong><small>jordan@studionorth.co</small></span>
          <Icon name="more" size={19} />
        </button>
        {showProfile && <div className="profile-menu"><Link to="/login" onClick={() => setShowProfile(false)}>Sign in</Link><Link to="/register" onClick={() => setShowProfile(false)}>Create account</Link></div>}
      </div>
    </aside>
  )
}

export default ChatSidebar
