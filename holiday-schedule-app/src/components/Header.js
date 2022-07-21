import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({title, onAdd, showAdd}) => {
  return (
    <header className= 'header'>
    <h1 >{title}</h1>
    <Button color ={ showAdd ? 'Black': '#7BB661'} text = {showAdd ? 'Close' : 'Add'} onClick = {onAdd}/>

      
    </header>
  )
}

Header.defaultProps = {
    title:'Holiday Schedules'
}

Header.propTypes = {
    title : PropTypes.string.isRequired,
}
export default Header
