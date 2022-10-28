const { createApp } = Vue;

createApp({
    data() {
        return{
            class: '',
            hasError: false,
            task: null,
            newTask: {
                text: '',
                done: false
            },
            toDosList: [
                {
                    text: 'fare la cacca',
                    done: false
                },
                {
                    text: 'mangiare',
                    done: false
                },
                {
                    text: 'lavarsi',
                    done: false
                }
            ]
        }
    },
    methods: {
        
        addTask(){
            if(this.newTask.text.length > 3){
            
            this.toDosList.unshift(this.newTask);
            this.newTask = {
                text: '',
                done: false
            };
            this.hasError = false;

        }else{
            this.hasError = true; 
        }},
        removeTask(i) {
            this.toDosList.splice(i,1);
        },
        checkTask(i){
            if(!this.toDosList[i].done){
            this.toDosList[i].done = true;
            } else {
                this.toDosList[i].done = false;
            }

        }
    }
}).mount('#app');