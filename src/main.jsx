import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Bai1 from './bai_1.jsx'
import Bai2 from './bai_2.jsx'
import Bai3 from './bai_3.jsx'
import Bai4 from './bai_4.jsx'
import Bai5 from './bai_5.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Bai1 />
    <Bai2 />
    <Bai3 />
    <Bai4 />
    <Bai5 />
  </StrictMode>,
)
