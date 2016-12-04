import React from 'react'
import SearchForm from './SearchForm'
import Users from './Users'
import Repos from './Repos'
import Flash from './Flash'

const App = () => {
  // console.log('App render');
  return(
    <div>
      <SearchForm />
      <Users />
      <Repos />
      <Flash />
    </div>
  )
}

export default App
