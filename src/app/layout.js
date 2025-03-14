// layout voor hele webapp
'use client';
import { Layout } from 'antd';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import store from '../redux/store'; 
import AppLayout from '../components/Layout'; 


const { Content } = Layout;

const App = ({ children }) => {
  return (
    <Provider store={store}>
      <html lang="en">
        <body>
          <ToastContainer />
          <AppLayout>
            <Layout>
              <Content>{children}</Content>
            </Layout>
          </AppLayout>
        </body>
      </html>
    </Provider>
  );
};

export default App;