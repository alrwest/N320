const vm = Vue.createApp({
    data() {
        return {
            fname:'',
            lname: '',
            preference:'',
            prefText: "",
            music: [],
            
            languages: [
                {
                    id:'vuejs',
                    name: 'Vue',
                    version: 3.2,
                    creator: 'Evan You',
                    dateRelease: 2014,
                    framework:true
                },
                {
                    id: 'reactjs',
                    name: 'React',
                    version: 18.2,
                    creator: 'Jordan Walke',
                    dateRelease: 2011,
                    framework:true
                }, 
                {
                    id:'angularjs',
                    name: 'Angular',
                    version: 1.8,
                    creator: 'Misko Hevery',
                    dateRelease: 2010,
                    framework:true
                }
            ]
        }
    },

    computed: {
        fullName() {
            if(this.fname == "" || this.lname == "") {
                return "";
            } else {
                return this.fname + " " + this.lname;
            }
        }
    },

     //watchers have to have the same name as the property they're watching
     watch: {
        preference(newVal, oldVal) {
            if (oldVal !== '') {
                this.prefText = `Preference has changed from ${oldVal} to ${newVal}`;
            } 
        }
     }
    
})


vm.mount('#moreVue');