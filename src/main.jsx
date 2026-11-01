import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles.css';

class ErrorBoundary extends React.Component {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() {
    if (!this.state.failed) return this.props.children;
    return <div role="alert" style={{ maxWidth: 560, margin: '12vh auto', padding: 28, background: '#fff', border: '1px solid #e5e7e9', borderRadius: 8, fontFamily: 'Arial, Microsoft YaHei, sans-serif', color: '#25292d' }}>
      <h1 style={{ fontSize: 20, margin: '0 0 10px' }}>页面暂时无法继续显示</h1>
      <p style={{ fontSize: 14, lineHeight: 1.7, color: '#71767b', margin: '0 0 18px' }}>本次导入的数据只保留在页面内存中，刷新会清除已导入内容和手动修正。请刷新重试；若问题持续出现，请重新导入结单。</p>
      <button type="button" onClick={() => location.reload()} style={{ padding: '10px 16px', border: 0, borderRadius: 4, background: '#db0011', color: '#fff', cursor: 'pointer' }}>重新加载</button>
    </div>;
  }
}

createRoot(document.getElementById('root')).render(<React.StrictMode><ErrorBoundary><App/></ErrorBoundary></React.StrictMode>);
