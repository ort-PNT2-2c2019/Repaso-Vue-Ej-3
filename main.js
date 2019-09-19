
var demo = new Vue({

   
    el: '#main',

    
    data: {
        active: ''//??
    },

   
    methods: {
        makeActive: function(item){
            
            this.active = item;
        }
    }
});