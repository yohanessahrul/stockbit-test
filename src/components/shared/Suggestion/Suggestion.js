import React from 'react'
import classes from './Suggestion.module.scss'

export default function Suggestion(props) {

  if (props.isActiveBackdrop) {
    let suggestion = null
    if (props.suggestions) {
      suggestion = props.suggestions.map((word, key) => {
        console.log(`word`, word)
        return (
          <div
            onClick={() => props.clickedToChangeTitle(word.Title)}
            className={classes.Item}
            key={key}>
              {word.Title}
          </div>
        )
      })
    }

    return (
      <div className={classes.Wrapper}>
        {suggestion}
      </div>
    )
  } else {
    return null
  }
}
