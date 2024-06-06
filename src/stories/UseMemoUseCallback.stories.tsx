import React, { useCallback, useMemo, useState } from "react";

export default {
	title: 'useMemo'
}




const UsersSecret = (props: { users: Array<string> }) => {
	console.log('USERS SECRET')
	return <div>
		{props.users.map((u, i) => <div key={i}>{u}</div>)}
	</div>
}

const Users = React.memo(UsersSecret)

export const DifficultCountingExample1 = () => {
	const [a, setA] = useState(5)
	const [b, setB] = useState(5)

	let resultA = 1;
	let resultB = 1;


	resultA = useMemo(() => {
		let tempResultA = 1;
		for (let i = 1; i <= a; i++) {
			let fake = 0
			while (fake < 10000000) {
				fake++
				const fakeValue = Math.random
			}
			tempResultA = tempResultA * i
		}
		return tempResultA
	}, [a])



	for (let i = 1; i <= b; i++) {
		resultB = resultB * i
	}

	return (
		<>
			<input value={a} onChange={(e) => setA(Number(e.currentTarget.value))} />
			<input value={b} onChange={(e) => setB(+e.currentTarget.value)} />
			<hr />

			Result A: {resultA}
			Result B: {resultB}
		</>


	)
}

export const HelpsToReactMemo = () => {
	console.log('HelpsToReactMemo')
	let [counter, setCounter] = useState(0)
	let [users, setUsers] = useState(['user1', 'user2f', 'user3', 'user4'])

	const newArray = useMemo(() => {
		const newArray = users.filter(u => u.toLowerCase().indexOf('f') > -1)
		return newArray
	}, [users])

	const addUser = () => {
		const newUser = [...users, 'Svetaf ' + new Date().getTime()]
		setUsers(newUser)
	}

	return <div>
		<button onClick={() => setCounter(++counter)}>+</button>
		<button onClick={addUser}>add user</button>
		{counter}
		<Users users={newArray} />
	</div>
}

export const LikeUseCallback = () => {
	console.log('HelpsToReactMemo')
	let [counter, setCounter] = useState(0)
	let [books, setBooks] = useState(['react', 'css', 'redux', 'html'])


	const memoizedAddBook = useMemo(() => {
		return () => {
			console.log(books);
			const newBook = [...books, 'Angular ' + new Date().getTime()]
			setBooks(newBook)
		}
	}, [books])

	const memoizedAddBook2 = useCallback(() => {
			console.log(books);
			const newBook = [...books, 'Angular ' + new Date().getTime()]
			setBooks(newBook)
	}, [books])

	return <div>
		<button onClick={() => setCounter(++counter)}>+</button>

		{counter}
		<Book addBook={memoizedAddBook2} />
	</div>
}

type BookSecretType = {
	// books: Array<string>
	addBook: () => void
}

const BooksSecret = (props: BookSecretType) => {
	console.log('BOOKS SECRET')
	return <div>
		<button onClick={props.addBook}>add book</button>
	</div>
}

const Book = React.memo(BooksSecret)