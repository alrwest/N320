const app = Vue.createApp({
    data() {
        return {
            name: "Allyson West",
            //date: "10.12.23",
            title: "Vue Challenge"
        }
    },
    methods: {
        getTodayDate() {
            let today = new Date();
            today = today.toLocaleDateString();
            return today;
        }
    }
});

app.mount('#challenge');