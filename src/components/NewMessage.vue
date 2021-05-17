<template>
    <div class="NewMessage">
        <form @submit.prevent="addMessage()">
        <label for="newMessage">New Message (Press Enter to add)</label>
        <input type="text"  name="newMessage" v-model="newMessage">
        <p class="red-text" v-if="feedback">{{ feedback }}</p>
        </form>
    </div>  
</template>

<script>
import db from '../firebase/init'
export default {
 
    props:['name'],
    data(){
        return{
            newMessage: null,
            feedback : null
        }
    },
    methods:{
        addMessage(){
           if(this.newMessage){
               db.collection('messages').add({
                   content: this.newMessage,
                   name: this.name,
                   timestamp: Date.now()
               }).catch(err =>{
                   console.log(err)})
                   this.newMessage=null
                   this.feedback = null
           }else{
               this.feedback = "You must enter a message"
           }
        }
    },
}
</script>

<style scoped>

</style>