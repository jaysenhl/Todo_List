const sandboxApp = Vue.createApp({
    data(){
        return {
            title : 'Recordatorios',
            text : '',
            metas : [],
            total : 0,
            picked : ''
        }
    },
    methods: {
        Anadir(){
            this.metas.push(this.text);
            this.text = '';
            this.total++;
        },
        Remove(ind){
            this.metas.splice(ind,1);
            this.total--;
        },
        BorrarTodo(ind){
            this.metas.splice(ind);
            this.total = 0;
        }
    }
})

sandboxApp.mount('#main')