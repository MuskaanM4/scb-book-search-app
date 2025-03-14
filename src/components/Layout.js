// layout navbar en footer 
'use client';
import { Layout, Menu } from 'antd';
import Link from 'next/link';

const { Header, Content, Footer } = Layout;

const AppLayout = ({ children }) => {
  const menuItems = [
    { key: '1', label: <Link href="/">Home</Link> },
    { key: '2', label: <Link href="/favorites">Favorites</Link> },
    { key: '3', label: <Link href="/about">About</Link> },
  ];

  return (
    <Layout>
      <Header style={{ width: '100%' }}> 
        <Menu mode="horizontal" items={menuItems} />
      </Header>
      <Content style={{ marginTop: '20px' }}>{children}</Content>
      <Footer style={{ textAlign: 'center' }}>Books Search App ©2025</Footer>
    </Layout>
  );
};
export default AppLayout;