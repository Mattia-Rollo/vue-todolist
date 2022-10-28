const { createApp } = Vue

const app = createApp({
    data() {
        return{
            toDosList: [
                {
                    text: 'fare la cacca',
                    done: false
                }
            ]
        }
    },
    methods: {

    }
}).mount('#app');