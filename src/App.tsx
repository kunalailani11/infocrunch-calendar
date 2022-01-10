import { Layout, Row, Col, Calendar } from 'antd';
import CustomCalendar from "./components/Calendar";
import './App.css';

const { Content, Header } = Layout;

const App = () => {
  return (
    <Layout className='app-layout'>      
    <Header className='app-header'>
      <h2>January 2022</h2></Header>
      <Content>
        <Row className='container'>
          <Col span={6}>
            <Calendar fullscreen={false} />
          </Col>
          <Col span={18}>
            <CustomCalendar />
          </Col>
        </Row>      
      </Content>      
    </Layout>
  )
}

export default App;
