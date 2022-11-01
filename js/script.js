const { createApp } = Vue;

createApp({
    data() {
        return{
            show: true,
            hideCompleted: false,
            hasError: false,
            task: null,
            newTask: {
                text: '',
                done: false
            },
            toDosList: [
                {
                    text: 'Alzarsi dal letto',
                    done: false
                },
                {
                    text: 'Portare fuori il cane',
                    done: false
                },
                {
                    text: 'Correre sui  muri',
                    done: true
                },
                {
                    text: 'Giocare con mia nipote',
                    done: true
                },
                {
                    text: 'Contare i numeri positivi',
                    done: false
                },
                {
                    text: 'Mangiare a mezzanotte',
                    done: false
                }
            ]
        }
    },
    computed: {
        filtered(){
            return this.hideCompleted 
             ? this.toDosList.filter((task) => task.done == false)
           : this.toDosList;
             
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
        }
    }
}).mount('#app');