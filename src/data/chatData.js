export const conversations = [
  { id: 1, name: 'Olivia Rhye', initials: 'OR', color: 'lavender', message: 'That sounds like a plan! ✨', time: '2:41 PM', unread: 2, online: true, email: 'olivia.rhye@email.com', role: 'Product Designer', group: false },
  { id: 2, name: 'Phoenix Baker', initials: 'PB', color: 'peach', message: 'Sent you the latest files', time: '1:18 PM', unread: 0, online: true, email: 'phoenix.baker@email.com', role: 'Engineering Lead', group: false },
  { id: 3, name: 'Lana Steiner', initials: 'LS', color: 'rose', message: 'You: Perfect, thank you!', time: '12:52 PM', unread: 0, online: false, email: 'lana.steiner@email.com', role: 'Marketing Manager', group: false },
  { id: 4, name: 'Design team', initials: 'DT', color: 'mint', message: 'Demi: New mockups are ready 👀', time: '11:30 AM', unread: 4, online: true, email: '6 members', role: 'Group conversation', group: true },
  { id: 5, name: 'Demi Wilkinson', initials: 'DW', color: 'blue', message: 'Haha absolutely!', time: 'Yesterday', unread: 0, online: false, email: 'demi.wilkinson@email.com', role: 'UX Researcher', group: false },
  { id: 6, name: 'Candice Wu', initials: 'CW', color: 'gold', message: 'Voice message · 0:24', time: 'Yesterday', unread: 0, online: true, email: 'candice.wu@email.com', role: 'Product Manager', group: false },
  { id: 7, name: 'Alexis Lee', initials: 'AL', color: 'sky', message: 'See you tomorrow!', time: 'Tuesday', unread: 0, online: false, email: 'alexis.lee@email.com', role: 'Illustrator', group: false },
]

export const initialMessages = {
  1: [
    { id: 1, from: 'them', text: 'Hey! I just shared the new project brief with you. Would love to get your thoughts when you have a minute.', time: '2:32 PM' },
    { id: 2, from: 'me', text: 'Just had a look — the direction is looking really strong. I especially love the way you’ve approached the onboarding flow.', time: '2:36 PM' },
    { id: 3, from: 'them', text: 'Ahh glad you like it! I was thinking we could sync up tomorrow and go through the details together?', time: '2:39 PM' },
    { id: 4, from: 'me', text: 'That sounds perfect. I’ll put some time on the calendar for us.', time: '2:40 PM' },
    { id: 5, from: 'them', text: 'That sounds like a plan! ✨', time: '2:41 PM' },
  ],
}
