import React from 'react'

function Create({match}) {
  return (
    <div>
      {match.params.id}
    </div>
  )
}

export default Create
