Vue.component('todo-item', {
    template: `
        <li> ID {{id}} / name {{name}} / cours {{cours}} / Date {{trimestre}}</li>
        `,
    props: {
        id: {
            type: Number
        },
        name: {
            type: String
        },
        cours: {
            type: String
        },
        trimestre: {
            type: String
        }
    }
})

var app = new Vue({
    el: '#app',
    data() {
        return {
            name: null,
            cours: "",
            trimestre: null,
            test: "data",
            listsTask: [],
        }
    },
    methods: {
        onSubmit() {
            let todo = {
                name: this.name,
                cours: this.cours,
                trimestre: this.trimestre
            };
            this.listsTask.push(todo);
            this.name = null;
            this.cours = null;
            this.trimestre = null;
        }
    }
})