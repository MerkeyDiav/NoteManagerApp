import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import React from 'react'
import  {store}  from './store/store.jsx'
import {Provider} from "react-redux";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import PageNotFound from './Pages/PageNotFound.jsx'
import Note from './Pages/Note.jsx';
import NoteCreate from "./Pages/NoteCreate.jsx";
import NoteBrowse from './Pages/NoteBrowse.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<App />}>
              <Route path="/" element={<NoteBrowse/>} />
              <Route path="/note/:id" element={<Note />} />
              <Route path="/note/new" element={<NoteCreate />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
  </React.StrictMode>,
)
