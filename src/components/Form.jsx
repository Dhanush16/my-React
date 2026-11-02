import React, {useState} from 'react'

function Form() {
  const [text, setText] = useState('')

  return (
    <div>
      <form>
        <label>
          Name:
          <input onChange={(e) => {setText(e.target.value)}} type="text" value={text} />
          <h1>{text}</h1>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Form