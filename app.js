const app = Vue.createApp({
    data() {
        return {
            input1: '',
            input2: '',      
            show: true,   
            visibleSelect: 'visible',          
        }

    },
    computed: {
        pclass(){
            if (this.input1 == 'user1') {
                return 'user1'
            } else if (this.input1 == 'user2') {
                return 'user2'
            }
        },
        backgroundColor(){
            if (this.input2 !== ''){
                return "background-color:"+this.input2
            }
            
        }      
    },
    methods : {
        togglePara(){            
            this.show = !this.show; 
            console.log(this.show)
            if (this.show){
                this.visibleSelect = 'visible';
            } else {
                this.visibleSelect = 'hidden';
            }
            console.log(this.visibleSelect)
            


        }

    },


})

app.mount('#assignment')