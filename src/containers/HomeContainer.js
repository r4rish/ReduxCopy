import Home from '../components/Home'
import {connect} from 'react-redux'
import {addToCart} from '../service/actions/actions'
import { removeToCart } from '../service/actions/actions'

const mapStateToProps=state=>({
    // data:state.cardItems
})
const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data)),
    removeToCartHandler:data=>dispatch(removeToCart(data))

})
export default connect(mapStateToProps,mapDispatchToProps)(Home)
// export default Home;