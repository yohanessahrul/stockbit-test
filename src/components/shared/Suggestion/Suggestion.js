import React from 'react'
import classes from './Suggestion.module.scss'

export default function Suggestion(props) {

  if (props.isActiveSuggestion) {
    let suggestion = <div className={classes.Item}>No result !</div>
    if (props.suggestions) {
      suggestion = props.suggestions.map((word, key) => {
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
