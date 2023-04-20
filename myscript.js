const Counter = {
    data() {
        return {
            day: 1,
            ToDo:'',
            list: [
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                // ['Replay email','Running','Swimming'],
                // ['Read Book','Brush teeth','Drink water'],
                // ['Start create project','Call Micheal','Review design'],
                // ['Read Book','Brush teeth','Drink water'],
                // ['Get up early','To end project','Call Micheal'],
                // ['Read Book','Brush teeth','Read Book'],
                // ['Read Book','Brush teeth','Read Book'],
            ]
        }
    },
    
    methods: {
        createToDo(){
            if (this.ToDo-='')
            this.list[this.day-1].push(this.ToDo)
            this.ToDo=''
        },
        removeTodo(list,index){
            this.list[list].splice(index,1);
        },
        save(){
            localStorage.setItem('list', JSON.stringify(this.list))
        },
        load(){
            this.list=JSON.parse(localStorage.getItem('list'))
        }
        
    },
    mounted () {
        this.load()
}
}



Vue.createApp(Counter).mount('#app')
