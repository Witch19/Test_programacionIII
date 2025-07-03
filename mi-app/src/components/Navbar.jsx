import { Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  return (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
      <Menu.Item >Gestion de posts</Menu.Item>
      <Menu.Item key="/"> <Link to="/">Home</Link></Menu.Item>
      <Menu.Item key="/listado"> <Link to="/listado">Listado</Link></Menu.Item>
      <Menu.Item key="/crear"> <Link to="/crear">Crear</Link></Menu.Item>
      <Menu.Item key="/estadisticas"> <Link to="/estadisticas">Estadisticas</Link></Menu.Item>
      <Menu.Item key="/informacion"> <Link to="/informacion">Informacion</Link></Menu.Item>
    </Menu>
  );
}

