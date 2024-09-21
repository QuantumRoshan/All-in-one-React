import PropTypes from 'prop-types'

const Cards = ({ children }) => {
  return <div className="">{children}</div>
}

Cards.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Cards
