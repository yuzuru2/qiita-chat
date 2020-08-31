import * as React from 'react';

export default () => {
  return React.useMemo(() => {
    return (
      <>
        <aside>
          <div
            style={{
              width: '80%',
              margin: '0 auto',
              textAlign: 'center',
              border: '1px solid gray',
              background: 'rgba(0, 0, 0, 0.03)',
            }}
          >
            <a href="https://www.youtube.com/channel/UCuRrjmWcjASMgl5TqHS02AQ/videos">
              管理人のYouTube
            </a>

            <br />
            <br />
            <a href="https://twitter.com/yuzuru_program">管理人のTwitter</a>
            <br />
            <br />

            <a href="https://qiita.com/yuzuru2">管理人のQiita</a>
            <br />
            <br />

            <a href="https://line.me/ti/p/-GXpQkyXAm">管理人のLINE</a>
            <br />
            <br />

            <a href="https://qiita.com/yuzuru2/items/b5a34ad07d38ab1e7378">
              管理人の成果物まとめ
            </a>
            <br />
            <br />
          </div>
        </aside>
      </>
    );
  }, [location.href]);
};
