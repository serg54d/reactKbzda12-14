import { StateType, TOGGLE_COLLAPSED, reducer } from "./reducer"

test('collapsded should be true', () => {
	// data
	const state: StateType = {
		collapsed: false
	}

	// action
	const newState = reducer(state, { type: TOGGLE_COLLAPSED })


	// expection
	expect(newState.collapsed).toBe(true)

})

test('collapsded should be false', () => {
	// data
	const state: StateType = {
		collapsed: true
	}

	// action
	const newState = reducer(state, { type: TOGGLE_COLLAPSED })


	// expection
	expect(newState.collapsed).toBe(false)

})

test('reducer should throw error bacause action type is incorrect', () => {
	// data
	const state: StateType = {
		collapsed: true
	}
	// action
	expect(() => {
		reducer(state, { type: 'FAKE Type' })
	}).toThrowError()
})