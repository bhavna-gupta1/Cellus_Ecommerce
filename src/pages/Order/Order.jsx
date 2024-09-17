import React,{useContext} from 'react'
import myContext from '../../context/data/MyContext'
import Layout from '../../components/Layout/Layout';
function Order() {
  const context = useContext(myContext)
  console.log(context,"context") // {name: 'Kamal Nayan', class: '9 C'}
  // Destructure 
  const { name ,rollno} = context || {};
  
  console.log(name,"contectname") // Kamal Nayan
  return (
    <Layout>
      <p>{name ? `Name: ${name}` : 'Name not found'}</p>
      <p>{name ? `Roll No: ${rollno}` : 'Name not found'}</p>
    </Layout>
  )
}

export default Order