import axios from 'axios';

const Base_Url = 'url/todo';

/**
 * @typedef {Object} todoData
 * @property {string} id - Todo 아이디
 * @property {string} content - 내용
 * @property {boolean} isCompleted - 완료여부
 * @property {boolean} category - category
 * @property {string[]} [tags] - 태그 리스트
 */

/**
 * @description 할 일을 추가하는 함수
 * @param {number} id - Todo 아이디
 * @param {string} content - 내용
 * @param {boolean} isCompleted - 완료여부
 * @param {string}  category - 카테고리
 * @param {string[]} [tags] - 태그 리스트
 */
export async function createTodo(id, content, isCompleted, category, tags) {
	if (!isCompleted) return;

	try {
		const response = await axios.post(`${Base_Url}/${id}`, {
			content,
			category,
			tags,
		});
		return response;
	} catch (error) {
		throw new Error(error);
	}
}

/**
 * @description 모든 할 일을 조회하는 함수
 * @return {todoData[]} - 조회하려는 Todo 리스트
 */
export async function getAllTodos() {
	try {
		const response = await axios(Base_Url);
		return response;
	} catch (error) {
		throw new Error(error);
	}
}

/**
 * @description ID를 기반으로 특정 할 일을 조회하는 함수
 * @param {number} id - Todo 아이디
 * @return {todoData} - 조회하려는 단일 Todo
 */
export async function getTodo(id) {
	try {
		const response = await axios(`${Base_Url}/${id}`);
		return response;
	} catch (error) {
		throw new Error(error);
	}
}

/**
 * @description ID를 제외한 모든 속성을 수정할 수 있는 함수
 * @param {number} id - Todo 아이디
 * @param {string} content - 내용
 * @param {boolean} isCompleted - 완료여부
 * @param {string} category - 카테고리
 * @param {string[]} [tags] - 태그 리스트
 */
export async function updateTodo(id, content, isCompleted, category, tags) {
	if (!isCompleted) return;

	try {
		const response = await axios.put(`${Base_Url}/${id}`, {
			content,
			category,
			tags,
		});
		return response;
	} catch (error) {
		throw new Error(error);
	}
}

/**
 * 모든 할 일을 제거하는 함수
 */
export function deleteAllTodos() {
	try {
		axios.delete(Base_Url);
	} catch (error) {
		throw new Error(error);
	}
}

/**
 * @description ID를 기반으로 특정 할 일을 삭제하는 함수
 * @param {number} id - Todo 아이디
 * @param {number} [tagIndex] - 태그의 인덱스
 * @param {boolean} isDeleteAllTags - 특정 할 일의 모든 태그 삭제 여부
 */
export function deleteTodo(id, tagIndex, isDeleteAllTags) {
	// tag의 id를 받는 것이 조금 더 바람직 했을 듯 하다.
	// Tag의 삭제 함수를 따로 만드는 것이 조금 더 좋았을 것 같다.
}

// ***** 위 사항을 적용 한 새 함수 작성  *****

/**
 * @description ID를 기반으로 특정 할 일을 삭제하는 함수
 * @param {number} id - Todo 아이디
 */
export function deleteTodo(id) {
	try {
		axios.delete(`${Base_Url}/${id}`);
	} catch (error) {
		throw new Error(error);
	}
}

/**
 * @description 특정 할 일의 태그를 삭제하는 함수
 * @param {number} id - Todo 아이디
 * @param {number} [tagIndex] - 태그의 인덱스
 * @param {boolean} isDeleteAllTags - 특정 할 일의 모든 태그 삭제 여부
 */
export function deleteTag(id, tagId) {
	try {
		axios.delete(`${Base_Url}/${id}/tags?tagId=${tagId}`);
	} catch (error) {
		throw new Error(error);
	}
}

/**
 * @description 특정 할 일의 모든 태그를 삭제하는 함수
 * @param {number} id - Todo 아이디
 * @param {number} [tagIndex] - 태그의 인덱스
 */
export function deleteAllTag(id) {
	try {
		axios.delete(`${Base_Url}/${id}/tags`);
	} catch (error) {
		throw new Error(error);
	}
}
