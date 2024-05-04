import { Outlet } from 'react-router-dom';
import Navbar from '../common/Navbar';
import Container from './Container';

const MainLayout = () => {
    return (
      <Container>
        <Navbar />
        <Outlet />
      </Container>
    );
};

export default MainLayout;