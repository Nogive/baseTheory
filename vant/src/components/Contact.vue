<template>
  <div>
    <h2>{{title}}</h2>
    <p>联系人卡片</p>
    <van-contact-card
    :type="cardType"
    :name="currentContact.name"
    :tel="currentContact.tel"
    @click="showList=true"></van-contact-card>


    <p>联系人列表</p>
    <van-popup
    v-model="showList"
    position="bottom">
      <van-contact-list
      v-model="choseContactId"
      :list="list"
      @add="onAdd"
      @edit="onEdit"
      @select="onSelect"></van-contact-list>
    </van-popup>

    <p>联系人编辑</p>
    <van-popup v-model="showEdit" position="bottom">
      <van-contact-edit
      :contact-info="editingContact"
      :is-edit="isEdit"
      @save="onSave"
      @delete="onDelete"></van-contact-edit>
    </van-popup>

  </div>
</template>
<script>
import { Toast,ContactCard,ContactList,ContactEdit,Popup } from 'vant'
export default {
  name:'Contact',
  components: {
    [ContactCard.name]:ContactCard,
    [ContactList.name]:ContactList,
    [ContactEdit.name]:ContactEdit,
    [Popup.name]:Popup,
  },
  data(){
    return {
      title:'Contact 联系人',
      choseContactId:null,
      editingContact:{},
      showList:false,
      showEdit:false,
      isEdit:false,
      list:[{
        name:'zhbjhbhj',
        tel:'11111111111',
        id:0
      }]
    };
  },
  computed:{
    cardType(){
      return this.choseContactId!=null?'edit':'add';
    },
    currentContact(){
      const id =this.choseContactId;
      return id!=null?this.list.filter(item=>item.id===id)[0]:{};
    }
  },
  methods:{
   onAdd(){
     this.editingContact={id:this.list.length};
     this.isEdit=false;
     this.showEdit=true;
   },
   onEdit(item){
     this.isEdit=true;
     this.showEdit=true;
     this.editingContact=item;
   },
   onSelect(){
     this.showList=false;
   },
   onSave(info){
     this.showEdit=false;
     this.showList=false;
     if(this.isEdit){
       this.list=this.list.map(item => item.id === info.id ? info : item)
     }else{
       this.list.push(info);
     }
     this.choseContactId=info.id;
   },
   onDelete(info){
     this.showEdit=false;
     this.list=this.list.filter(item => item.id !== info.id);
     if(this.choseContactId===info.id){
       this.choseContactId=null
     }
   }
  }
}

</script>
<style scope>
</style>


