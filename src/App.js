import {Component} from 'react'
import UserProfile from './components/UserProfile'

import './App.css'

const intialUserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://i.im.ge/2024/05/15/KQ9VRp.IMG-20230610-231717-457.jpeg',
    name: 'Praveen',
    role: 'Software Developer',
  },
  {
    uniqueNo: 2,
    imageUrl:
      'https://i.im.ge/2024/05/16/KTodi1.Cricketer-Rohit-Sharma-2023.webp',
    name: 'Rohit Sharma',
    role: 'Cricketer',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://i.im.ge/2024/05/16/KTojca.jadeja.jpeg',
    name: 'Ravindra Jadeja',
    role: 'Cricketer',
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://i.im.ge/2024/05/16/KToSXP.ram-charan.jpeg',
    name: 'Ram Charan',
    role: 'Cinema Actor',
  },
  {
    uniqueNo: 5,
    imageUrl: 'https://i.im.ge/2024/05/16/KTo8CY.kohli.jpeg',
    name: 'Virat Kohli',
    role: 'Criketer',
  },
  {
    uniqueNo: 6,
    imageUrl: 'https://i.im.ge/2024/05/16/KToy26.msd.webp',
    name: 'MS Dhoni',
    role: 'Criketer',
  },
  {
    uniqueNo: 7,
    imageUrl: 'https://i.im.ge/2024/05/16/KToU2T.siraj.jpeg',
    name: 'Mohammed Siraj',
    role: 'Criketer',
  },
  {
    uniqueNo: 8,
    imageUrl: 'https://i.im.ge/2024/05/16/KTo77r.bumra.jpeg',
    name: 'Jasprith Bumrah',
    role: 'Criketer',
  },
  {
    uniqueNo: 9,
    imageUrl: 'https://i.im.ge/2024/05/16/KTosGm.sanju.jpeg',
    name: 'Sanju Samson',
    role: 'Criketer',
  },
  {
    uniqueNo: 10,
    imageUrl: 'https://i.im.ge/2024/05/16/KToOwq.pathirana.jpeg',
    name: 'M Patheerana',
    role: 'Criketer',
  },
]

class App extends Component {
  state = {searchInput: '', userDetailsList: intialUserDetailsList}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onDeleteUser = uniqueNo => {
    const {userDetailsList} = this.state
    const filteredusersData = userDetailsList.filter(
      each => each.uniqueNo !== uniqueNo,
    )
    this.setState({userDetailsList: filteredusersData})
  }

  render() {
    const {searchInput, userDetailsList} = this.state
    console.log(searchInput)
    const searchResults = userDetailsList.filter(eachList =>
      eachList.name.includes(searchInput),
    )
    return (
      <div className="main-container">
        <div className="app-container">
          <h1 className="title">Users List</h1>
          <input
            type="search"
            onChange={this.onChangeSearchInput}
            value={searchInput}
            placeholder="Search User"
            className="search-input"
          />
          <ul className="list-container">
            {searchResults.map(eachUser => (
              <UserProfile
                userDetails={eachUser}
                key={eachUser.uniqueNo}
                onDeleteUser={this.onDeleteUser}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default App
