import * as React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
moment.locale('ja');
const reactStringReplace = require('react-string-replace');

import i_reducdr from 'src/interface/reducer';

export default () => {
  const state = useSelector(state => state) as i_reducdr;

  return React.useMemo(() => {
    return (
      <>
        <section>
          {state.messageList.list.map((m, i) => {
            return (
              <div key={i}>
                <div className="card">
                  <div className="card-header">
                    <div>
                      <span>uid: </span>
                      <span
                        style={{
                          fontSize: 15,
                          color: 'green',
                          fontWeight: 'bold',
                        }}
                      >
                        {m.uid}
                      </span>
                    </div>
                    <time style={{ fontSize: 15 }}>
                      {moment(new Date(m.createdAt.seconds * 1000)).format(
                        'YYYY-MM-DD HH:mm:ss'
                      )}
                    </time>
                  </div>
                  <div
                    className="card-body"
                    style={{ background: 'rgba(0, 0, 0, 0.03)' }}
                  >
                    <p className="card-text" style={{ whiteSpace: 'pre-line' }}>
                      {reactStringReplace(
                        m.message,
                        /(https?:\/\/\S+)/g,
                        (match: string, j: number) => (
                          <a
                            href={match}
                            key={match + j}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {match}
                          </a>
                        )
                      )}
                    </p>
                  </div>
                </div>
                <br />
              </div>
            );
          })}
        </section>
      </>
    );
  }, [JSON.stringify(state.messageList)]);
};
