import { h } from 'preact';
import Logo from './Logo';

const Drawer = ({ updatedAt }) => (
	<details className="Drawer">
    <summary>
      <div>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>
      </div>
    </summary>
    <div>
      <h3>JavaScript Questions</h3>
      <p>From basic to advanced: test how well you know JavaScript, refresh your knowledge a bit, or prepare for your coding interview.</p>
      <div style={{ borderBottom: '1px solid #e1e4e8', margin: 'auto 0 16px 0', padding: '16px 0'}}>
        <svg width="24" height="24" viewBox="0 0 16 16" version="1.1" aria-hidden="true" fill="currentColor">
          <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
        </svg>
        <br/>
        <br/>
        <p>This PWA is build by <a href="https://github.com/andreruffert">André Ruffert</a>. You can find the{' '}
        <a href="https://github.com/andreruffert/javascript-questions" target="_blank" rel="noopener" aria-label="JavaScript Questions PWA GitHub repository">source code</a> on GitHub.</p>
        <p>Huge thanks to <a href="https://github.com/lydiahallie">Lydia Hallie</a> for creating & maintaining all the "JavaScript Questions" also available on <a href="https://github.com/lydiahallie/javascript-questions">GitHub</a>.</p>
      </div>
      <small>Questions updated at: <code>{updatedAt}</code></small>
    </div>
	</details>
);

export default Drawer;
