const app = Vue.createApp({
    data() {
        //ALWAYS RETURNS AN OBJECT
        return {
            courseGoal1: "Learn adv JavaScript",
            courseGoal2: "Learn vue",
            vueLink: "https://vuejs.org",
            fullName: '' //this.fullName()
        }
    },
    methods: {
        newGoal(){
            const rNum = Math.random();
            if (rNum < 0.5) {
                return "Vue is awesome!";
            } else {
                return "Vue is fun.";
            }
        },
        submitForm() {
            alert("Form Submitted!");
        }
    },
    computed: {
        fullName() {
            if (this.name == '') {
                return '';
            } else {
                return this.name + ' ' + 'Thomas';
            }
        },
        nameData() {
            let nameVal = [];
              //length of full name
            let nameLength = this.fullName();
            nameVal.push(nameLength.length);

            //find middle character
            let middleChar = nameLength.charAt(Math.floor(nameLength/2));
            nameVal.push(middleChar);
            return nameVal;
        }
    }
});

app.mount('#myGoals');