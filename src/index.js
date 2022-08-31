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
function createTodo(id, content, isCompleted, category, tags) {}

/**
 * @description 모든 할 일을 조회하는 함수
 * @return {todoData[]} - 조회하려는 Todo 리스트
 */
function getAllTodos() {}

/**
 * @description ID를 기반으로 특정 할 일을 조회하는 함수
 * @param {number} id - Todo 아이디
 * @return {todoData} - 조회하려는 단일 Todo
 */
function getTodo(id) {}

/**
 * @description ID를 제외한 모든 속성을 수정할 수 있는 함수
 * @param {number} id - Todo 아이디
 * @param {string} content - 내용
 * @param {boolean} isCompleted - 완료여부
 * @param {string} category - 카테고리
 * @param {string[]} [tags] - 태그 리스트
 */
function updateTodo(id, content, isCompleted, category, tags) {}

/**
 * 모든 할 일을 제거하는 함수
 */
function deleteAllTodos() {}

/**
 * @description ID를 기반으로 특정 할 일을 삭제하는 함수
 * @param {number} id - Todo 아이디
 * @param {number} [tagIndex] - 태그의 인덱스
 * @param {boolean} isDeleteAllTags - 특정 할 일의 모든 태그 삭제 여부
 */
function deleteTodo(id, tagIndex, isDeleteAllTags) {}
