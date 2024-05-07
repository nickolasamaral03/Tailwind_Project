import { useState } from "react";

import ArticleList from "./Components/Header/ArticlesList/ArticleList";
import Header from "./Components/Header/Header";
import Form from "./Components/Header/Form/Form";

const App = () => {
  const [user, setUser] = useState()
  const hasUser = Boolean(user)

  return(
    <div className="h-screen">
      <Header user={user}/>
      {hasUser && <ArticleList/>}
      {hasUser || <Form onSubmit={setUser}/>}
    </div>
  )
}

export default App;