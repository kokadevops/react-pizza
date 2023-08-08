import { Link } from "react-router-dom"
import SearchOrder from "../features/order/SearchOrder"

const Header = () => {
  return (
    <header>
      <Link to='/'>LOGO COMPANY</Link>
      <SearchOrder/>
      <h3>KokaDevops</h3>

    </header>
  )
}
export default Header