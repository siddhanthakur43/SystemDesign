import React, { useEffect, useState } from 'react'
import { table_data } from './data';

const Crud = () => {
    const [data, setData] = useState([]);
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [age, setAge] = useState(0)
    const [isUpdate, setIsUpdate] = useState(false);
    const [id, setId] = useState(null);

    useEffect(() => {
        setData(table_data);
    }, [])

    const handleEdit = (id) => {
        setIsUpdate(true);
        const dt = data.filter((item) => item.id === id);
        setId(id);
        setFirstName(dt[0].firstName)
        setLastName(dt[0].lastName)
        setAge(dt[0].age)
    }

    const handleUpdate = () => {
        const index = data.map((item) => {
            return item.id
        }).indexOf(id);
        const dt = [...data];
        dt[index].firstName = firstName;
        dt[index].lastName = lastName;
        dt[index].age = age;
        setData(dt);
        handleClear()
    }

    const handleDelete = (id) => {
        const dt = data.filter((item) => item.id !== id)
        setData(dt);
    }

    const handleSave = (e) => {
        e.preventDefault();
        const dt = [...data];
        const newObj = {
            id: data.length + 1,
            firstName: firstName,
            lastName: lastName,
            age: age
        }
        dt.push(newObj)
        setData(dt);
    }

    const handleClear = () => {
        setId(0);
        setFirstName('')
        setLastName('')
        setAge('')
        setIsUpdate(false);
    }

  return (
      <div className='m-5'>
          <div>
              <label>FirstName</label>
              <input value={firstName} className='border border-black' type="text" onChange={(e) => setFirstName(e.target.value)} />
              <label>LastName</label>
              <input value={lastName}  className='border border-black' type="text" onChange={(e) => setLastName(e.target.value)}  />
              <label>Age</label>
              <input value={age} className='border border-black' type="number" onChange={(e) => setAge(e.target.value)} />
              { !isUpdate ? <button onClick={(e) => handleSave(e)}>Save</button> :
              <button onClick={() => handleUpdate()}>Update</button>}
              <button onClick={() => handleClear()}>Clear</button>
          </div>
          <div className='m-5'>
              <table className='table-fixed'>
                  <thead>
                      <tr>
                          <th>ID</th>
                          <th>FirstName</th>
                          <th>LastName</th>
                          <th>Age</th>
                          <th>Actions</th>
                      </tr>
                  </thead>
                  <tbody>
                      {
                          data.map((item, index) => {
                              return (
                                  <tr key={index}>
                                      <td>{item.id}</td>
                                      <td>{item.firstName}</td>
                                      <td>{item.lastName}</td>
                                      <td>{item.age}</td>
                                      <td>
                                          <button className='bg-blue-500 text-white m-2 mr-2 p-2 cursor-pointer' onClick={() => handleEdit(item.id)}>Edit</button>
                                          <button className='bg-red-500 text-white p-2 cursor-pointer' onClick={() => handleDelete(item.id)}>Delete</button>
                                      </td>
                                  </tr>
                              )
                          })
                      }
                  </tbody>
              </table>
          </div>
    </div>
  )
}

export default Crud