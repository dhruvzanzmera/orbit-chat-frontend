function Avatar({ person, size = '', showStatus = false }) {
  return (
    <span className={`avatar avatar-${person.color} ${size ? `avatar-${size}` : ''} ${person.group ? 'avatar-group' : ''}`}>
      {person.initials}
      {showStatus && person.online && <i className="status-dot" />}
    </span>
  )
}

export default Avatar
