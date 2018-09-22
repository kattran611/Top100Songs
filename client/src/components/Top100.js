import React from 'react';

const styles = {
  complete: {
    textDecoration: 'line-through',
    color: 'grey'
  },
  pointer: {cursor: 'pointer'}
}

const Top100 = ({id, complete, name, updateTop100, deleteTop100}) => (
  <div className="col s12">
    <div className="col m8">
      <div style={complete ? styles.complete : {}} className="center">
        {name}
      </div>
    </div>
    <div className="col m2">
      <input
        id={`song-${id}`}
        type="checkbox"
        defaultChecked={complete}
        onClick={() => updateTop100(id)}
      />
      <label htmlFor={`song-${id}`}>Complete?</label>
    </div>
    <div style={styles.pointer} className="col m1" onClick={() => deleteTop100(id)}>
      X
    </div>
  </div>
)

export default Top100
