import React from 'react'
import Animation from '../components/Animation'

const About = () => {
  return (
    <div className='about'>
      <h1>About IDK</h1>
      <article>
        <p><strong>IDK which stands for I Don't Know,</strong> is a classic Q&A game with hundreds of themes, categories and questions to test the knowledge of all the savy users
          that come to play.</p>
        <br/>
        <p>With <strong>three</strong> different <strong>levels of difficulty</strong> and a multiple choice style of answers, users can test their cultural knowledge
          on a wide variety of <strong>themes:</strong></p>
        <ul className='themesList'>
          <li>Generall knowledge</li>
          <li>Entertainment</li>
          <li>Science</li>
          <li>Sports</li>
          <li>History</li>
          <li>...and much more</li>
        </ul>
      </article>

      <footer>
        <p> IDK is based on Trivia Games API. You can visit the library <a href='https://opentdb.com/' target='blank'>here</a></p>
        <p> This website and the game IDK have been created by &copy; Henalu Paes de Barros</p>
      </footer>
      <Animation/>
    </div>
  )
}

export default About
