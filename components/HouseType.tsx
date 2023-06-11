import { useState } from 'react'

function HouseType() {
  const [input, setInput] = useState('')

  const arr = [
    'Duplex',
    'Bungalow',
    'Flat',
    'Penthouse',
    'Mansion',
    'Single Family Home',
    'Townhouse',
    'Villa',
  ]

  const [houseTable, setHouseTable] = useState(arr)

  return (
    <div className='h-full w-full bg-stone-300 p-5 flex space-x-10'>
      {/* form */}
      <div className='flex-[0.35] bg-[#f7f7f7] h-fit py-5'>
        <h3 className='mx-4 mb-4 text-xl'>Category Form</h3>

        <div className='bg-white w-full px-4 py-6 space-y-4'>
          <h4 className='text-lg'>Name</h4>

          <input
            type='text'
            className='w-full border-2 border-gray-300 p-2 rounded-md outline-none'
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>

        <div className='flex items-center justify-between space-x-3 mt-3 px-4'>
          <button
            className='bg-[#007dff] text-white w-full py-2 rounded-md'
            onClick={() => {
              if (input === '') return
              setHouseTable([...houseTable, input])
            }}
          >
            Save
          </button>

          <button
            className='bg-[#ffbe00] text-white w-full py-2 rounded-md mt-2'
            onClick={() => {
              setInput('')
            }}
          >
            Cancel
          </button>
        </div>
      </div>

      {/* table */}
      <div className='flex-[0.63] bg-white h-fit py-5 px-5'>
        <h3 className='mx-4 mb-4 text-xl'>Category Table</h3>

        <table className='w-full'>
          <thead>
            <tr className='border-b-2 border-gray-300 text-left'>
              <th>S.No</th>
              <th className='py-3 text-left'>Name</th>
              <th className='py-3 text-left'>Action</th>
            </tr>
          </thead>

          <tbody>
            {houseTable.map((item, index) => (
              <tr className='border-b-2 border-gray-300' key={item}>
                <td className='p-3'>{index + 1}.</td>
                <td className='p-3'>{item}</td>
                <td className='p-3'>
                  <button
                    className='bg-[#007dff] text-white px-3 py-1 rounded-md'
                    onClick={() => {
                      // item value to input and remove from table
                      setInput(item)

                      const newTable = houseTable.filter(
                        (item, i) => i !== index
                      )

                      setHouseTable(newTable)
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className='bg-[#ffbe00] text-white px-3 py-1 rounded-md ml-2'
                    onClick={() => {
                      const newTable = houseTable.filter(
                        (item, i) => i !== index
                      )
                      setHouseTable(newTable)
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default HouseType
