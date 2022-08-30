import classes from './Header.module.css';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { authAction } from '../store';
const Header = () =>
{
  const dispatch = useDispatch()
  const logout = authAction.logout()
  const logouHandler = () =>
  {
    dispatch(logout)
  }
  const isAuth = useSelector(state => state.auth.isAuth)
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth && <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={logouHandler}>Logout</button>
          </li>
        </ul>
      </nav>}
    </header>
  );
};

export default Header;
