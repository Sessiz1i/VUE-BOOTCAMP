import axios from "axios";

const baseUrl = 'http://localhost:3000/'
export default {
    namespaced: true,
    state: {
        todos: []
    },
    getters: {
        getTodos(state) {
            return state.todos
        },
        getTodo(state, id) {
            return state.todos.find(i => i.title === id)
        }
    },
    mutations: {
        /* todo ID üretmeye bir örnek
        setTodo(state, payload) {
            state.todos.push({id: parseInt(Date.now().toString().slice(-4)), ...payload})
            console.log(state.todos)
        },
         */
        setTodo(state, todo) {
            // todo birden fazla todo gelirse
            if (todo.length > 1) state.todos.push(...todo)
            // todo tek todo gelirse
            else state.todos.push(todo)
        },
        updateTodo(state, updateData) {
            if (updateData.id) {
                const updateTodoIndex = state.todos.findIndex(i => i.id === updateData.id)
                if (updateTodoIndex >= 0) state.todos.map(i => {
                    if (i.id === updateData.id) {
                        i.completed = !i.completed;
                    }
                })
            }
        },
        removeTodo(state, todoID) {
            if (todoID) {
                const deleteTodoIndex = state.todos.findIndex(i => i.id === todoID)
                if (deleteTodoIndex >= 0) state.todos.splice(deleteTodoIndex, 1)
            }
        }
    },
    actions: {
        getTodos({commit, state}) {
            if (state.todos.length < 1) axios.get(`${baseUrl}todos`).then(res => {
                if (res?.status === 200 && res.data.length > 0) commit('setTodo', res.data)
            }).catch(err => alert(err))
        },
        addTodo({commit}, newTodo) {
            if (newTodo) axios.post(`${baseUrl}todos`, newTodo).then(res => {
                if (res?.status === 201) commit("setTodo", res?.data)
            }).catch(err => alert(err))
        },
        updateTodo({commit}, todo) {
            const updateTodo = {...todo, completed: !todo.completed}
            if (todo?.id) axios.put(`${baseUrl}todos/${todo.id}`, updateTodo).then(res => {
                if (res.status === 200) commit('updateTodo', res.data)
            }).catch(err => alert(err))
        },
        deleteTodo({commit}, todoID) {
            if (todoID) axios.delete(`${baseUrl}todos/${todoID}`).then(res => {
                if (res.status === 200) commit('removeTodo', todoID)
            })
        }
    },
}