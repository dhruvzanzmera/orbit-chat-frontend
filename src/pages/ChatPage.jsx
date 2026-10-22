import { useState } from 'react'
import ChatSidebar from '../components/ChatSidebar.jsx'
import ChatWindow from '../components/ChatWindow.jsx'
import { conversations, initialMessages } from '../data/chatData.js'

function ChatPage() {
  const [activeId, setActiveId] = useState(1)
  const [draft, setDraft] = useState('')
  const [mobileSidebar, setMobileSidebar] = useState(false)
  const [messages, setMessages] = useState(initialMessages)
  const [notice, setNotice] = useState('')
  const activePerson = conversations.find((person) => person.id === activeId) || conversations[0]
  const activeMessages = messages[activeId] || []

  function sendMessage(event) {
    event.preventDefault()
    const text = draft.trim()
    if (!text) return
    const next = { id: Date.now(), from: 'me', text, time: new Intl.DateTimeFormat('en', { hour: 'numeric', minute: '2-digit' }).format(new Date()) }
    setMessages((current) => ({ ...current, [activeId]: [...(current[activeId] || []), next] }))
    setDraft('')
  }

  function showUpgradeNotice() {
    setNotice('You’re already enjoying the Orbit demo.')
    window.setTimeout(() => setNotice(''), 2600)
  }

  return (
    <main className="app-shell">
      <ChatSidebar
        conversations={conversations}
        activeId={activeId}
        onSelectConversation={(id) => { setActiveId(id); setMobileSidebar(false) }}
        isOpen={mobileSidebar}
        onClose={() => setMobileSidebar(false)}
        onNotice={showUpgradeNotice}
      />
      <ChatWindow
        person={activePerson}
        messages={activeMessages}
        draft={draft}
        onDraftChange={setDraft}
        onSendMessage={sendMessage}
        onOpenSidebar={() => setMobileSidebar(true)}
      />
      {notice && <div className="toast" role="status">{notice}</div>}
      {mobileSidebar && <button className="sidebar-backdrop" aria-label="Close sidebar" onClick={() => setMobileSidebar(false)} />}
    </main>
  )
}

export default ChatPage
