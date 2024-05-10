import React, { useState } from 'react';

export default {
	title: 'React.memo demo',
}

const NewMessageCounter = (props: { count: number }) => {
	return <div>{props.count}</div>
}

const UsersSecret = (props: { users: Array<string> }) => {
	console.log('USERS')
	return <div>
		{props.users.map((u, i) => <div key={i}>{u}</div>)}
	</div>
}

const Users = React.memo(UsersSecret)

export const Example1 = () => {
	let [counter, setCounter] = useState(0)
	let [users, setUsers] = useState(['user1', 'user2', 'user3', 'user4'])

	const addUser = () => {
		const newUser = [...users, 'Sveta ' + new Date().getTime()]
		setUsers(newUser)
	}

	return <div>
		<button onClick={() => setCounter(++counter)}>+</button>
		<button onClick={addUser}>add user</button>
		<NewMessageCounter count={counter} />
		<Users users={users} />
	</div>
}